# Figma Design System — Documento de Continuidad
## Asignar SAS — webpage-asignar

> **IMPORTANTE:** Este documento existe para dar continuidad al trabajo de diseño en Figma
> entre sesiones de Claude Code, incluso si se cambia de cuenta o se pierde el contexto.
> Léelo completo antes de hacer cualquier cambio en el archivo Figma.

**Última actualización:** 2026-07-03
**Autor del trabajo:** marketingdigital@asignar.com.co (Marketing Digital Lead, Asignar SAS)

---

## 1. DATOS DE CONEXIÓN

| Recurso | Valor |
|---------|-------|
| **Figma file URL** | https://www.figma.com/design/wSbfWleY46HpbOiL31go7O/Asignar-%E2%80%94-Design-System |
| **Figma fileKey** | `wSbfWleY46HpbOiL31go7O` |
| **Figma MCP prefix** | `mcp__9d6b41bf-9351-48e5-a2b0-2547e72c3fae__` (puede cambiar si se reconecta) |
| **Repo GitHub** | SDuarteCorredor/webpage-asignar |
| **Vercel URL** | asignar-taupe.vercel.app |
| **Git author email** | 135081248+SDuarteCorredor@users.noreply.github.com |
| **Stack** | Next.js 16 + App Router + Tailwind CSS v4 |

---

## 2. PALETA DE MARCA

```
Primary/Brand:   #3d64ff  (azul eléctrico — el color principal, NO navy)
Navy:            #0a1a3a  (fondos oscuros: hero overlay, stats, respaldo)
Gold:            #f5a623  (acentos secundarios)
Background:      #f0f4ff  (fondos claros sutiles)
Gray text:       #6b7280  (texto secundario)
Dark text:       #0a1a3a  (headings)
White:           #ffffff  (texto sobre fondos oscuros)
```

**Tipografía:** Inter (todas las variantes: Regular, Medium, Semi Bold, Bold)
**Logo blanco horizontal:** Recurso 7.svg

---

## 3. ESTRUCTURA DEL ARCHIVO FIGMA

### Páginas:
| Página | Contenido |
|--------|-----------|
| ✦ Icons | 11 componentes icon (24x24, stroke outline 2px) |
| 🏷️ Badge | Component set: Brand, Soft, Neutral, Gold |
| 🔘 Button | Component set (id: `10:179`): 36 variantes (Small/Medium/Large × Primary/Secondary/Ghost/Gradient × Default/Hover/Disabled). Estructura interna: `label` (TEXT) + `icon` (INSTANCE arrow-right) |
| 🃏 Card | Component set: Elevated, Bordered |
| 📄 Home | Página principal — frame Home (14:3, 1440×AUTO, VERTICAL auto-layout) |
| Home v2 | Página alternativa — NO TOCAR |

### Íconos disponibles (página ✦ Icons):
arrow-right, check, chevron-right, close, menu, mail, phone, star, briefcase, users, **award** (trofeo)

### Árbol del Home frame (14:3):
```
Home (14:3, 1440xAUTO, VERTICAL auto-layout)
├── Hero         (15:2,  1440×800,  NONE)        ✅ Completo
├── Vacantes     (17:22, 1440×562,  VERTICAL)     ✅ Completo
├── Stats        (17:218, 1440×180, NONE)         ✅ Completo
├── ClientLogos  (17:232, 1440×300, NONE)         🔧 Parcial
├── Beneficios   (17:255, 1440×820, NONE)         🔧 Parcial (faltan imágenes)
├── DOCA         (18:69,  1440×536, VERTICAL)     ✅ Pulido
├── Proceso      (19:77,  1440×502, VERTICAL)     ✅ Pulido
├── SGSST        (20:89,  1440×620, VERTICAL)     ✅ OK
├── B2B          (21:98,  1440×590, VERTICAL)     ✅ OK
├── Sectores     (22:107, 1440×674, VERTICAL)     ❌ Pendiente
├── Confianza    (23:119, 1440×934, VERTICAL)     ❌ Pendiente
├── Testimonios  (24:124, 1440×598, VERTICAL)     ✅ Pulido
└── Respaldo     (24:189, 1440×448, VERTICAL)     ✅ Rediseñado
```

