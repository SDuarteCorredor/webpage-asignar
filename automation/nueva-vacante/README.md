# Nueva vacante → Sheet

Formulario para que vinculación publique una vacante sin entrar al Sheet.

```
Reclutador  →  formulario de n8n  →  fila nueva al final de `Vacantes`  →  portal
```

## Por qué existe

El `id` de la columna O es lo que viaja en la URL de la vacante, en su QR y en cada postulación. Tiene que ser **único y no repetirse nunca**, incluso después de cerrar vacantes.

El formulario lo genera solo: lee los ids publicados y suma uno al mayor. Escribirlo a mano invita a repetirlo, y dos vacantes con el mismo id mandarían postulaciones al reclutador equivocado.

## Puesta en marcha

1. En n8n: *Workflows → Import from File* → `nueva-vacante.n8n.json`
2. Verificar que el nodo **➕ Agregar a Vacantes** tomó la credencial de Google Sheets
3. Activar el workflow
4. Copiar la **Production URL** del nodo del formulario y compartirla con vinculación

La URL queda del estilo `https://<tu-n8n>/form/nueva-vacante`. No pide contraseña: quien la tenga puede publicar una vacante. Si eso importa, n8n permite ponerle autenticación básica al nodo del formulario.

## Qué se deduce solo

El reclutador **no escribe** departamento ni correo de selección: salen de la ciudad. Así no pueden quedar inconsistentes con el resto de la hoja, que es de donde el portal arma sus filtros.

| Ciudad | Departamento | Equipo de selección |
|---|---|---|
| Medellín | Antioquia | `seleccion4@` |
| Bogotá | Cundinamarca | `reclutamientobog4@` |
| Cali | Valle del Cauca | `seleccioncali@` |
| Cartagena | Bolívar | `seleccioncartagena407@gmail.com` |
| Barranquilla | Atlántico | `seleccionbarranquilla@` |
| Rionegro | Antioquia | `seleccion4@` |

Para una ciudad que no esté en la lista, el formulario tiene tres campos opcionales al final (ciudad, departamento y correo). Si no se pone correo, la vacante queda enrutada a `contratacion2@` — nunca vacía, porque una celda vacía rompería la postulación.

**Al abrir una ciudad de forma permanente**, conviene agregarla al desplegable y al mapa `EQUIPOS` del nodo 🧮 Armar fila, en vez de escribirla a mano cada vez.

## Otras decisiones

- **`activa` nace en `SI`.** Toda vacante creada por el formulario se publica de una.
- **El salario se formatea en el flujo** (`1550000` → `$1.550.000`). El portal muestra la celda tal como esté escrita, así que dejarlo al criterio de cada quien produciría unas con puntos y otras sin ellos.
- **`salario_detalle` es un desplegable** con las dos variantes que se usan (con y sin propinas), no texto libre.
- **El nodo de Sheets escribe en modo `RAW`.** Sin eso, Google Sheets evalúa como fórmula toda celda que empiece por `+`, `=`, `-` o `@` — y `+ Auxilio de transporte · + Prestaciones de ley` empieza por `+`, así que la celda quedaba en `#ERROR!`.
- Los desplegables de sector, contrato, experiencia, jornada y modalidad existen para que los filtros del portal no se llenen de variantes: «Medellin» y «Medellín» serían dos ciudades distintas en el filtro.

## Cerrar una vacante

**No se borra la fila** — eso correría los ids de todas las de abajo. Se pone `activa` en `NO` y deja de aparecer en el portal en la siguiente revalidación (5 minutos).

Es la única operación que sigue siendo manual sobre la hoja, y es segura porque edita una celda sin mover filas.
