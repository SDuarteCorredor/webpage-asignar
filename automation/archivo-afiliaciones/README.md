# Archivo · Automatización de Afiliaciones

Flujo de **n8n** que automatiza el archivo de afiliaciones del correo
**`archivobog@asignar.com.co`** hacia el Dropbox de la empresa, con trazabilidad en
Google Sheets. Independiente del sitio web (no toca `src/`).

Archivo a importar: **`archivo-afiliaciones.n8n.json`** → en n8n: *Workflows → ⋯ → Import from File*.

## Flujo (de extremo a extremo)

```
⏰ 6:00 AM
 └ ⚙️ Configuración
   └ 📧 Buscar correos (sin etiqueta "Procesado-Afiliaciones", con adjuntos)
     └ 🧩 Separar adjuntos            → 1 item por PDF/imagen (uid = messageId::archivo)
       └ 📄 Extraer texto
         └ ¿Necesita OCR?  ── imagen / texto vacío → 🔎 OCR (OCR.space) → 📝 texto
           └ 🤖 Lector IA (Claude)    → cédula, nombre, entidad, tipo, fechas
             └ 🧮 Consolidar datos    → mejor fecha + clasificación + nombre AFIL TIPO FECHA
               └ 🔍 Dropbox search_v2 (acotado a "/Asignar Bogotá/12. Archivo")
                 └ 🗂️ Resolver carpeta (por cédula; si no, por nombre)
                   └ ↔️ Resultado
                       ├ ARCHIVAR  → ⬆️ Dropbox (.../AFILIACIONES/) → ✅ OK
                       ├ REVISIÓN  → ✉️ aviso (varias carpetas coinciden)
                       └ ERROR     → ✉️ aviso (sin carpeta)
                            └ 🧾 Registrar en Control → 🏷️ Marcar correo procesado
```

## Reglas de negocio implementadas

- **Clasificación de entidad** (IA + palabras clave de respaldo): `EPS`, `CCF`, `AFP`, `ARL`.
- **Nombre del archivo**: `AFIL <TIPO> <AAAA-MM-DD>.pdf` (ej. `AFIL EPS 2026-06-15.pdf`).
- **Mejor fecha** por prioridad: novedad → ingreso → documento → fecha del correo.
- **Búsqueda de colaborador**: por **cédula** y, si no aparece, por **nombre**
  (tolerante a tildes, mayúsculas y espacios dobles).
- **Multi-coincidencia** → estado `REVISIÓN MANUAL`. **Sin carpeta** → estado `ERROR`. Ambos notifican.
- **OCR** (OCR.space, opcional) cuando el adjunto es imagen o el PDF no trae texto.
- **Anti-duplicados**: el correo se procesa solo si NO tiene la etiqueta `Procesado-Afiliaciones`;
  al terminar se etiqueta. La hoja Control guarda el `Message ID` para auditoría.
- **Reintentos** automáticos en Gmail, OCR, Dropbox y Sheets; errores de un documento no
  detienen el lote (`onError: continueRegularOutput`).

## Configuración (nodo ⚙️ Configuración)

| Campo | Valor |
|---|---|
| `gmailQuery` | `has:attachment newer_than:3d -label:Procesado-Afiliaciones` (ajustable) |
| `dropboxRoot` | `/Asignar Bogotá/12. Archivo` |
| `spreadsheetId` | **PENDIENTE** — ID del Sheet de control |
| `controlTab` | `Control` |
| `notifyEmail` | `archivobog@asignar.com.co` (o el correo de Ruth) |
| `processedLabelId` | **PENDIENTE** — ID de la etiqueta de Gmail (no el nombre) |
| `ocrApiKey` | Opcional — API key de OCR.space (gratis en ocr.space) |

### Credenciales a conectar en n8n
- **Gmail** (cuenta `archivobog`) → buscar, notificar, etiquetar.
- **Dropbox** (workspace Asignar) → search_v2 (HTTP, credencial predefinida) + upload.
- **Google Sheets** → hoja Control.
- **Anthropic (Claude)** → nodo lector.

### Hoja de control (una sola pestaña `Control`)
Encabezados en la fila 1:

```
Fecha procesamiento | Message ID | Remitente | Asunto | Nombre colaborador | Cédula |
Entidad | Tipo | Fecha documento | Archivo original | Archivo guardado | Ruta Dropbox |
Estado | Observación
```

> **Cambio respecto a la primera versión:** el prompt maestro pide una **tabla de control
> única con estado** (OK / REVISIÓN / ERROR), así que reemplacé las pestañas separadas
> *Realizadas/Pendientes* por esta hoja única filtrable por `Estado`. Si prefieres volver a
> dos pestañas, lo cambio en 2 minutos.

## Pruebas antes de Deploy
1. *Execute Workflow* manual con un correo real ya en la bandeja (sin la etiqueta).
2. Validar `🧩 Separar adjuntos` (cédula del nombre) y `🤖 Lector IA` (campos extraídos).
3. Caso **con carpeta** → debe quedar en `…/AFILIACIONES/` y estado `OK`.
4. Caso **sin carpeta** y **multi-coincidencia** → estados `ERROR` / `REVISIÓN` + correo.
5. Confirmar que el correo queda etiquetado y no se reprocesa al volver a correr.
6. Activar el workflow (cron 6:00 a.m., zona `America/Bogota`).

## Pendientes / a validar
- [ ] **ID del Sheet de control** y **ID de la etiqueta** de Gmail.
- [ ] **Estructura real de `/Asignar Bogotá/12. Archivo`** (no pude scrapear Dropbox desde
  aquí): con un pantallazo del árbol afino la selección cuando una cédula tenga varias carpetas
  y confirmo si el destino es subcarpeta `AFILIACIONES` o la raíz de la carpeta del colaborador.
- [ ] ¿Qué hacer con **varios adjuntos del mismo colaborador** en un correo? Hoy archiva cada uno.
- [ ] Reglas finas de **AFP/ARL** si hay entidades específicas que no estén en la lista de keywords.
- [ ] Confirmar **versiones de nodos** según tu instancia de n8n (al importar puede pedir ajustar `typeVersion`).
```
