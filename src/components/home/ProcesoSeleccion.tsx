const pasos = [
  { n: 1, label: "Reclutamiento de hojas de vida", icon: "description" },
  { n: 2, label: "Consulta de antecedentes", icon: "plagiarism" },
  { n: 3, label: "Pruebas psicotécnicas", icon: "quiz" },
  { n: 4, label: "Entrevista grupal o individual", icon: "forum" },
  { n: 5, label: "Informe de selección final", icon: "assignment_turned_in" },
  { n: 6, label: "Envío de candidatos", icon: "how_to_reg" },
  { n: 7, label: "Vinculación", icon: "handshake" },
];

export default function ProcesoSeleccion() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Cómo trabajamos
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Proceso de selección
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mx-auto mt-3">
            Transparencia y rigor en cada etapa para garantizar el mejor talento
            para tu operación.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[26px] left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 relative">
            {pasos.map((paso, i) => (
              <div
                key={paso.n}
                className="scroll-reveal flex flex-col items-center text-center group"
                data-delay={String(i * 80)}
              >
                <div
                  className="w-13 h-13 min-w-[3.25rem] min-h-[3.25rem] rounded-full bg-brand-blue text-white flex items-center justify-center font-[var(--font-display)] font-bold text-lg mb-4 shadow-[0_4px_14px_0_rgba(0,122,254,0.3)] group-hover:scale-110 transition-transform"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                >
                  {paso.n}
                </div>
                <div className="w-16 h-16 bg-white rounded-2xl card-elevated flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-brand-blue text-3xl">
                    {paso.icon}
                  </span>
                </div>
                <p className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy leading-snug">
                  {paso.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