---

## 4. DETALLE POR SECCIÓN

### Hero (15:2) — ✅ COMPLETO
- **Layout:** `layoutMode: NONE` (fue VERTICAL, se desactivó para posicionar libremente)
- **Fondo:** Frame `hero-bg-image` con imagen corporativa azulada (ya subida por el usuario)
- **Overlay:** Frame `hero-overlay` — gradiente L→R (oscuro izquierda 85% → claro derecha 20%)
- **Contenido:**
  - Badge: "+20 AÑOS CONECTANDO TALENTO" (pill con borde, dot verde)
  - Heading: "Creemos en ti / y en tu **talento**" (talento en #3d64ff)
  - Descripción en gris claro
  - 2 CTAs: "Ver Vacantes →" (brand blue lleno) + "Soluciones Empresariales" (ghost border blanco)
- **Cards flotantes (glass):**
  - `card-award` (x:780, y:530) — ícono trofeo + "Premio a la Excelencia"
  - `card-stat` (x:1180, y:50) — "+5 mil colaboradores en misión" (azul)
  - `card-empresas` (x:1100, y:480) — "+500 empresas cliente" (dorado)
- **Trust bar:** Frame bottom (y:748), blur background, 4 items blancos
- **Dirección de diseño:** El usuario quiere impacto visual como los referentes Horizon Courts, SkyWings, TENISTA — imagen full-bleed, NO imagen en bloque al lado

### Vacantes (17:22) — ✅ COMPLETO
- Layout lista vertical (no grid de cards)
- 4 vacantes con icono + nombre + ciudad/sector + botón "Aplicar"
- **Botones "Aplicar":** Instancias de `Button > Size=Medium, Style=Gradient, State=Default`
- **"Ver todas las vacantes":** Instancia de `Button > Size=Small, Style=Ghost, State=Default`
- Badge "OPORTUNIDADES ACTIVAS" arriba izquierda

### Stats (17:218) — ✅ COMPLETO
- **Fondo:** Navy gradient (#0a1a3a)
- **Números:** 20+, 7+, 500+, 1.000+ — blancos, Inter Bold 48px, centrados
- **Labels:** Gris claro (#bfcce0), Inter Regular 16px
- **Separadores:** Líneas verticales blancas 12% opacidad
- **Nota dev:** "⚡ Efecto: Counter animation (números suben de 0 al valor)"
- **REGLA:** Sobre fondo navy, SIEMPRE textos e íconos blancos

### ClientLogos (17:232) — 🔧 PARCIAL
- Título: "EMPRESAS QUE CONFÍAN EN NOSOTROS"
- Frame `logos-marquee` con auto-layout horizontal
- **14 contenedores** nombrados `logo-01` a `logo-14`, cada uno 300×150px
- Esquinas redondeadas 12px, fondo blanco, borde sutil, sombra leve
- Contienen placeholder numérico (01, 02, etc.)
- **PENDIENTE:** Subir PNGs reales de logos de clientes
- **Nota dev:** Marquee infinito horizontal (CSS animation en código)

### Beneficios (17:255) — 🔧 PARCIAL (faltan imágenes)
- Header: "PARA CANDIDATOS" badge + "Lo que recibes en Asignar" heading
- **Grid 3×2** de image cards (380×280px cada una, cornerRadius 20)
- Cada card tiene:
  - `image` — placeholder con gradiente azul (reemplazar con imagen GPT)
  - `gradient-overlay` — degradado bottom para texto
  - Título blanco Bold 20px
  - Descripción gris claro 13px
  - `action-btn` — botón circular 44px (#3d64ff) con flecha blanca →
- **Cards:** benefit-card-1 a benefit-card-6
- **Estilo referente:** Sección "Our Solar Solutions" de Green Power
- **PENDIENTE:** Generar 6 imágenes con GPT

### Secciones ya pulidas (sin cambios pendientes):
- **DOCA:** 4 cards con sombras
- **Proceso:** Fondo degradado azul sutil, timeline 7 pasos
- **SGSST:** Panel azul gradient con "Visión Zero ATEL"
- **B2B:** Fondo azul gradient completo, stats por sector
- **Testimonios:** 3 cards, centro azul con sombra, laterales con bordes
- **Respaldo:** Fondo navy gradient, textos blancos, 4 cards blancas

### Secciones pendientes:
- **Sectores (22:107):** No revisado aún
- **Confianza (23:119):** Tiene placeholders "Logo" — necesita logos reales de clientes por sector

---

## 5. LECCIONES APRENDIDAS (BUGS Y FIXES)

Estas notas evitan repetir errores:

1. **Auto-layout bloquea posicionamiento libre:** Si una sección tiene `layoutMode: "VERTICAL"` o `"HORIZONTAL"`, no puedes setear `child.x` / `child.y` directamente — los valores se ignoran silenciosamente. **Fix:** Cambiar `frame.layoutMode = 'NONE'` antes de posicionar hijos.

2. **Coordenadas son relativas al padre:** Los hijos se posicionan relativo al frame padre, no al canvas. Si un Hero está en y=800 del Home, un hijo en y=100 está a 100px del top del Hero, no del Home.

3. **`clipsContent = true`:** El Hero (y otros frames) recorta contenido fuera de sus límites. Si un elemento está fuera del rango visible, simplemente no se ve.

4. **TEXT nodes no se pueden resize():** Usar `textAutoResize` en lugar de `resize()` para nodos de texto.

5. **Fonts deben cargarse:** Siempre llamar `await figma.loadFontAsync({ family: "Inter", style: "Bold" })` antes de modificar caracteres de un texto.

6. **El Home frame es VERTICAL auto-layout:** Las secciones se apilan automáticamente. No mover secciones con x/y — el orden en `children` determina la posición vertical.

7. **Para reemplazar un botón con componente:**
   ```js
   const btnInstance = componentVariant.createInstance();
   const label = btnInstance.findOne(n => n.name === 'label');
   await figma.loadFontAsync(label.fontName);
   label.characters = 'Nuevo texto';
   parent.insertChild(index, btnInstance);
   oldElement.remove();
   ```

---

## 6. PROMPTS GPT PARA IMÁGENES

### Prompt hero (YA USADO — imagen subida):
```
Cinematic wide-angle photograph of a modern office space with blue color grading. Professionals working in a bright contemporary workspace. Deep navy blue shadows, cool blue highlights. Left side darker, right side brighter. 16:9 landscape, photorealistic, editorial corporate photography style. No text.
```

### 6 Prompts para Beneficios cards (PENDIENTES):
```
1. Pagos quincenales: "Professional photo of Colombian worker receiving payment, blue color grade, modern office setting, 16:9, no text"
2. Seguridad social: "Healthcare concept, stethoscope and documents, blue cinematic color grade, 16:9, no text"
3. Prestaciones de ley: "Colombian professional on vacation, tropical setting, blue toned, 16:9, no text"
4. Capacitaciones: "Training session in modern classroom, diverse professionals, blue color grade, 16:9, no text"
5. Acompañamiento: "HR professional mentoring a worker, supportive interaction, blue toned, 16:9, no text"
6. Flexibilidad: "Modern flexible workspace, work-life balance concept, blue color grade, 16:9, no text"
```

---

## 7. PREFERENCIAS DEL USUARIO

- **Idioma:** Español (Colombia). Comunicar siempre en español.
- **Nivel técnico:** Intermedio — sabe de marketing digital, Figma básico, entiende código pero no es dev
- **Estilo visual que le gusta:** Bloques con bordes redondeados, moderno, premium, imágenes con fondos azules (NO PNGs transparentes de stock), glass effects
- **Referentes aprobados:** Horizon Courts, Green Power, SkyWings, TENISTA
- **NO quiere:** Imágenes que se vean "super IA falso", diseño plano sin profundidad, stock genérico
- **Flujo de trabajo:** Diseña en Figma → trae referentes → Claude replica en código
- **Sobre fondos navy:** SIEMPRE textos e íconos en blanco
- **Botones:** Usar los componentes del Design System, no crear frames manuales
