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

          {/* Right: designed panel */}
          <div className="scroll-reveal" data-delay="150">
            <div className="rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden min-h-[440px] flex">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/foto-sst.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/95 via-brand-blue/80 to-brand-deep-blue/95" />
              <div className="relative z-10 self-center">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-white text-3xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified_user
                  </span>
                </div>
                <p className="font-[var(--font-display)] text-2xl font-bold mb-2">
                  Visión Zero ATEL
                </p>
                <p className="font-[var(--font-body)] text-sm text-white/80 leading-relaxed mb-8 max-w-sm">
                  Trabajamos por cero accidentes y cero enfermedades laborales en
                  cada operación que acompañamos.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-brand-gold text-3xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    shield
                  </span>
                  <div>
                    <p className="font-[var(--font-display)] text-base font-bold">
                      ARL SURA
                    </p>
                    <p className="font-[var(--font-ui)] text-xs text-white/70">
                      Para todos los empleados misionales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
