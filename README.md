# Asignar SAS — Sitio web

Sitio institucional y portal de empleo de **Asignar SAS**, empresa de servicios temporales (Ley 50 de 1990) con más de 20 años en Colombia y presencia en 9 ciudades.

> Rediseño construido por el equipo de Marketing Digital para revisión e integración del equipo de Desarrollo. **Es capa de presentación (front-end)**: no toca backend, base de datos ni endpoints existentes.

---

## Stack

| | |
|---|---|
| Framework | Next.js **16.2.9** (App Router) |
| UI | React 19.2.4 · TypeScript 5 |
| Estilos | Tailwind CSS v4 (configuración CSS-first en `src/app/globals.css`) |
| Fuentes | Plus Jakarta Sans (display) · DM Sans (cuerpo) · Inter (UI) vía `next/font` |
| Íconos | Material Symbols Outlined + SVG inline |
| Node | 22.x · gestor **npm** |
| Deploy | Vercel (integración nativa con GitHub; preview por PR) |

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint       # eslint
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz: fuentes, metadata, Navbar + Footer
│   ├── globals.css         # Tokens del design system (Tailwind v4)
│   ├── page.tsx            # Home
│   ├── vacantes/           # Portal de empleo (lista + detalle + postulación)
│   ├── servicios/          # Oferta B2B
│   ├── nosotros/           # Institucional
│   ├── faq/                # SQR (radicación y seguimiento) + preguntas frecuentes
│   └── contacto/           # Contacto dual (empresa / candidato)
├── components/
│   ├── Navbar.tsx · Footer.tsx · ScrollRevealInit.tsx
│   ├── home/               # Secciones del home
│   ├── vacantes/           # VacantesClient (portal completo)
│   ├── soluciones/         # ServiciosExplorer
│   ├── nosotros/           # StatsBar
│   └── ui/                 # Componentes reutilizables
└── public/
    ├── clientes-brand/     # 63 logos de clientes (WebP)
    ├── images/             # Fotografía por página
    ├── home/ · testimonios/
```

## Rutas

| Ruta | Descripción | Público |
|---|---|---|
| `/` | Home | Mixto |
| `/vacantes` | Portal de empleo: búsqueda, filtros, detalle y postulación | Candidato |
| `/servicios` | Catálogo de servicios, diferenciales, proceso y clientes | Empresa |
| `/nosotros` | Historia, DOCA, cobertura nacional | Mixto |
| `/faq` | **SQR** — radicar y hacer seguimiento + preguntas frecuentes | Trabajador / usuario |
| `/contacto` | Selector empresa/candidato + formulario y sedes | Mixto |

> `/faq` conserva la URL por compatibilidad, pero en la interfaz **siempre se llama SQR**.
> Acepta anclas para preseleccionar categoría: `/faq#nomina`, `/faq#sst`, `/faq#vinculacion`, `/faq#seguridad-social`, `/faq#terminaciones`, `/faq#marcacion`.

## Design system

Fuente de verdad: **`DESIGN.md`** (espejo con `src/app/globals.css` y Figma). Reglas:

- **Nunca** hex crudos en componentes nuevos — usar tokens.
- Marca: `brand-blue #007AFE` · `brand-light-blue #05B8FD` · `brand-deep-blue #0056B3` · `brand-navy #001233`.
- Superficies: `surface #F6F8FB` · `surface-gray #EDF1F6` · `border #E2E8F0`.
- Gold eliminado del sistema (decisión 2026-07-08).
- Títulos: centrados en móvil, alineados a la izquierda en desktop (`text-center lg:text-left`).

Antes de trabajo de UI leer en orden: `PRODUCT.md` → `DESIGN.md` → `docs/design/FIGMA-CONTEXT.md`.

---

## ⚠️ Pendientes para el equipo de Desarrollo

Los formularios están **completos en UI y validación de cliente**, pero envían por `mailto:` como solución interina (funciona hoy sin backend). Cada uno tiene un comentario `TODO(TI)` en el código.

