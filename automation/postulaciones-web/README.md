# Postulaciones Web → n8n

Flujo que recibe las postulaciones del portal `/vacantes`, las enruta al equipo de selección de la ciudad y las registra.

```
Sitio  →  POST /api/postulacion  →  webhook n8n  →  Drive + Gmail + Sheets
```

El sitio **no conoce el correo del reclutador**: envía el `vacanteId` y este flujo lo resuelve leyendo el Sheet con sus propias credenciales.

## Puesta en marcha

### 1. Preparar el Sheet

Documento: [`Vacantes`](https://docs.google.com/spreadsheets/d/1c52d83mBFfV0f4HLmn0MCgAw-P_aMkJXIerXpenJ9Yw/edit)

1. **Renombrar la pestaña a `Vacantes`.** Al crearse quedó como `Untitled` — clic derecho sobre la pestaña → *Cambiar nombre*. (El nombre del archivo y el de la pestaña son cosas distintas.)
2. Crear en Drive una carpeta para las hojas de vida y copiar su ID (lo que va después de `/folders/` en la URL).

### Documentos

| Documento | Para qué | Quién debe tener acceso |
|---|---|---|
| [`Vacantes`](https://docs.google.com/spreadsheets/d/1c52d83mBFfV0f4HLmn0MCgAw-P_aMkJXIerXpenJ9Yw/edit) | Catálogo que publica el portal | Todo vinculación (edición) |
| [`Postulaciones Web`](https://docs.google.com/spreadsheets/d/1LwXlhlJT5LN_aOQ3eFS3HurYmgNlpxksZvnQBLG6sug/edit) | Registro de quienes se postulan | **Restringido** |

Van **separados a propósito**: el de vacantes se comparte con todo el equipo para que registren, mientras que el de postulaciones acumula datos personales de candidatos (nombre, documento, teléfono) y debe tener acceso más restringido. En un solo documento ambos compartirían permisos.

### 2. Importar el flujo

En n8n: *Workflows → Import from File* → `postulaciones-web.n8n.json`.

Luego:

- **⚙️ Configuración** → reemplazar `PEGAR_AQUI_EL_ID_DE_LA_CARPETA_DE_DRIVE` por el ID de la carpeta.
- Verificar que los tres nodos de Google tomaron las credenciales correctas (vienen apuntando a las mismas que usan los otros flujos).
- Activar el workflow y copiar la **Production URL** del nodo webhook.

### 3. Conectar el sitio

En Vercel, variables de entorno:

| Variable | Valor |
|---|---|
| `N8N_POSTULACION_WEBHOOK` | La Production URL del webhook |
| `VACANTES_SHEET_ID` | `1c52d83mBFfV0f4HLmn0MCgAw-P_aMkJXIerXpenJ9Yw` |
| `GOOGLE_SHEETS_API_KEY` | API key de Google Cloud con la Sheets API habilitada |

Mientras `N8N_POSTULACION_WEBHOOK` no exista, el formulario **cae automáticamente al envío por correo**, así que se puede activar sin prisa.

## Qué hace cada nodo

| Nodo | Qué hace |
|---|---|
| 📥 Postulación (webhook) | Recibe el formulario (multipart; la hoja de vida llega como binario) |
| ⚙️ Configuración | IDs del Sheet y la carpeta, correo de respaldo y de copia |
| 📋 Leer vacantes | Lee la hoja `Vacantes` |
| 🧠 Resolver reclutador | Toma la fila `vacanteId` y saca `correo_reclutador`; arma asunto y cuerpo |
| ❓ ¿Adjuntó hoja de vida? | Bifurca según venga o no archivo |
| 📎 Subir a Drive | Guarda la HV como `Ciudad - Cargo - Nombre` |
| ✉️ Notificar (2 variantes) | Envía al reclutador, con copia a marketing |
| 🧾 Registrar postulación | Agrega la fila en `Postulaciones` |
| ✅ Responder al sitio | Devuelve `{ok: true}` para que el formulario muestre el éxito |

## Detalles que importan

- **`vacanteId` = número de fila de datos.** `1` es la fila 2 del Sheet (la 1 son encabezados). Si el id no cuadra con ninguna fila, el flujo **no se cae**: enruta a `contratacion2@`, marca `ENRUTADO_OK = NO` y avisa en el correo para revisar a mano.
- **Reordenar filas cambia los ids.** Mientras solo se agreguen vacantes al final y se marquen como no activas las que se cierran, los ids se mantienen estables. Si se van a reordenar con frecuencia, conviene migrar a una columna de id propia.
- **`AUTORIZA_MARKETING`** viene del consentimiento **separado y opcional** del formulario. Solo las filas en `SI` pueden entrar a campañas de email marketing: el consentimiento obligatorio cubre el proceso de selección, no usos comerciales (Ley 1581 de 2012).
- Los nodos de Drive y Sheets usan `continueRegularOutput`: si Drive o el registro fallan, **el correo al reclutador igual sale**. Es preferible perder la trazabilidad que perder la postulación.

## Probarlo

Con el workflow activo, desde una terminal:

```bash
curl -X POST "<PRODUCTION_URL>" \
  -F vacanteId=1 \
  -F cargo="Mesero/a de Servicio" \
  -F ciudad="Medellín" \
  -F nombre="Prueba Candidato" \
  -F tipoDocumento=CC \
  -F documento=1020304050 \
  -F edad=28 \
  -F telefono=3001112233 \
  -F autorizaDatos=true \
  -F autorizaMarketing=true \
  -F "hojaVida=@/ruta/a/hoja-de-vida.pdf"
```

Debe responder `{"ok":true}`, llegar el correo a `seleccion4@` (Medellín) y aparecer la fila en `Postulaciones`.
