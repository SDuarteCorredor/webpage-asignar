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
| 1 | Postulación a vacante | `src/components/vacantes/VacantesClient.tsx` | `mailto:` a marketingdigital | Endpoint que persista la postulación **y reciba el archivo de hoja de vida** (por `mailto` el adjunto no se automatiza) |
| 2 | Radicación de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Endpoint que genere **número de radicado** y almacene |
| 3 | Seguimiento de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Consulta real de estado por radicado + documento |
| 4 | Contacto empresarial | `src/app/contacto/page.tsx` | `mailto:` a comercialbog@ (copia a gerencia y coordinación) | Endpoint / integración CRM |
| 5 | Solicitud de propuesta | `src/components/servicios/PropuestaForm.tsx` | `mailto:` a comercialbog@ (copia a gerencia y coordinación) | Endpoint que registre la solicitud y dispare la automatización del lado del servidor |

### Otros pendientes

- **Píxel de Meta**: aún no está. GTM ya está instalado, así que puede cargarse como etiqueta desde el propio contenedor sin tocar código.
- **Imágenes restantes**: el hero del home, el bloque B2B y el de SG-SST ya usan `next/image`. Faltan por migrar las fotos de sectores, beneficios, testimonios y DOCA (se cargan vía `background-image` con rutas dinámicas).
- **Datos de vacantes**: hoy son un arreglo estático en `VacantesClient.tsx`. Deben alimentarse del módulo interno que ya crea las vacantes.
- **Autorización de marca**: en el portal **no se muestran nombres de empresas cliente como empleadores** — pendiente de permiso comercial. El empleador visible es Asignar.
- **Rama `main` sin protección**: se recomienda exigir PR y checks antes de mergear.

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
