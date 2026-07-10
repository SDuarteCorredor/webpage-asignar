const features = [
  {
    titulo: "Inspección de Seguridad",
    desc: "Identificación y control de riesgos en el lugar de trabajo.",
    icon: "search",
  },
  {
    titulo: "Programas de Capacitación",
    desc: "Formación continua en prevención de riesgos laborales.",
    icon: "groups",
  },
  {
    titulo: "Programas de Prevención",
    desc: "Plan de acción para eliminar accidentes y enfermedades.",
    icon: "check_circle",
  },
  {
    titulo: "Visión Zero ATEL",
    desc: "Metodología de cero accidentes: diagnóstico e intervención.",
    icon: "workspace_premium",
  },
];

export default function SGSSTSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + features */}
          <div className="scroll-reveal text-center lg:text-left">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Bienestar y cumplimiento
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em] mb-4">
              Seguridad y Salud en el Trabajo
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Diseño, implementación y seguimiento del SG-SST conforme a la
              normatividad vigente: capacitaciones, inspecciones, matrices de
              riesgo y acompañamiento en auditorías.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-x-6 sm:gap-y-6 text-left">
              {features.map((f) => (
                <div key={f.titulo} className="flex flex-col items-center text-center gap-2 rounded-2xl bg-surface-gray/60 p-4 sm:flex-row sm:text-left sm:items-start sm:bg-transparent sm:p-0 sm:rounded-none sm:gap-3">
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

          {/* Right: blue-tinted image + floating cards */}
          <div className="scroll-reveal" data-delay="150">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] lg:min-h-[520px]">
              {/* blue gradient base */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(128deg, #007AFE 7%, #05B8FD 89%)",
                }}
              />
              {/* real photo at 20% — same tint as Figma */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/home/sst.jpg')" }}
                role="img"
                aria-label="Equipo de Asignar aplicando protocolos de seguridad y salud en el trabajo"
              />
              {/* left fade into surface */}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-surface via-surface/60 to-transparent" />

              {/* Visión Zero ATEL pill */}
              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-[0_8px_20px_-10px_rgba(0,18,51,0.35)] backdrop-blur-sm">
                <span className="font-[var(--font-ui)] text-[13px] font-semibold text-brand-navy">
                  Visión Zero ATEL
                </span>
              </div>

              {/* +5.000 workers card */}
              <div className="absolute right-5 top-5 rounded-2xl bg-white/95 px-5 py-3.5 shadow-[0_10px_26px_-12px_rgba(0,18,51,0.4)] backdrop-blur-sm">
                <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-blue">
                  +5.000
                </p>
                <p className="mt-1.5 font-[var(--font-ui)] text-xs font-semibold text-brand-navy">
                  trabajadores protegidos
                </p>
              </div>

              {/* Compliance card */}
              <div className="absolute inset-x-5 bottom-5 rounded-[20px] bg-white p-6 shadow-[0_20px_44px_-18px_rgba(10,26,58,0.28)] sm:inset-x-auto sm:left-6 sm:w-[336px] lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                    <svg
                      viewBox="0 0 80 80"
                      className="absolute inset-0 h-full w-full -rotate-90"
                      aria-hidden="true"
                    >
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#E2E8F6" strokeWidth="8" />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke="#007AFE"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="214"
                        strokeDashoffset="0"
                      />
                    </svg>
                    <span className="font-[var(--font-display)] text-[17px] font-extrabold text-brand-navy">
                      100%
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-[15px] font-bold leading-snug text-brand-navy">
                      Cumplimiento
                      <br />
                      normativo SG-SST
                    </p>
                    <p className="mt-1.5 font-[var(--font-body)] text-xs text-text-muted">
                      Auditado y vigente
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#E2E8F6] pt-3">
                  <p className="font-[var(--font-ui)] text-[11px] text-text-muted">
                    Respaldado por
                  </p>
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/clientes-brand/sura.png"
                      alt="SURA"
                      width={88}
                      height={29}
                      className="h-[29px] w-auto"
                    />
                    <span className="rounded-full bg-brand-blue/10 px-3.5 py-1.5 font-[var(--font-ui)] text-[11px] font-semibold text-brand-blue">
                      ARL · Cobertura total
                    </span>
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
