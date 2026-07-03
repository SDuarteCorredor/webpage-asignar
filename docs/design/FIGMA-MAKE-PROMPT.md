# Prompt maestro — Figma Make (Home v2 de Asignar)

> Modelo recomendado en Make: **Claude Opus** (craft alto).
> Adjunta en Make: (1) este repo `sduartecorredor/asignar`, (2) el archivo Figma "Asignar — Design System" (fileKey `wSbfWleY46HpbOiL31go7O`) o las frames de la página `🎯 Dirección v2`, (3) las 4 imágenes de referencia (NNext, Problem/Solution, Glass/3D, Aeline).
> Trabaja SIEMPRE en una rama nueva (ej. `make/home-v2`), NUNCA sobre `main`.

---

Eres un diseñador-ingeniero de frontend de élite. Vas a rediseñar el **Home** del sitio de **Asignar SAS** llevándolo a nivel Awwwards, manteniendo la marca y la coherencia con el código existente.

## 1. Primero, lee el contexto (no inventes)
Este proyecto está conectado a GitHub. Antes de generar nada, lee del repo `sduartecorredor/asignar`:
- `PRODUCT.md` — quién es Asignar, doble audiencia (candidatos + empresas), personalidad, anti-referencias.
- `DESIGN.md` — tokens exactos (colores, tipografías, radios, motion). ÚSALOS, no inventes colores.
- `docs/design/FIGMA-CONTEXT.md` — design system en Figma y estado.
Respeta el stack: **Next.js 16 (App Router) + React 19 + Tailwind v4**. Animación con **Motion** (`motion/react`) y GSAP solo para scroll pin/scrub.

## 2. Dirección visual (obligatoria)
**Referencia madre: el layout tipo "NNext"** (fondo blanco, tipografía editorial gigante, nav fino, un asset con profundidad, listas con números, suizo/editorial). Complementos: Aeline (fotos reales flotando + bento variado), Problem/Solution (tarjetas conectadas con líneas finas + asset esférico), Glass/3D (bento con vidrio esmerilado).

- **Fondo claro dominante** (blanco / `#F6F8FB`). NADA de héroe navy plano. Navy solo para 1 sección de cierre o footer.
- **Tipografía editorial ENORME**: titulares display 72–120px, peso ExtraBold, tracking negativo, `leading` ajustado. Énfasis con **itálica/bold de la misma familia** (jamás un serif random).
- **Un solo acento**: azul `#007AFE`. El dorado `#FFC000` casi no se usa (máximo un detalle). Prohibido gradiente azul en todo.
- **Profundidad real, no cajas planas**: frosted glass (`backdrop-blur` + borde `white/10` + inner highlight), sombras tintadas al fondo (no negro puro), fotografía real de personas/operaciones con recorte editorial (esquinas grandes), y opcionalmente un asset 3D abstracto sutil (si hay asset; si no, glass + foto).
- **Ritmo (anti-slop, crítico)**: máximo 2 secciones seguidas con el mismo patrón de layout; alterna split asimétrico, full-bleed, bento con celdas de tamaños distintos, banda editorial. **NADA de "6 cards idénticas" repetidas.**
- **Eyebrow**: máximo 1 cada 3 secciones (NO uppercase-tracking sobre cada sección). Usa la jerarquía tipográfica para abrir secciones.
- **Bento con background diverso**: al menos 2-3 celdas con foto/gradiente-de-marca/tinte, no todo blanco-sobre-blanco.

## 3. Tokens (de DESIGN.md — respétalos)
- Marca: azul `#007AFE`, light-blue `#05B8FD`, deep-blue `#0056B3`, navy `#001233`, gold `#FFC000` (mínimo).
- Superficie: page `#F6F8FB`, elevated `#FFFFFF`, muted `#EDF1F6`, border `#E2E8F0`.
- Texto: primary `#0F1419`, secondary `#3D4551`, muted `#6B7280`.
- Fuentes: **Plus Jakarta Sans** (display/titulares), **DM Sans** (cuerpo), **Inter** (UI/labels/botones).
- Radios: 8/12/16/32 y full (pills). Botones = pill. Un solo sistema de radios.

## 4. Secciones del Home (contenido real de Asignar)
1. **Hero** — titular editorial gigante ("Creemos en ti y en tu talento" o similar), sub ≤20 palabras, 2 CTAs (Ver vacantes / Soy empresa), foto real de persona en operación con tratamiento, nav fino con "Postúlate". Doble audiencia clara.
2. **Vacantes en vivo** — lista/bento de vacantes reales (Mesero, Aux. cocina, Recepcionista…) con ciudad y sector, CTA "Aplicar".
3. **Stats** — 20+ años · 7+ sedes · 500+ empresas · 1.000+ trabajadores (números grandes, contador animado).
4. **Método DOCA** — Disposición/Oportunidad/Calidad/Acompañamiento (NO 4 cards iguales: usa números/letras grandes, layout variado).
5. **Beneficios para candidatos** — pagos quincenales, seguridad social, prestaciones, capacitaciones… en bento con ritmo.
6. **Proceso de selección** — 7 pasos, timeline horizontal con línea conectora y animación de reveal.
7. **SG-SST** — Seguridad y Salud (Visión Zero ATEL, ARL SURA), sección con foto + datos.
8. **Para empresas (B2B)** — propuesta, checklist de valor, CTA "Solicitar propuesta". (Aquí sí puede ir un bloque de color/navy como contraste único.)
9. **Sectores** — Hotelería, Restaurantes, Industria, Logística, Servicios, Inmobiliario (con foto por sector).
10. **Clientes / confianza** — logos reales (marquee) + testimonios (1 destacado grande + 2 pequeños, cita ≤3 líneas).
11. **Respaldo legal** — Licencia MinTrabajo, Ley 50/1990, ARL SURA, SGC.
12. **Cierre** — CTA final + footer.

## 5. Motion (motivado, no decorativo)
Entrada escalonada en scroll (`whileInView`), contadores en stats, hover que eleva cards, reveal del timeline de proceso, parallax sutil en fotos del hero. Respeta `prefers-reduced-motion`. Nada de marquees duplicados (máximo 1).

## 6. Reglas duras (no romper)
- Accesibilidad AA: contraste, foco visible, targets táctiles, alt en imágenes.
- Botones: texto en 1 línea, contraste correcto, 1 label por intención.
- Hero cabe en viewport (`min-h-[100dvh]`, no `h-screen`), máx 4 elementos de texto.
- Fotos reales (banco open-license o placeholders `picsum`/unsplash con seed descriptivo); nada de "fake screenshots" con divs.
- Copy en español de Colombia, humano, sin relleno cursi.

## 7. Entregable
Home v2 completo, responsive (mobile-first), en una rama `make/home-v2`, listo para PR. Componentiza lo repetido. No toques `main`. Deja las fotos como slots claros si no consigues las reales.

---

### Después de Make
La otra sesión de Claude Code (integrador) tomará esta rama, la dejará production-clean en el proyecto Next.js real (tokens de `globals.css`, estructura `src/`, consistencia, a11y) y abrirá el PR final. Ver `docs/design/PROMPT-MAESTRO.md`.
