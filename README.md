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

| # | Formulario | Archivo | Envío actual | Se requiere |
|---|---|---|---|---|
| 1 | Postulación a vacante | `src/components/vacantes/VacantesClient.tsx` | `mailto:` a marketingdigital | Endpoint que persista la postulación **y reciba el archivo de hoja de vida** (por `mailto` el adjunto no se automatiza) |
| 2 | Radicación de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Endpoint que genere **número de radicado** y almacene |
| 3 | Seguimiento de SQR | `src/components/FaqClient.tsx` | `mailto:` a sqr@ | Consulta real de estado por radicado + documento |
| 4 | Contacto empresarial | `src/app/contacto/page.tsx` | `mailto:` a marketingdigital | Endpoint / integración CRM |
| 5 | Propuesta rápida (servicios) | `src/app/servicios/page.tsx` | **Decorativo** (`action="/contacto"` sin método) | Conectar o convertir en enlace a `/contacto` |

### Otros pendientes

- **Medición sin instalar**: no hay GTM (`GTM-PMHJBNJC`), GA4 ni píxel de Meta en el código. Falta inyectar el contenedor en `src/app/layout.tsx` y definir eventos de conversión (envío de formularios, clics en CTA).
- **SEO técnico**: faltan `sitemap.ts` y `robots.ts`; `metadataBase` no está definido en `layout.tsx` (necesario para que las imágenes de Open Graph resuelvan en absoluto).
- **Optimización de imágenes**: solo `/nosotros` usa `next/image`. El resto carga vía `background-image` o `<img>`, perdiendo resize automático, AVIF/WebP y `srcset` responsive.
- **Datos de vacantes**: hoy son un arreglo estático en `VacantesClient.tsx`. Deben alimentarse del módulo interno que ya crea las vacantes.
- **Autorización de marca**: en el portal **no se muestran nombres de empresas cliente como empleadores** — pendiente de permiso comercial. El empleador visible es Asignar.
- **Rama `main` sin protección**: se recomienda exigir PR y checks antes de mergear.

---

## Convenciones

- Ramas de trabajo: `claude/<tema>`; PR contra `main`; Vercel genera preview por PR.
- Commits descriptivos en español, con alcance (`feat(vacantes):`, `style:`, `fix:`).
- Al cerrar una sesión de diseño, actualizar `docs/design/FIGMA-CONTEXT.md`.

## Contacto

- Comercial / marketing: **marketingdigital@asignar.com.co**
- Línea ética (SQR): **sqr@asignar.com.co**
- Línea nacional: **(57) 604 322 0310**
