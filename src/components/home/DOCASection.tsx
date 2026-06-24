const pilares = [
  {
    letra: "D",
    titulo: "Disposición",
    descripcion:
      "Servicio ágil y proactivo. Respondemos con rapidez a las necesidades de tu operación.",
    icon: "bolt",
    color: "bg-brand-blue",
  },
  {
    letra: "O",
    titulo: "Oportunidad",
    descripcion:
      "Creamos puentes entre el talento y las empresas. Cada persona merece crecer.",
    icon: "trending_up",
    color: "bg-brand-light-blue",
  },
  {
    letra: "C",
    titulo: "Calidad",
    descripcion:
      "Procesos rigurosos de selección. Perfiles que cumplen los más altos estándares.",
    icon: "verified",
    color: "bg-brand-deep-blue",
  },
  {
    letra: "A",
    titulo: "Acompañamiento",
    descripcion:
      "Contigo en cada paso. Desde la selección hasta la gestión continua.",
    icon: "handshake",
    color: "bg-brand-gradient",
  },
];

export default function DOCASection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Propuesta de valor
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            El método DOCA
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto mt-3">
            Cuatro pilares que definen nuestra manera de trabajar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.letra}
              className="scroll-reveal group bg-white rounded-2xl p-6 card-elevated relative overflow-hidden"
              data-delay={String(i * 100)}
            >
              <span
                className="absolute -top-6 -right-3 font-[var(--font-display)] text-[140px] font-extrabold text-brand-blue/[0.04] leading-none select-none pointer-events-none group-hover:text-brand-blue/[0.08] transition-colors"
                style={{ transitionDuration: "var(--duration-slow)" }}
              >
                {pilar.letra}
              </span>

              <div
                className={`w-12 h-12 rounded-2xl ${pilar.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                style={{
                  transitionDuration: "var(--duration-base)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                <span
                  className="material-symbols-outlined text-white text-xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {pilar.icon}
                </span>
              </div>

              <h3 className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-2 relative z-10">
                {pilar.titulo}
              </h3>
              <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed relative z-10">
                {pilar.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
