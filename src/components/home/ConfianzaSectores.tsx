const grupos = [
  {
    sector: "Sector Hotelero",
    icon: "hotel",
    clientes: [
      "NH Hotels",
      "Marriott",
      "Estelar",
      "Hilton",
      "Sheraton",
      "Movich",
      "Four Seasons",
      "W Hotels",
    ],
  },
  {
    sector: "Sector Inmobiliario",
    icon: "apartment",
    clientes: ["UALo", "Hashtag 98 Hotel", "GO Living Suites"],
  },
  {
    sector: "Industria y Restaurantes",
    icon: "restaurant",
    clientes: [
      "Medicox",
      "SuperPack",
      "Fruta Fresca",
      "RCD Project",
      "Casal",
      "La Kasta",
      "Mangiare",
    ],
  },
];

export default function ConfianzaSectores() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Confían en nosotros
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Aliados en los sectores más exigentes
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto mt-3">
            Las mejores experiencias del país respaldan nuestro servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {grupos.map((g, i) => (
            <div
              key={g.sector}
              className="scroll-reveal bg-white rounded-2xl p-7 card-elevated"
              data-delay={String(i * 100)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-brand-blue text-2xl"
                    style={{ fontVariationSettings: '"FILL" 0' }}
                  >
                    {g.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-brand-navy">
                  {g.sector}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {g.clientes.map((c) => (
                  <span
                    key={c}
                    className="font-[var(--font-ui)] text-sm font-medium text-text-secondary bg-surface px-3.5 py-2 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
