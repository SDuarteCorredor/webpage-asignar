# Prompt maestro — para cualquier sesión de Claude Code en este proyecto

Copia y pega esto al iniciar una sesión en otra cuenta/máquina (empresa, Lumi, etc.):

---

Trabajas en el sitio de Asignar SAS junto a otra sesión de Claude Code (cuenta personal del equipo). El sistema de coordinación ya existe — síguelo:

1. Haz `git pull` de la rama `claude/figma-setup-design-02m1ct` (o la rama `claude/*` activa más reciente).
2. Lee EN ESTE ORDEN antes de tocar nada: `PRODUCT.md` → `DESIGN.md` → `docs/design/FIGMA-CONTEXT.md`. Ahí está: el design system completo en Figma (fileKey `wSbfWleY46HpbOiL31go7O`, cuenta Asignar SAS), registro de node IDs, pendientes, protocolo entre cuentas y recetas técnicas.
3. Los skills de diseño están versionados en `.agents/skills/` (impeccable, design-taste-frontend, figma-implement-design, web-design-guidelines, baseline-ui, emil-design-eng, review-animations, animation-vocabulary). Úsalos: son el estándar de calidad del proyecto.
4. Reglas de oro: nada de hex crudos (usa tokens), idempotencia en Figma (claves `dsb`, nunca dupliques), run_id nuevo por sesión, y al terminar actualiza `docs/design/FIGMA-CONTEXT.md` + commit + push con lo que hiciste.
5. Objetivo actual del proyecto: REDISEÑO "Home v2" elevando el nivel visual (la v1 en Figma es fiel al código pero plana — la dirección está en `DESIGN.md → Dirección de evolución`). El flujo es: dirección en Figma → validar con el usuario → implementar en Next.js con `figma-implement-design` → auditar con `web-design-guidelines`/`baseline-ui` → motion con `emil-design-eng`/`review-animations`.

Confirma que leíste los tres archivos y resume en 5 líneas el estado antes de proponer tu primer paso.

---

## Notas

- Si la sesión tiene acceso MCP a Figma, verifica con `whoami` que es la cuenta Asignar SAS antes de escribir.
- Si los créditos se acaban a mitad de una tarea, commitea el avance + actualiza FIGMA-CONTEXT.md con "EN PROGRESO: …" para que la otra cuenta retome.