El asunto y las etiquetas del cuerpo de esos correos están **acoplados a las automatizaciones n8n existentes** — ver la sección *Automatizaciones*. Al reemplazar el `mailto:` por un endpoint hay que conservar ese contrato o ajustar los flujos.

| # | Formulario | Archivo | Envío actual | Se requiere |
|---|---|---|---|---|
| 1 | Postulación a vacante | `src/app/api/postulacion/route.ts` | POST a n8n (respaldo por `mailto`) | **Crear el flujo n8n** y definir `N8N_POSTULACION_WEBHOOK`. Mientras no exista, el formulario cae al correo automáticamente |
| 2 | Radicación de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Endpoint que genere **número de radicado** y almacene |
| 3 | Seguimiento de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Consulta real de estado por radicado + documento |
| 4 | Contacto empresarial | `src/app/contacto/page.tsx` | `mailto:` a comercialbog@ (copia a gerencia y coordinación) | Endpoint / integración CRM |
| 5 | Solicitud de propuesta | `src/components/servicios/PropuestaForm.tsx` | `mailto:` a comercialbog@ (copia a gerencia y coordinación) | Endpoint que registre la solicitud y dispare la automatización del lado del servidor |

### Otros pendientes

- **Píxel de Meta**: aún no está. GTM ya está instalado, así que puede cargarse como etiqueta desde el propio contenedor sin tocar código.
- **Imágenes restantes**: el hero del home, el bloque B2B y el de SG-SST ya usan `next/image`. Faltan por migrar las fotos de sectores, beneficios, testimonios y DOCA (se cargan vía `background-image` con rutas dinámicas).
- **Autorización de marca**: en el portal **no se muestran nombres de empresas cliente como empleadores** — pendiente de permiso comercial. El empleador visible es Asignar.
- **Rama `main` sin protección**: se recomienda exigir PR y checks antes de mergear.

## Vacantes desde Google Sheets

El equipo de vinculación publica vacantes registrando filas en un Sheet; el sitio las muestra sin necesidad de desplegar (la página se revalida cada 5 minutos).

**Hoja `Vacantes`** — fila 1 son encabezados, y el orden de columnas importa:

| Col | Campo | Notas |
|---|---|---|
| A | `activa` | `SI` publica la vacante; cualquier otro valor la oculta |
| B | `cargo` | Obligatorio; si está vacío la fila se ignora |
| C | `ciudad` | Alimenta el buscador y el enrutamiento de la postulación |
| D | `departamento` | |
| E | `sector` | |
| F | `contrato` | Por defecto "Obra o labor" |
| G | `salario` | Texto libre, ej. `$1.550.000` |
| H | `salario_detalle` | ej. `+ Auxilio de transporte · + Prestaciones de ley` |
| I | `experiencia` | |
| J | `jornada` | |
| K | `modalidad` | Por defecto "Presencial" |
| L | `funciones` | |
| M | `destacada` | `SI` le pone la etiqueta "Destacada" |
| N | `correo_reclutador` | **Oculto: el sitio no lee esta columna** (ver abajo) |
| O | `id` | Identificador estable y **único**. Es lo que viaja en la URL, el QR y la postulación |

El Sheet ya está creado y poblado con las 12 vacantes iniciales, con el `correo_reclutador` prellenado según el mismo mapeo por ciudad que usa el flujo *Router Aspirantes*.

### Por qué el `id` va en una columna propia

Antes el identificador era el **número de fila**, lo que obligaba a no ordenar, no insertar y no borrar filas: cualquiera de las tres reasignaba los ids y las postulaciones empezaban a llegarle al reclutador equivocado.

Con la columna `id` esa restricción desaparece. Lo único que hay que respetar es que **un id no se reutilice ni cambie** una vez publicada la vacante: hay enlaces y códigos QR circulando con él. El formulario de alta lo genera solo (mayor id + 1), así que en la práctica nadie lo escribe a mano.

