# FIGMA-CONTEXT.md — Estado y protocolo del design system

> **Léeme primero** si eres una sesión de Claude Code trabajando diseño en este proyecto.
> Última actualización: 2026-07-01 (sesión: setup inicial + Home v1).

## 1. El archivo de Figma

- **Archivo**: "Asignar — Design System"
- **fileKey**: `wSbfWleY46HpbOiL31go7O`
- **URL**: https://www.figma.com/design/wSbfWleY46HpbOiL31go7O
- **Cuenta**: Asignar SAS (marketingdigital@asignar.com.co) · plan Pro · `planKey: team::1653854165367381859`

## 2. Registro de nodos (NO regenerar — reutilizar por ID)

Todo lo creado está etiquetado con `setSharedPluginData('dsb', 'key', …)` y `run_id: asignar-ds-2026-07-01`. **Idempotencia**: antes de crear algo, busca por su clave `dsb`.

### Colecciones de variables (46 vars, modo claro)
| Colección | ID | Claves |
|---|---|---|
| Primitives | `VariableCollectionId:2:2` | `primitive/brand/*`, `surface/*`, `ink/*` (scopes vacíos, ocultas) |
| Color | `VariableCollectionId:2:3` | `color/bg/*`, `color/text/*`, `color/border/*`, `color/accent/*`, `color/icon/*` (aliasadas a primitivas, code syntax `var(--…)`) |
| Spacing | `VariableCollectionId:2:4` | `spacing/xs…4xl`, `spacing/section*`, `size/container-max` |
| Radius | `VariableCollectionId:2:5` | `radius/sm…full` |

### Estilos
- **Texto (15)**: Display/Hero·XL, Heading/H1–H5, Body/Large·Base·Base Medium·Small, Label/Large·Base·Small·Eyebrow. Clave dsb: `text-style/<nombre>`.
- **Efecto (5)**: Card/Elevated (+Hover), Shadow/sm·md·lg. Clave dsb: `effect-style/<slug>`.
- Fuentes en Figma: Plus Jakarta Sans (`ExtraBold`,`SemiBold` sin espacio) · DM Sans · Inter (`Semi Bold` CON espacio).

### Componentes
| Set | Node ID | Detalle |
|---|---|---|
| Button | `10:179` | 36 variantes (Primary/Secondary/Ghost/Gradient × S/M/L × Default/Hover/Disabled). Props: `Label#10:0`, `Show Icon#10:37`, `Icon#10:74` (INSTANCE_SWAP) |
| Badge | `8:15` | Brand/Soft/Neutral/Gold. Props: Label (TEXT), Show dot (BOOLEAN) |
| Card | `11:24` | Elevated/Bordered. Props: Title, Body, CTA |
| Icons | página `7:2` | arrow-right `7:6`, check `7:9`, chevron-right `7:12`, close `7:16`, menu `7:21`, mail `7:25`, phone `7:28`, star `7:31`, briefcase `7:35`, users `7:41` |

### Páginas del archivo
Cover → Getting Started → 🎨 Foundations (root `6:2`) → ——— Components ——— → 🔘 Button (`9:2`) → 🏷️ Badge → ✦ Icons (`7:2`) → 🃏 Card → 📄 Home (`14:2`)

### Home v1 (wrapper `14:3`) — 13 secciones construidas
Hero `15:2` · Vacantes `17:22` · Stats `17:218` · Logos `17:232` · Beneficios `17:255` · DOCA `18:69` · Proceso `19:77` · SGSST `20:89` · B2B `21:98` · Sectores `22:107` · Confianza `23:119` · Testimonios `24:124` · Respaldo `24:189`.
Estado JSON completo: `docs/design/figma-state.json`.

### 🎯 Dirección v2 (página `50:2`, run_id `asignar-ds-2026-07-01-2`)
Tres conceptos de Hero para el rediseño, construidos con instancias del DS:
- **A — Editorial Humano** `50:4`: split asimétrico, display 96px con itálica azul en "talento", foto full-bleed derecha, banda editorial de stats abajo.
- **B — Navy Premium** `50:6`: fondo navy, display blanco con "experiencias" en itálica dorada, foto en arco con borde dorado punteado, CTAs blanco/outline, línea de confianza.
- **C — Bento Dinámico** `50:8`: grid bento 5 celdas (headline+CTA, foto, contador navy, ticker de vacantes, CTA empresa en gradiente).
Design Read aplicado: rediseño-overhaul, VARIANCE 8 / MOTION 6 / DENSITY 4. Correcciones vs v1: sin eyebrow, hero ≤4 elementos de texto, énfasis itálico misma familia, anti-centrado.

