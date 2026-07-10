import Link from "next/link";

/* ---------- Inline icons ---------- */
type IconProps = { className?: string };
const ArrowRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 6 2 2 0 016.5 3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);
const MailIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PinIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

/* ---------- Data ---------- */
const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const POL = "https://www.asignar.com.co/build/img/";
const PRINCIPAL = "Cra. 48 #10-45, El Poblado, Medellín";

const candidatos = [
  { label: "Ver ofertas laborales", href: "/vacantes" },
  { label: "Postúlate", href: "/postulate" },
  { label: "Ingreso empleados", href: "https://www.asignar.com.co/_admin/usuario.php" },
  { label: "Descarga tu colilla de pago", href: "https://www.asignar.com.co/_admin/usuario.php" },
  { label: "Envía tu hoja de vida", href: "mailto:marketingdigital@asignar.com.co" },
];

const empresas = [
  { label: "Solicitar cotización", href: "/soluciones" },
  { label: "Portafolio de servicios", href: `${POL}PORTAFOLIO%20DE%20SERVICIOS%20ASIGNAR%20SAS.pdf` },
  { label: "Ingreso clientes", href: "https://www.asignar.com.co/_admin/" },
  { label: "Paga tu factura", href: "https://www.pagosvirtualesavvillas.com.co/personal/pagos/1685" },
];

const sedes = [
  { ciudad: "Medellín", nota: "Principal", dir: "Cra. 48 #10-45, El Poblado", q: PRINCIPAL },
  { ciudad: "Bogotá", dir: "Cra 19 #44-61", q: "Cra 19 #44-61, Bogotá" },
  { ciudad: "Rionegro", dir: "Cra. 48 #49-05", q: "Cra. 48 #49-05, Rionegro, Antioquia" },
  { ciudad: "Cali", dir: "Cl. 4 #34-18, El Sindicato", q: "Cl. 4 #34-18, El Sindicato, Cali" },
  { ciudad: "Cartagena", dir: "Cl. 35 #8B-05, Centro", q: "Calle 35 Avenida Venezuela #8B-05, Centro, Cartagena" },
  { ciudad: "Barranquilla", q: "Asignar SAS, Barranquilla, Colombia" },
  { ciudad: "Santa Marta", q: "Asignar SAS, Santa Marta, Colombia" },
  { ciudad: "Pereira", q: "Asignar SAS, Pereira, Colombia" },
  { ciudad: "Manizales", q: "Asignar SAS, Manizales, Colombia" },
];

