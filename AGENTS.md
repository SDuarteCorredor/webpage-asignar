<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Diseño — contexto obligatorio

Antes de cualquier trabajo de UI/diseño/Figma, lee en orden: `PRODUCT.md` → `DESIGN.md` → `docs/design/FIGMA-CONTEXT.md` (estado del design system en Figma, node IDs, protocolo entre las dos cuentas de Claude Code y pendientes). Los skills de diseño del proyecto están versionados en `.agents/skills/` — úsalos. Nada de colores/espaciados hardcodeados: siempre tokens de `DESIGN.md`/`globals.css`. Al terminar una sesión de diseño, actualiza `docs/design/FIGMA-CONTEXT.md` y commitea.
