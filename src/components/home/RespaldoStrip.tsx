const credenciales = [
  {
    titulo: "Licencia MinTrabajo",
    sub: "Empresa de Servicios Temporales autorizada",
    icon: "verified_user",
  },
  {
    titulo: "Ley 50 de 1990",
    sub: "Cumplimiento de la normativa laboral vigente",
    icon: "gavel",
  },
  {
    titulo: "ARL SURA",
    sub: "Cobertura para todo el personal misional",
    icon: "shield",
  },
  {
    titulo: "SGC Integrado",
    sub: "Sistema de Gestión de Calidad certificado",
    icon: "workspace_premium",
  },
];

export default function RespaldoStrip() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-10 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Respaldo y cumplimiento
          </span>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-brand-navy tracking-[-0.02em]">
            Operamos con todas las garantías de ley
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {credenciales.map((c, i) => (
            <div
              key={c.titulo}
              className="scroll-reveal bg-white rounded-2xl p-6 card-elevated text-center"
              data-delay={String(i * 80)}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/[0.08] flex items-center justify-center mx-auto mb-4">
                <span
                  className="material-symbols-outlined text-brand-blue text-2xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {c.icon}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                {c.titulo}
              </h3>
              <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                {c.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
