const beneficios = [
  {
    titulo: "Pagos quincenales",
    sub: "Puntuales y seguros",
    icon: "payments",
  },
  {
    titulo: "Seguridad social completa",
    sub: "EPS, Pensión, ARL y Caja",
    icon: "health_and_safety",
  },
  {
    titulo: "Prestaciones de ley",
    sub: "Prima, cesantías y vacaciones",
    icon: "balance",
  },
  {
    titulo: "Capacitaciones",
    sub: "Gratuitas para tu perfil",
    icon: "school",
  },
  {
    titulo: "Acompañamiento",
    sub: "De nuestro equipo experto",
    icon: "support_agent",
  },
  {
    titulo: "Flexibilidad",
    sub: "Opciones de horarios",
    icon: "schedule",
  },
];

export default function BeneficiosSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Para candidatos
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Lo que recibes en Asignar
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto mt-3">
            Beneficios diseñados para tu bienestar y crecimiento profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beneficios.map((b, i) => (
            <div
              key={b.titulo}
              className="scroll-reveal group bg-white rounded-2xl p-6 card-elevated flex items-start gap-4 hover:-translate-y-0.5"
              data-delay={String(i * 80)}
            >
              <div
                className="w-12 h-12 rounded-2xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                <span
                  className="material-symbols-outlined text-brand-blue text-2xl group-hover:text-white transition-colors"
                  style={{
                    fontVariationSettings: '"FILL" 1',
                    transitionDuration: "var(--duration-base)",
                  }}
                >
                  {b.icon}
                </span>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                  {b.titulo}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-text-secondary">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
