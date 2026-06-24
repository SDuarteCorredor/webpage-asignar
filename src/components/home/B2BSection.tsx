import Link from "next/link";

const beneficios = [
  "Personal calificado y verificado en menos de 48 horas",
  "Gestión completa de nómina, SST y documentación legal",
  "Cobertura nacional: 7+ sedes en las principales ciudades",
  "Cumplimiento Ley 50 de 1990 y normativa vigente",
  "Acompañamiento continuo con coordinador dedicado",
];

export default function B2BSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-reveal">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-gold block">
              Para empresas
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
              ¿Necesitas personal temporal para tu operación?
            </h2>
            <p className="font-[var(--font-body)] text-base text-white/70 leading-relaxed max-w-lg">
              Más de 20 años garantizando que tu operación nunca se quede sin
              equipo. Personal calificado, cumpliendo toda la normativa laboral.
            </p>

            <ul className="space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-brand-gold text-lg mt-0.5 flex-shrink-0"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>
                  <span className="font-[var(--font-body)] text-sm text-white/80">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-surface transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Solicitar propuesta
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="hidden lg:block scroll-reveal" data-delay="200">
            <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-brand-gold text-2xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    handshake
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-lg font-bold text-white">
                    Aliado estratégico
                  </p>
                  <p className="font-[var(--font-ui)] text-xs text-white/50">
                    No somos un proveedor, somos tu equipo
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hotelería", icon: "hotel", pct: "35%" },
                  { label: "Restaurantes", icon: "restaurant", pct: "25%" },
                  { label: "Logística", icon: "local_shipping", pct: "20%" },
                  { label: "Industria", icon: "factory", pct: "20%" },
                ].map((sector) => (
                  <div
                    key={sector.label}
                    className="bg-white/[0.04] rounded-2xl p-4"
                  >
                    <span className="material-symbols-outlined text-white/40 text-lg">
                      {sector.icon}
                    </span>
                    <p className="font-[var(--font-ui)] text-xs text-white/50 mt-2">
                      {sector.label}
                    </p>
                    <p className="font-[var(--font-display)] text-xl font-bold text-white">
                      {sector.pct}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
