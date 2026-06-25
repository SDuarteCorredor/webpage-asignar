# Archivo · Automatización de Afiliaciones (Root)

Flujo de **n8n** que cada día a las **6:00 a.m.** revisa el correo corporativo de Root,
descarga los PDFs de afiliaciones, los archiva en el Dropbox de Root dentro de la carpeta
del colaborador (buscando por cédula) y lleva el control en el Sheet **`out afiliaciones`**.

> Este flujo es independiente del sitio web. No toca nada de `src/`.

## Archivo a importar

`archivo-afiliaciones.n8n.json` → en n8n: **Workflows → ⋯ → Import from File**.

## Qué hace (resumen del flujo)

```
⏰ 6:00 AM
   └─ ⚙️ Configuración (IDs, correo, pestañas)
       └─ 📧 Buscar correos de afiliaciones (Gmail de Root, con adjuntos)
           └─ 🧩 Normalizar y separar PDFs  → 1 item por PDF
               ├─ ¿Datos completos? ── sí ──┐
               └─ no → 📄 Leer texto PDF → 🤖 Lector IA (Claude) → 🔗 Fusionar campos
                                                                        │
               ┌────────────────────────────────────────── ➕ Unir rutas
               ▼
        🔍 Buscar carpeta por cédula (Dropbox, todo el árbol)
               └─ 📎 Recombinar binario → 🗂️ Definir carpeta/nombre
                   └─ ¿Carpeta encontrada?
                        ├─ sí → ⬆️ Archivar en Dropbox → ✅ Reporte: Realizadas
                        └─ no → ⏳ Reporte: Pendientes → ✉️ Notificar a Root
```

### Las dos rutas que pediste
1. **Ruta archivo (Dropbox):** ubica la carpeta del colaborador por cédula y guarda el PDF
   en la subcarpeta `AFILIACIONES`, renombrado a:
   `\<cédula\> \<ENTIDAD\> \<TIPO\> \<dd-mm-aaaa\>.pdf`
2. **Ruta datos (Sheets):** registra cada PDF en `out afiliaciones`, en pestañas separadas
   **Realizadas** y **Pendientes**.

### Extracción híbrida
- **Código (rápido y predecible):** saca la cédula y la entidad del nombre del PDF y
  clasifica `EPS` vs `CAJA` (replica tu Apps Script).
- **IA / Claude (respaldo):** si el nombre no trae los datos, el **Lector IA** lee el
  texto del PDF y completa cédula, entidad, tipo y fecha de ingreso.

### Dropbox desordenado
La búsqueda usa `search` por **número de cédula sobre todo el árbol**, así que no importa en
qué subcarpeta esté el colaborador. Si hay varias coincidencias, prioriza la carpeta cuya
ruta contiene la cédula.

## Configuración (antes de activar)

Abre el nodo **⚙️ Configuración** y reemplaza:

| Campo | Qué poner |
|---|---|
| `spreadsheetId` | ID del Sheet **out afiliaciones** (la parte entre `/d/` y `/edit`) |
| `notifyEmail` | Correo de Root para las notificaciones |
| `gmailQuery` | Ya viene con `AFILIACIONES / AFILIACION / "ARCHIVO NUEVA EPS Y SURA"`. Ajusta si cambia el asunto |
| `tabRealizadas` / `tabPendientes` | Nombres de las pestañas (por defecto `Realizadas` / `Pendientes`) |

### Credenciales a conectar en n8n
- **Gmail (cuenta de Root)** → nodos `📧 Buscar correos` y `✉️ Notificar`.
- **Dropbox de Root** → nodos `🔍 Buscar` y `⬆️ Archivar`.
- **Google Sheets** → nodos de reporte.
- **Anthropic (Claude)** → nodo `Claude Sonnet`.

### Sheet `out afiliaciones`
Crea dos pestañas con estos encabezados en la fila 1:

```
Fecha proceso | Cédula | Entidad | Tipo | Fecha ingreso | Archivo | Carpeta Dropbox | Estado | Remitente
```

## Pruebas antes de Deploy
1. **Sin cron:** usa *Execute Workflow* manual con un correo de prueba ya en la bandeja.
2. Revisa que `🧩 Normalizar y separar PDFs` saque bien la cédula/entidad.
3. Verifica un caso **con carpeta** (debe quedar en `AFILIACIONES` y en *Realizadas*) y uno
   **sin carpeta** (debe ir a *Pendientes* y llegar correo a Root).
4. Cuando todo esté ok, marca el workflow como **Active** para que corra a las 6 a.m.

## Pendientes / datos que faltan
- [ ] **Correo completo de Root** (la cuenta a monitorear).
- [ ] **ID del Sheet `out afiliaciones`**.
- [ ] Confirmar **versiones de los nodos** según tu instancia de n8n (puede pedir ajustar
  `typeVersion` al importar; n8n lo resuelve solo en la mayoría de casos).
- [ ] Validar la **estructura real del Dropbox** para afinar la elección de carpeta cuando
  haya múltiples coincidencias.
