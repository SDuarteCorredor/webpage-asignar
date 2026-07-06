const features = [
  {
    titulo: "Inspección de Seguridad",
    desc: "Identificación y control de riesgos en el lugar de trabajo.",
    icon: "health_and_safety",
  },
  {
    titulo: "Programas de Capacitación",
    desc: "Formación continua en prevención de riesgos laborales.",
    icon: "school",
  },
  {
    titulo: "Programas de Prevención",
    desc: "Plan de acción para eliminar accidentes y enfermedades laborales.",
    icon: "security",
  },
  {
    titulo: "Visión Zero ATEL",
    desc: "Metodología de cero accidentes: diagnóstico, intervención y seguimiento.",
    icon: "visibility",
  },
];

export default function SGSSTSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + features */}
          <div className="scroll-reveal">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Bienestar y cumplimiento
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em] mb-4">
              Seguridad y Salud en el Trabajo
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
              Diseño, implementación y seguimiento del SG-SST conforme a la
              normatividad vigente: capacitaciones, inspecciones, matrices de
              riesgo y acompañamiento en auditorías.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.titulo} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-brand-blue text-xl">
                      {f.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-display)] text-sm font-bold text-brand-navy mb-0.5">
                      {f.titulo}
                    </h4>
                    <p className="font-[var(--font-body)] text-xs text-text-secondary leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real photo + compliance stat card */}
          <div className="scroll-reveal" data-delay="150">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-brand-navy lg:min-h-[520px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/home/sst.jpg')" }}
                role="img"
                aria-label="Equipo de Asignar aplicando protocolos de seguridad y salud en el trabajo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />

              {/* floating compliance card */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-[0_20px_44px_-18px_rgba(0,18,51,0.4)] backdrop-blur-md sm:inset-x-auto sm:left-6 sm:w-[330px]">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                    <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                      <circle cx="32" cy="32" r="28" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                      <circle cx="32" cy="32" r="28" fill="none" stroke="#007AFE" strokeWidth="6" strokeLinecap="round" strokeDasharray="176" strokeDashoffset="0" />
                    </svg>
                    <span className="font-[var(--font-display)] text-base font-extrabold text-brand-navy">100%</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-base font-bold text-brand-navy">
                      Cumplimiento
                    </p>
                    <p className="font-[var(--font-body)] text-sm text-text-secondary">
                      normativo SG-SST
                    </p>
                    <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">
                      Auditado y vigente
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-[var(--font-ui)] text-xs text-text-muted">
                    Respaldado por
                  </span>
                  <span className="font-[var(--font-display)] text-sm font-bold text-brand-navy">
                    ARL · Cobertura total
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
