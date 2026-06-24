const testimonios = [
  {
    cita: "La eficiencia de Asignar en proveernos personal calificado ha sido fundamental para mantener la calidad de nuestro servicio.",
    nombre: "Carlos Martínez",
    cargo: "Director de RRHH",
    empresa: "Hotel 5 Estrellas, Medellín",
    iniciales: "CM",
    destacado: false,
  },
  {
    cita: "Encontré trabajo rápido gracias a Asignar. El acompañamiento fue humano, transparente y muy profesional. Me sentí respaldada en cada paso.",
    nombre: "Laura Restrepo",
    cargo: "Mesera de Servicio",
    empresa: "Restaurante Premium, Bogotá",
    iniciales: "LR",
    destacado: true,
  },
  {
    cita: "Delegar la gestión de personal temporal a Asignar nos permitió enfocarnos en nuestra operación con total tranquilidad.",
    nombre: "Andrés Gómez",
    cargo: "Gerente de Operaciones",
    empresa: "Cadena Hotelera, Cartagena",
    iniciales: "AG",
    destacado: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Testimonios
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Lo que dicen de nosotros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={t.nombre}
              className={`scroll-reveal p-7 rounded-2xl flex flex-col justify-between relative overflow-hidden ${
                t.destacado
                  ? "bg-brand-gradient text-white shadow-lg"
                  : "bg-white card-elevated"
              }`}
              data-delay={String(i * 100)}
            >
              {t.destacado && (
                <span
                  className="material-symbols-outlined absolute top-4 right-4 text-6xl text-white/[0.06]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  format_quote
                </span>
              )}

              <div className="relative z-10">
                <div className="flex text-brand-gold mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p
                  className={`font-[var(--font-body)] text-sm leading-relaxed mb-6 ${
                    t.destacado ? "text-white/90" : "text-text-secondary"
                  }`}
                >
                  &ldquo;{t.cita}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-display)] text-sm font-bold ${
                    t.destacado
                      ? "bg-white/15 text-white"
                      : "bg-brand-blue/[0.08] text-brand-blue"
                  }`}
                >
                  {t.iniciales}
                </div>
                <div>
                  <p
                    className={`font-[var(--font-ui)] text-sm font-bold ${
                      t.destacado ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {t.nombre}
                  </p>
                  <p
                    className={`font-[var(--font-ui)] text-xs ${
                      t.destacado ? "text-white/50" : "text-text-muted"
                    }`}
                  >
                    {t.cargo}, {t.empresa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
