# Prompts de imagen — Asignar (GPT / DALL·E / GPT-4o images)

Reglas: exportar landscape para héroe y bloques anchos; guardar en `public/` con los nombres indicados; ~1600px de ancho, JPG < 300 KB. Todas comparten el **STYLE SUFFIX** para que se vean como una sola familia visual (azul de marca, premium, sin texto).

## STYLE SUFFIX (pégalo al final de CADA prompt)
```
— premium editorial commercial photography, cinematic soft directional lighting, shallow depth of field, cohesive cool-blue color grade (electric blue #007AFE with deep navy #001233 shadows and light-blue #05B8FD highlights), clean blue-toned background, modern aspirational corporate mood, photorealistic, ultra-detailed, natural skin tones, no text, no logos, no watermarks, no borders.
```

---

## 1) HERO — `public/hero.jpg`  (3:2 · 1536×1024)
```
A confident Colombian hospitality professional in her late twenties wearing a crisp modern uniform, standing in a bright upscale hotel lobby, looking toward camera with calm, capable assurance; a colleague softly out of focus in the background. Wide landscape composition with generous negative space on the right third. [STYLE SUFFIX]
```
Alternativa (equipo/energía):
```
A dynamic team of four Colombian service professionals (hotel, restaurant, logistics, industry) standing together in a modern blue-lit environment, mid-shot, purposeful and united, slight motion energy. Balanced composition, negative space top. [STYLE SUFFIX]
```

## 2) SECTORES (cuadradas 1:1 · 1024×1024) — `public/sectores/`
- `hoteleria.jpg`
```
A uniformed hotel staff member setting up an elegant room or greeting at reception, refined and warm, blue-graded interior. [STYLE SUFFIX]
```
- `restaurantes.jpg`
```
A focused chef plating a refined dish in a professional kitchen, steam and precision, blue-cool tones. [STYLE SUFFIX]
```
- `logistica.jpg`
```
A logistics operator holding a tablet beside neat, blue-lit warehouse shelving, organized and efficient. [STYLE SUFFIX]
```
- `industria.jpg`
```
An industrial technician in a clean modern plant, wearing safety gear, confident and competent, blue ambient light. [STYLE SUFFIX]
```

## 3) B2B / EMPRESAS — `public/b2b.jpg` (3:2 · 1536×1024)
```
Two business professionals shaking hands / reviewing a plan on a tablet in a bright modern office with a subtle Colombian city view, partnership and trust, blue-graded. Negative space left. [STYLE SUFFIX]
```

## 4) SG-SST / bienestar — `public/sst.jpg` (4:3 · 1024×768)
```
A safety supervisor in helmet and vest guiding a worker in a bright facility, care and prevention, blue tones. [STYLE SUFFIX]
```

## 5) CANDIDATOS / beneficios — `public/candidato.jpg` (4:3)
```
A young Colombian worker in uniform smiling subtly with quiet pride during a work break, authentic (not stocky), blue-graded environment. [STYLE SUFFIX]
```

---

### Cómo usarlas
1. Genera en GPT, descarga.
2. Renómbralas y colócalas en `public/` según arriba (crea `public/sectores/`).
3. Avísame y las conecto a los bloques (héroe + secciones). Ya dejé el slot del héroe leyendo `public/hero.jpg`.

> Tip: si una sale poco azul, la armonizo igual con un overlay de marca en el código (ya aplicado en el héroe), así siempre se ve cohesionada.