const legal = [
  { label: "Tratamiento de datos", href: `${POL}Politica_Tratamiento_Datos_Personales.pdf` },
  { label: "Ética corporativa", href: `${POL}Etica_Corporativa.pdf` },
  { label: "SAGRILAFT", href: `${POL}Manual_de_Procedimientos_Politicas_SAGRILAFT.pdf` },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/asignar_sas",
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/asignar-sas",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/asignartemporal",
    label: "Facebook",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@asignar_sas",
    label: "TikTok",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

/* ---------- Link helper ---------- */
function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls =
    "font-[var(--font-body)] text-sm text-white/55 transition-colors hover:text-white";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 font-[var(--font-ui)] text-sm font-bold text-white">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#12151B] text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* CTA — empresas */}
        <div className="flex flex-col items-start gap-5 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <h2 className="max-w-2xl font-[var(--font-display)] text-2xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-3xl md:text-[40px]">
            ¿Listo para escalar tu operación con el mejor talento humano?
          </h2>
          <Link
            href="/soluciones"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-[var(--font-ui)] text-sm font-semibold text-[#12151B] transition-transform hover:-translate-y-0.5"
          >
            Solicita una cotización
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="h-px bg-white/10" />

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:gap-x-10">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-start lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-asignar-blanco.svg"
              alt="Asignar Servicios Temporales"
              className="h-9 w-auto"
            />
            <p className="mt-5 font-[var(--font-display)] text-base font-semibold text-white/90">
              Creemos en ti y en tu talento
            </p>
            <p className="mt-2 max-w-xs font-[var(--font-body)] text-sm leading-relaxed text-white/55">
              +20 años conectando talento con empresas líderes de Colombia.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-brand-blue hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Candidatos */}
          <div>
            <ColTitle>¿Buscas empleo?</ColTitle>
            <ul className="space-y-3">
              {candidatos.map((l) => (
                <li key={l.label}>
                  <FLink href={l.href}>{l.label}</FLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <ColTitle>Soluciones empresariales</ColTitle>
            <ul className="space-y-3">
              {empresas.map((l) => (
                <li key={l.label}>
                  <FLink href={l.href}>{l.label}</FLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedes */}
          <div className="col-span-2 lg:col-span-1">
            <ColTitle>Cobertura nacional</ColTitle>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-y-2.5">
              {sedes.map((s) => (
                <li key={s.ciudad}>
                  <a
                    href={maps(s.q)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-1.5 lg:gap-2"
                  >
                    <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-light-blue/70 lg:h-4 lg:w-4" />
                    <span>
                      <span className="font-[var(--font-body)] text-[13px] font-medium text-white/80 transition-colors group-hover:text-white lg:text-sm">
                        {s.ciudad}
                        {s.nota && (
                          <span className="ml-1 rounded bg-brand-blue/20 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand-light-blue lg:ml-1.5 lg:px-1.5 lg:text-[10px]">
                            {s.nota}
                          </span>
                        )}
                      </span>
                      <span className="hidden font-[var(--font-body)] text-xs text-white/40 lg:block">
                        {s.dir}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* Contact row */}
        <div className="flex flex-col gap-5 py-10 sm:flex-row sm:gap-8">
          <a href="tel:+576043220310" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-light-blue transition-colors group-hover:border-brand-blue sm:h-12 sm:w-12">
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span>
              <span className="block font-[var(--font-ui)] text-[13px] font-semibold text-white sm:text-sm">
                Línea nacional
              </span>
              <span className="font-[var(--font-body)] text-[13px] text-white/55 sm:text-sm">
                (57) 604 322 0310
              </span>
            </span>
          </a>

          <a
            href="mailto:marketingdigital@asignar.com.co"
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-light-blue transition-colors group-hover:border-brand-blue sm:h-12 sm:w-12">
              <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span>
              <span className="block font-[var(--font-ui)] text-[13px] font-semibold text-white sm:text-sm">
                Escríbenos
              </span>
              <span className="font-[var(--font-body)] text-[13px] text-white/55 break-all sm:text-sm sm:break-normal">
                marketingdigital@asignar.com.co
              </span>
            </span>
          </a>

          <a
            href={maps(PRINCIPAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-light-blue transition-colors group-hover:border-brand-blue sm:h-12 sm:w-12">
              <PinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span>
              <span className="block font-[var(--font-ui)] text-[13px] font-semibold text-white sm:text-sm">
                Sede principal
              </span>
              <span className="font-[var(--font-body)] text-[13px] text-white/55 sm:text-sm">
                Cra. 48 #10-45, El Poblado, Medellín
              </span>
            </span>
          </a>
        </div>

        <div className="h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-[var(--font-body)] text-[11px] text-white/45 sm:text-xs">
              © {new Date().getFullYear()} ASIGNAR SAS · Empresa de Servicios
              Temporales (Ley 50 de 1990) · Todos los derechos reservados.
            </p>
            <a
              href="https://www.conexionoutsourcing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-body)] text-[11px] text-white/45 transition-colors hover:text-brand-light-blue sm:text-xs"
            >
              Conozca nuestra empresa filial: Conexión Outsourcing S.A.S.
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end">
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-body)] text-xs text-white/45 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:sqr@asignar.com.co"
              className="font-[var(--font-body)] text-xs text-white/45 transition-colors hover:text-white"
            >
              Línea ética (SQR)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
