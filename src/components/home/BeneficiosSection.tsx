import Link from "next/link";

/* Inline SVG arrow — bulletproof (no icon-font dependency) */
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Cada tarjeta enlaza a la categoría relacionada del FAQ (vía hash #slug).
const beneficios = [
  { titulo: "Pagos quincenales", sub: "Puntuales y seguros", img: "/home/ben-1.jpg", href: "/faq#nomina" },
  { titulo: "Seguridad social", sub: "EPS, Pensión, ARL y Caja", img: "/home/ben-2.jpg", href: "/faq#seguridad-social" },
  { titulo: "Prestaciones de ley", sub: "Prima, cesantías y vacaciones", img: "/home/ben-3.jpg", href: "/faq#nomina" },
  { titulo: "Capacitaciones", sub: "Gratuitas para tu perfil", img: "/home/ben-4.jpg", href: "/faq#sst" },
  { titulo: "Acompañamiento", sub: "De nuestro equipo experto", img: "/home/ben-5.jpg", href: "/faq#vinculacion" },
  { titulo: "Flexibilidad", sub: "Opciones de horarios", img: "/home/ben-6.jpg", href: "/faq#marcacion" },
];

export default function BeneficiosSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16">
        <div className="scroll-reveal mb-14 text-center">
          <span className="mb-3 block font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
            Para candidatos
          </span>
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-brand-navy md:text-4xl">
            Lo que recibes en Asignar
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-[var(--font-body)] text-base text-text-secondary">
            Beneficios diseñados para tu bienestar y crecimiento profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <Link
              key={b.titulo}
              href={b.href}
              aria-label={`${b.titulo} — ver en preguntas frecuentes`}
              className="scroll-reveal group relative block h-[280px] overflow-hidden rounded-[20px] shadow-[0_6px_24px_rgba(0,18,51,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              data-delay={String((i % 3) * 90)}
            >
              {/* photo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                style={{ backgroundImage: `url('${b.img}')` }}
              />
              {/* gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* text */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-extrabold text-white">
                    {b.titulo}
                  </h3>
                  <p className="mt-1 font-[var(--font-body)] text-[13px] text-white/80">
                    {b.sub}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-[0_4px_12px_rgba(0,122,254,0.4)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-[18px] w-[18px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
