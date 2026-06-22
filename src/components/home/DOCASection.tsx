const pilares = [
  {
    letra: "D",
    titulo: "Disposición",
    descripcion:
      "Servicio ágil y proactivo. Respondemos con rapidez a las necesidades de tu operación, siempre listos para actuar.",
    icon: "bolt",
    color: "bg-brand-blue",
  },
  {
    letra: "O",
    titulo: "Oportunidad",
    descripcion:
      "Creamos puentes entre el talento y las empresas. Cada persona merece la oportunidad de crecer profesionalmente.",
    icon: "trending_up",
    color: "bg-brand-light-blue",
  },
  {
    letra: "C",
    titulo: "Calidad",
    descripcion:
      "Procesos rigurosos de selección y acompañamiento. Garantizamos perfiles que cumplen con los más altos estándares.",
    icon: "verified",
    color: "bg-brand-deep-blue",
  },
  {
    letra: "A",
    titulo: "Acompañamiento",
    descripcion:
      "Estamos contigo en cada paso. Desde la selección hasta la gestión continua, nunca te dejamos solo.",
    icon: "handshake",
    color: "bg-brand-navy",
  },
];

export default function DOCASection() {
  return (
    <section className="py-16 md:py-20 bg-surface-gray">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block">
            Nuestra propuesta de valor
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
            El método DOCA
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mx-auto">
            Cuatro pilares que definen nuestra manera de trabajar y nos
            diferencian en el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pilares.map((pilar) => (
            <div
              key={pilar.letra}
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Big background letter */}
              <span className="absolute -top-4 -right-2 font-[var(--font-display)] text-[120px] font-extrabold text-brand-blue/[0.04] leading-none select-none pointer-events-none">
                {pilar.letra}
              </span>

              <div
                className={`w-12 h-12 rounded-xl ${pilar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
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