Mientras la columna esté vacía, el sitio y el flujo de postulaciones siguen usando el número de fila, así que la migración no rompe nada a mitad de camino.

Los filtros del portal (ciudad, sector, modalidad, experiencia, contrato) se derivan de lo que haya publicado: agregar una ciudad o un sector nuevo en el Sheet lo hace aparecer solo, sin tocar código.

### Privacidad

- La lectura ocurre **solo en el servidor**: las credenciales nunca llegan al navegador.
- Se autentica con una **cuenta de servicio** (`src/lib/google-auth.ts`), no con una API key. Una API key no es una identidad: obliga a dejar el Sheet accesible para cualquiera con el enlace. La cuenta de servicio sí lo es, así que el documento se comparte **solo con ella**, en modo lector.
- El sitio pide los rangos **A:M y O:O en una sola llamada**, saltándose la N a propósito. **El correo del reclutador (col. N) no se lee ni siquiera en el servidor**: la postulación viaja con el `id` de la vacante y es n8n —con sus propias credenciales— quien resuelve a quién enrutarla.
- ⚠️ **No conectar aquí el Sheet de control operativo de solicitudes**: ese contiene nombres de clientes y datos personales de candidatos (cédulas y nombres completos). Debe usarse una hoja aparte solo con las columnas de arriba.

### Si el Sheet no está configurado

`src/lib/vacantes.ts` cae a una lista de respaldo para que el portal nunca quede vacío, y el error queda en los logs del servidor. `GET /api/vacantes` indica de dónde vinieron los datos en el campo `fuente` (`sheet` o `respaldo`).

### Postulaciones

`POST /api/postulacion` (multipart) valida los campos mínimos, limita la hoja de vida a 5 MB en PDF/Word y reenvía todo a `N8N_POSTULACION_WEBHOOK`. Si la variable no está definida, el endpoint responde 503 y el formulario usa el correo como respaldo.

Campos que recibe el webhook:

| Campo | Notas |
|---|---|
| `vacanteId` | El `id` estable de la columna O. **Con este se resuelve el `correo_reclutador`** |
| `cargo`, `ciudad`, `sector` | Copia de la vacante, para el asunto y el registro |
| `nombre`, `tipoDocumento`, `documento`, `edad`, `telefono`, `whatsapp` | Datos del candidato |
| `hojaVida` | Archivo binario (PDF/Word, máx. 5 MB). Puede no venir |
| `autorizaDatos` | Siempre `true`: es obligatorio para enviar |
| `autorizaMarketing` | `true`/`false` — **consentimiento separado y opcional** |

El flujo n8n debe: buscar la fila cuyo `id` coincide con `vacanteId`, leer su `correo_reclutador`, subir la hoja de vida a Drive, notificar al reclutador y registrar la postulación.

### Consentimiento y comunicaciones comerciales

El formulario tiene **dos casillas independientes**:

1. **Obligatoria** — tratamiento de datos para el proceso de selección (Ley 1581 de 2012).
2. **Opcional** — recibir información sobre nuevas vacantes.

Solo los candidatos con `autorizaMarketing = true` pueden entrar a campañas de email marketing o remarketing. El consentimiento del punto 1 **no** habilita usos comerciales, y mezclarlos expondría a la empresa. Además, una lista construida así rinde más: son personas que pidieron recibir.

## Medición

Google Tag Manager (`GTM-PMHJBNJC`) se carga desde `src/components/GoogleTagManager.tsx` con `next/script` en estrategia `afterInteractive`, más el `<noscript>` de respaldo.

Los formularios empujan estos eventos al `dataLayer` (`src/lib/analytics.ts`). En GTM cada uno se configura como disparador personalizado con el mismo nombre:

