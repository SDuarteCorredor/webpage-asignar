/* Inline SVG icons per sector — bulletproof (no icon-font dependency) */
type IconProps = { className?: string };

const Bed = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 17v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 13h18M3 17v3M21 17v3M7 9V7a1 1 0 0 1 1-1h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Utensils = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 3v8M5 3v5a2 2 0 0 0 2 2v0M9 3v5a2 2 0 0 1-2 2v0M7 11v10M17 14V3c-1.7 0-3 2-3 5s1.3 5 3 4v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Factory = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 21h18M4 21V10l6 4V10l6 4V6l4-2v17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Truck = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 6h10v9H3zM13 9h4l3 3v3h-7M7 18a2 2 0 1 0 0-.01M18 18a2 2 0 1 0 0-.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Spray = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9 21h6v-8H9zM9 13V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6M12 6V3M15 4h2M15 7h3M18 10h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Building = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 21V9h5a1 1 0 0 1 1 1v11M3 21h18M7 8h3M7 12h3M7 16h3M17 13h0M17 17h0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const sectores = [
  {
    nombre: "Sector Hotelero",
    descripcion: "Hoteles 4 y 5 estrellas en todo el país",
    slug: "hotelero",
    Icon: Bed,
    span: "lg:col-span-3",
  },
  {
    nombre: "Restaurantes",
    descripcion: "Cadenas y restaurantes de alta gama",
    slug: "restaurantes",
    Icon: Utensils,
    span: "lg:col-span-2",
  },
  {
    nombre: "Sector Industrial",
    descripcion: "Manufactura, producción y plantas",
    slug: "industrial",
    Icon: Factory,
    span: "lg:col-span-2",
  },
  {
    nombre: "Logística",
    descripcion: "Bodegas, centros de distribución y transporte",
    slug: "logistica",
    Icon: Truck,
    span: "lg:col-span-2",
  },
  {
    nombre: "Servicios Generales",
    descripcion: "Aseo, mantenimiento y facility management",
    slug: "servicios",
    Icon: Spray,
    span: "lg:col-span-3",
  },
  {
    nombre: "Sector Inmobiliario",
    descripcion: "Constructoras y administración de propiedad",
    slug: "inmobiliario",
    Icon: Building,
    span: "lg:col-span-2",
  },
];

export default function SectoresSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16">
        <div className="scroll-reveal mb-14 text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-brand-navy md:text-4xl">
            Sectores que transformamos
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-[var(--font-body)] text-base text-text-secondary">
            Conectamos el talento adecuado con las industrias clave del país.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-7">
          {sectores.map(({ nombre, descripcion, slug, Icon, span }, i) => (
            <li
              key={nombre}
              className={`scroll-reveal group relative flex min-h-[260px] items-end overflow-hidden rounded-3xl bg-brand-navy lg:min-h-[300px] ${span}`}
              data-delay={String((i % 3) * 90)}
            >
              {/* gradient fallback — shows if the photo is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-blue via-brand-blue to-brand-navy" />
              {/* photo layer (zooms on hover) — /sectores/<slug>.jpg (drop image later) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                style={{ backgroundImage: `url('/home/sec-${slug}.jpg')` }}
              />
              {/* legibility overlay — slides darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-brand-navy/10 transition-opacity duration-[600ms] group-hover:from-brand-navy" />

              {/* glass icon badge */}
              <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md">
                <Icon className="h-5 w-5" />
              </div>

              {/* content */}
              <div className="relative z-10 w-full p-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl font-extrabold text-white">
                      {nombre}
                    </h3>
                    <p className="mt-1 max-w-xs font-[var(--font-body)] text-sm text-white/70">
                      {descripcion}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
