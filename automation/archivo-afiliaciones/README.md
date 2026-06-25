# Archivo · Automatización de Afiliaciones

Flujo de **n8n** que automatiza el archivo de afiliaciones del correo
**`archivobog@asignar.com.co`** hacia el Dropbox de la empresa, con trazabilidad en
el Sheet **AUT AFILIACIONES**. Independiente del sitio web (no toca `src/`).

Archivo a importar: **`archivo-afiliaciones.n8n.json`** → en n8n: *Workflows → ⋯ → Import from File*.

## Datos reales ya conectados

| Recurso | Valor |
|---|---|
| Cuenta Gmail | `archivobog@asignar.com.co` |
| Sheet de control | **AUT AFILIACIONES** · `1mc1G6U5AljXGjtl2FNjtWY4YPPPH_bGj8fC4l9ewGEM` |
| Pestañas usadas | `MOVIMIENTOS` (OK) · `NO ENCONTRADAS` (revisión/error) |
| Etiqueta anti-duplicado | `Procesado-Afiliaciones` · `Label_32` |
| Raíz Dropbox | `/Asignar Bogotá/12. Archivo` |
| Asunto típico | `ARCHIVO <ENTIDAD>` (ej. "ARCHIVO NUEVA EPS - SURA", "ARCHIVO SALUD TOTAL") |

> El nodo **⚙️ Configuración** ya viene con estos valores. Solo falta conectar las
> credenciales y (opcional) la API key de OCR.

## Flujo (de extremo a extremo)

```
⏰ 6:00 AM
 └ ⚙️ Configuración
   └ 📧 Buscar correos  (subject:ARCHIVO, con adjunto, sin etiqueta Procesado-Afiliaciones)
     └ 🧩 Separar adjuntos            → 1 item por PDF/imagen
       └ 📄 Extraer texto → (OCR si es imagen) → 🤖 Lector IA (Claude)
         └ 🧮 Consolidar datos        → cédula, nombre, entidad, tipo, mejor fecha, AFIL TIPO FECHA
           └ 🔍 Dropbox search_v2 (acotado a 12. Archivo) → 🗂️ Resolver carpeta (cédula→nombre)
             └ ↔️ Resultado
                 ├ ARCHIVAR  → ⬆️ Dropbox /AFILIACIONES/ → ✅ → 🧾 MOVIMIENTOS
                 ├ REVISIÓN  → ✉️ aviso → 🧾 NO ENCONTRADAS
                 └ ERROR     → ✉️ aviso → 🧾 NO ENCONTRADAS
                      └ 🏷️ Marcar correo como Procesado-Afiliaciones
```

## Reglas de negocio implementadas
- **Entidad**: `EPS`, `CCF`, `AFP`, `ARL` (IA + palabras clave de respaldo).
- **Nombre**: `AFIL <TIPO> <AAAA-MM-DD>.pdf` (ej. `AFIL EPS 2026-06-15.pdf`).
- **Mejor fecha**: novedad → ingreso → documento → correo.
- **Carpeta**: por **cédula** y, si no, por **nombre** (tolerante a tildes/mayúsculas/espacios).
- **Anti-duplicados**: solo procesa correos sin la etiqueta; al terminar la aplica.
- **Reintentos** en Gmail/OCR/Dropbox/Sheets; un documento con error no detiene el lote.

## Pendiente: conectar credenciales en n8n
- **Gmail** (`archivobog`) → buscar, notificar, etiquetar.
- **Google Drive** (Drive de Ruth) → buscar carpeta del colaborador (HTTP, credencial predefinida) + subir el PDF.
- **Google Sheets** → AUT AFILIACIONES.
- **Anthropic (Claude)** → nodo lector.

> **Nota:** se reemplazó Dropbox por **Google Drive** (el Dropbox Business tiene políticas
> que bloquean apps de terceros). La carpeta del colaborador se busca **por nombre que
> contenga la cédula** (y, si falla, el nombre) en el Drive de Ruth, y el PDF se sube ahí.
> Para que funcione el camino feliz en la demo, deben existir carpetas en ese Drive cuyo
> nombre incluya la cédula del colaborador.

## Dos hallazgos importantes (a decidir)

1. **Los datos vienen en el CUERPO del correo.** Los remitentes listan, por colaborador:
   `ENTIDAD: CÉDULA NOMBRE FECHA` (ej. `NUEVA EPS: 1104009061 ALMARIO CORREA MIRNA LUZ 17/06/2026`).
   Esto es **más confiable que el OCR del PDF**. Recomiendo añadir un parser del cuerpo que
   cruce cada PDF (por cédula en el nombre) con su línea del correo. *(Pendiente de tu visto bueno.)*

2. **Ya existe `indice_carpetas.json`** (índice de todas las carpetas de `12. Archivo`, del
   script `afiliaciones_v2.py`). Si lo subimos a n8n, la ubicación de carpeta sería un
   **lookup instantáneo** y dejaríamos de depender de la API de Dropbox para buscar. *(Pásame
   ese JSON y lo integro como ruta principal, dejando search_v2 como respaldo.)*

## Pruebas antes de Deploy
1. *Execute Workflow* manual con un correo real ya en bandeja (sin la etiqueta).
2. Validar `🧩 Separar adjuntos` y `🤖 Lector IA`.
3. Caso con carpeta → `MOVIMIENTOS` + estado OK. Caso sin carpeta → `NO ENCONTRADAS` + correo.
4. Confirmar que el correo queda etiquetado y no se reprocesa.
5. Activar el cron (6:00 a.m., `America/Bogota`).

## Por validar
- [ ] Estructura real de `/Asignar Bogotá/12. Archivo` (no pude scrapear Dropbox desde aquí).
- [ ] ¿Destino es subcarpeta `AFILIACIONES` o la raíz de la carpeta del colaborador?
- [ ] ¿Parsear el cuerpo del correo (recomendado) además/en vez del OCR?
- [ ] ¿Integrar `indice_carpetas.json` como buscador principal?
- [ ] Varios adjuntos del mismo colaborador en un correo (hoy archiva cada uno).
```
