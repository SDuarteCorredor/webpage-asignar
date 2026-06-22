import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-surface-gray">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 via-transparent to-brand-blue/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/[0.03] to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-16 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 py-16 md:py-0">
        {/* Left: Content */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
            <span
              className="material-symbols-outlined text-brand-blue"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              workspace_premium
            </span>
            <span className="font-[var(--font-ui)] text-sm font-bold text-text-secondary">
              +20 años de excelencia
            </span>
          </div>

          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[56px] font-extrabold text-brand-navy leading-tight tracking-tight">
            Creemos en ti y{" "}
            <br className="hidden sm:block" />
            <span className="text-brand-blue">en tu talento</span>
          </h1>

          <p className="font-[var(--font-body)] text-lg text-text-secondary max-w-xl leading-relaxed">
            Conectamos el mejor talento humano con las empresas más destacadas
            de Colombia. Encuentra tu próximo empleo o la solución de personal
            que tu operación necesita.
          </p>

          {/* Dual CTA — two audiences */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/vacantes"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                work
              </span>
              Ver Vacantes
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy border border-border font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full shadow-sm hover:bg-surface-gray hover:border-brand-blue/30 transition-all duration-200"
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: '"FILL" 0' }}
              >
                business_center
              </span>
              Soluciones Empresariales
            </Link>
          </div>

          {/* Quick trust signals */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-text-muted">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-brand-blue text-lg">
                verified
              </span>
              <span className="font-[var(--font-ui)] text-xs font-medium">
                Licencia MinTrabajo
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-brand-blue text-lg">
                location_on
              </span>
              <span className="font-[var(--font-ui)] text-xs font-medium">
                7+ sedes en Colombia
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-brand-blue text-lg">
                groups
              </span>
              <span className="font-[var(--font-ui)] text-xs font-medium">
                Miles de trabajadores
              </span>
            </div>
          </div>
        </div>

        {/* Right: Visual element */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Spinning circles */}
            <div className="absolute inset-0 border-2 border-brand-blue/15 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 border border-brand-blue/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-brand-light-blue/10 rounded-full animate-[spin_50s_linear_infinite]" />

            {/* Center glass card */}
            <div className="absolute inset-16 glass-panel rounded-full shadow-xl flex items-center justify-center">
              <div className="text-center space-y-1">
                <span className="block font-[var(--font-display)] text-5xl font-extrabold text-brand-blue">
                  +20
                </span>
                <span className="block font-[var(--font-ui)] text-xs font-medium text-text-secondary uppercase tracking-widest">
                  Años de
                  <br />
                  Experiencia
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg border border-border p-3 flex items-center gap-2 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-sm">
                  trending_up
                </span>
              </div>
              <div>
                <p className="font-[var(--font-ui)] text-xs font-bold text-brand-navy">
                  Hotelería
                </p>
                <p className="font-[var(--font-ui)] text-[10px] text-text-muted">
                  Sector líder
                </p>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 bg-white rounded-xl shadow-lg border border-border p-3 flex items-center gap-2 animate-[bounce_4s_ease-in-out_infinite_0.5s]">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-blue text-sm">
                  restaurant
                </span>
              </div>
              <div>
                <p className="font-[var(--font-ui)] text-xs font-bold text-brand-navy">
                  Restaurantes
                </p>
                <p className="font-[var(--font-ui)] text-[10px] text-text-muted">
                  Alto volumen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