| Evento | Se dispara en | Parámetros |
|---|---|---|
| `solicitud_comercial` | Formulario de cotización (`/servicios` y `/contacto`) | `origen`, `servicio`/`sector`, `ciudad` |
| `postulacion_enviada` | Postulación a una vacante | `cargo`, `ciudad`, `sector`, `con_hoja_de_vida` |
| `sqr_radicada` | Radicación de SQR | `tipo`, `sede`, `vinculo` |
| `sqr_seguimiento` | Consulta de estado de SQR | — |

## Variables de entorno

| Variable | Por defecto | Para qué |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.asignar.com.co` | Base de `metadataBase`, `sitemap.xml` y `robots.txt`. **Mientras el sitio viva en el preview de Vercel debe apuntar allí**, si no el sitemap anunciará URLs que aún no existen. |
| `NEXT_PUBLIC_GTM_ID` | `GTM-PMHJBNJC` | Contenedor de GTM. Vacío = no se carga el script (útil en desarrollo). |
| `VACANTES_SHEET_ID` | — | Id del Sheet de vacantes. Sin él se usa la lista de respaldo. |
| `VACANTES_SHEET_RANGE` | `Vacantes!A:M` | Rango publicable. Deliberadamente **no incluye la columna N** (correo del reclutador). El `id` se lee siempre de la O. |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | — | `client_email` de la cuenta de servicio. **Forma recomendada de autenticar.** |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | — | `private_key` del JSON de la cuenta de servicio, completa. **Sin `NEXT_PUBLIC_`.** |
| `GOOGLE_SHEETS_API_KEY` | — | Alternativa a la cuenta de servicio. La organización tiene bloqueada la creación de API keys, así que normalmente no aplica. |
| `N8N_POSTULACION_WEBHOOK` | — | Webhook del flujo de postulaciones. Sin él, el formulario usa el correo. |
| `GOOGLE_SHEETS_API_BASE` | API de Google | Solo para pruebas: permite apuntar a un simulador. |

---

## Convenciones

- Ramas de trabajo: `claude/<tema>`; PR contra `main`; Vercel genera preview por PR.
- Commits descriptivos en español, con alcance (`feat(vacantes):`, `style:`, `fix:`).
- Al cerrar una sesión de diseño, actualizar `docs/design/FIGMA-CONTEXT.md`.

## Automatizaciones (n8n)

Dos flujos ya en producción consumen los correos que genera el sitio. El formato de los correos está hecho para ellos:

**1. Cotizaciones — Solicitudes Comercial** · buzón comercial
- Filtra por asunto `Nuevo Contacto empresarial` y parsea el cuerpo con etiquetas exactas: `Empresa`, `Nombre del contacto`, `Email de contacto`, `Teléfono`, `Ciudad`, `Mensaje` (esta última al final: su regex captura multilínea hasta el fin del correo).
- Sin `Email de contacto` la solicitud cae en la rama **REVISAR** y hay que responderla a mano → por eso el correo es obligatorio en el formulario.
- Responde al cliente con el portafolio en PDF y registra la solicitud en Google Sheets.

**2. Router Aspirantes** · buzón `marketingdigital@`
- Clasifica el correo con IA y lo reenvía al equipo de selección **según la ciudad**.
- Por eso los correos de postulación ponen la ciudad **sola en su línea**, y la plantilla de "Envía tu hoja de vida" la pide de forma explícita.
- ⚠️ El router mapea 7 ciudades (Bogotá, Medellín, Rionegro, Cali, Barranquilla, Cartagena, Pereira). **Santa Marta y Manizales no están**, así que esas postulaciones caen en el buzón de revisión manual.

## Contacto

| Área | Correo |
|---|---|
| Comercial (cotizaciones y empresas) | **comercialbog@asignar.com.co** — con copia a gerencia y coordinación |
| Talento (hojas de vida, postulaciones) y contacto general | **marketingdigital@asignar.com.co** |
| Línea ética (SQR) | **sqr@asignar.com.co** |
| Línea nacional | **(57) 604 322 0310** |