### 🚀 Home v2 EN CÓDIGO (rama `claude/home-v2-sections`, 2026-07-06)
Secciones rediseñadas en Figma y ya llevadas a React/Next (fieles al Figma aprobado):
- **B2B** (`21:98` → `B2BSection.tsx`): split, imagen izq con glass stats flotantes (+20 / 7+ / 500+), checklist 6 items con círculos azules, CTAs. Sin fondo azul ni dorado.
- **Sectores** (`22:107` → `SectoresSection.tsx`): bento `lg:grid-cols-7` (spans 3-2-2 / 2-3-2), hover zoom 1.06, overlay slide, flecha CTA. Íconos SVG inline.
- **Testimonios** (`24:124` → `TestimonialsSection.tsx`, client): scroll reel 3 columnas contra-rotatorias (`reel-up`/`reel-down`) + card destacada central + cita con rise por palabra (`testi-rise`) + nav prev/next/dots.
- **Políticas y Sostenibilidad** (`24:189` → `PoliticasSostenibilidad.tsx`): reemplaza Respaldo. Split, grid de 11 PDFs REALES (`asignar.com.co/build/img/`, mismos del dropdown del Navbar) + imagen.
- **Eliminadas**: Confianza (`ConfianzaSectores.tsx`) y Respaldo (`RespaldoStrip.tsx`).
- **CSS**: nuevos keyframes en `globals.css` (`reel-up`/`reel-down`/`testi-rise`) con soporte `prefers-reduced-motion`.
- **Header/Footer**: intactos por pedido del cliente.
- **Imágenes EXTRAÍDAS de Figma** (vía `download_assets` → `rawImages`, optimizadas a JPG con `sharp`, en `public/home/`): `hero.jpg`, `ben-1..6.jpg`, `b2b.jpg`, `sst.jpg`, `sec-{hotelero,restaurantes,industrial,logistica,servicios,inmobiliario}.jpg` (~1.4MB total). Truco: el nodo con nombre "image" o la foto base viven en `rawImages[0]`; el `export` compuesto trae texto/overlay fusionado. `curl` a assets de Figma SÍ funciona en este entorno (nota vieja del §5 obsoleta).
- **Secciones ya fieles al Figma en código**: Hero (foto full-bleed + 3 glass cards), Beneficios (6 photo-cards), Vacantes (split + 4 filas), SG-SST (foto + card "100%"), B2B, Sectores, Testimonios, Políticas. Header/Footer intactos.
- **Pendiente menor**: imagen de Políticas (`152:54` es placeholder vacío en Figma → en código cae a degradado; el label "Operación responsable y certificada" lo hace ver intencional). Retratos reales de Testimonios (hoy iniciales, igual que Figma).

## 3. Pendientes conocidos

- [ ] Subir imágenes reales (`public/hero-asignar.jpg`, `foto-sst.jpg`, logos de clientes) con `upload_assets` y reemplazar placeholders.
- [ ] **REDISEÑO Home v2** (prioridad): v1 es traducción fiel del código = plana. Aplicar dirección de `DESIGN.md → Dirección de evolución` usando los skills de `.agents/skills/`.
- [ ] Íconos Material Symbols exactos (hotel, handshake, payments…) al set de Icons.
- [ ] Explorar librerías de comunidad: `get_libraries(fileKey)` lista UI kits añadibles (motion, hero patterns).
- [ ] Páginas restantes (Vacantes, Soluciones, Nosotros, Contacto…) — construir DESPUÉS de validar la dirección v2 en el Home.
- [ ] Code Connect al final (mapear Button/Badge/Card de Figma ↔ componentes React cuando existan como componentes reutilizables en código).

## 4. Protocolo entre sesiones/cuentas de Claude Code

Dos cuentas trabajan este proyecto (personal + empresa). Reglas para no pisarse:

1. **Git es la memoria compartida.** Todo cambio de contexto (este archivo, DESIGN.md, PRODUCT.md, figma-state.json) se commitea y pushea. Al iniciar sesión: `git pull` y leer este archivo antes de tocar Figma.
2. **Figma es estado vivo compartido.** Antes de crear, verifica existencia (claves `dsb`). Nunca dupliques colecciones/estilos/componentes. Nunca borres por nombre — solo por clave `dsb` + run_id propio.
3. **Cada sesión nueva usa un run_id nuevo** (`asignar-ds-YYYY-MM-DD[-n]`) para sus nodos, y registra aquí qué creó (IDs importantes) al terminar.
4. **Convención de ramas**: trabajo de diseño/frontend en ramas `claude/*`. Esta sesión: `claude/figma-setup-design-02m1ct`.
5. **Skills**: viven en `.agents/skills/` (versionados). Cualquier agente los tiene al clonar. Flujo de diseño: leer PRODUCT.md + DESIGN.md → skill pertinente (`impeccable` para dirección/critique, `design-taste-frontend` para landings, `figma-implement-design` para Figma→código, `web-design-guidelines` + `baseline-ui` para auditar, `emil-design-eng` + `review-animations` + `animation-vocabulary` para motion).
6. **División sugerida**: la cuenta que trabaje FIGMA actualiza este archivo; la que trabaje CÓDIGO actualiza DESIGN.md si cambia tokens. Si ambas van a tocar lo mismo, coordinar por commits pequeños y frecuentes.

## 5. Recetas rápidas (aprendidas, no repetir errores)

- `use_figma`: cargar skill `figma-use` antes; `return` siempre con IDs; una página por script (`setCurrentPageAsync` 1×); fuentes con `loadFontAsync` verificando estilo exacto; colores 0–1; tras `resize()` en auto-layout vertical, re-poner `primaryAxisSizingMode='AUTO'` o la altura queda fija (bug Card resuelto así).
- `combineAsVariants` apila en (0,0): posicionar en grilla después y `resizeWithoutConstraints`.
- Swatches/docs siempre ligados a variables (`setBoundVariableForPaint`), nunca hex.
- En este entorno el `curl` a assets de Figma falla por proxy → usar `enableBase64Response: true` en `get_screenshot`.
