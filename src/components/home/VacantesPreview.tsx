import Link from "next/link";

/* Inline SVG icons — bulletproof (no icon-font dependency) */
type IconProps = { className?: string };
const Briefcase = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8zM8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Users = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM22 20v-2a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Star = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8L3.5 9.7l5.9-.9L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Box = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const vacantes = [
  { cargo: "Mesero/a de Servicio", ciudad: "Medellín", sector: "Hotelería", Icon: Briefcase },
  { cargo: "Auxiliar de Cocina", ciudad: "Bogotá", sector: "Restaurantes", Icon: Users },
  { cargo: "Recepcionista Hotel", ciudad: "Cartagena", sector: "Hotelería", Icon: Star },
  { cargo: "Auxiliar de Bodega", ciudad: "Cali", sector: "Logística", Icon: Box },
];

const APLICAR_URL = "https://postulate.asignar.cloud";

export default function VacantesPreview() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
          {/* Left — heading */}
          <div className="scroll-reveal lg:sticky lg:top-28">
            <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-brand-navy md:text-4xl">
              Tu próxima oportunidad está aquí
            </h2>
            <p className="mt-4 max-w-sm font-[var(--font-body)] text-base leading-relaxed text-text-secondary">
              Vacantes activas en hotelería, restaurantes, logística e industria.
              Postúlate en minutos.
            </p>
            <Link
              href="/vacantes"
              className="group mt-6 inline-flex items-center gap-1.5 font-[var(--font-ui)] text-sm font-semibold text-brand-blue transition-colors hover:text-brand-deep-blue"
            >
              Ver todas las vacantes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right — job list */}
          <div className="scroll-reveal space-y-3" data-delay="120">
            {vacantes.map(({ cargo, ciudad, sector, Icon }) => (
              <div
                key={cargo}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 card-elevated"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-[var(--font-display)] text-[15px] font-bold text-brand-navy">
                    {cargo}
                  </p>
                  <p className="font-[var(--font-ui)] text-[13px] text-text-muted">
                    {ciudad} · {sector}
                  </p>
                </div>
                <a
                  href={APLICAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-blue/[0.06] px-5 py-2.5 font-[var(--font-ui)] text-sm font-semibold text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
                >
                  Aplicar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
