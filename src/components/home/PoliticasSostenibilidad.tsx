type IconProps = { className?: string };

const DocIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M13 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ExternalArrow = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Políticas — PDFs oficiales (mismos que el dropdown del header: asignar.com.co/build/img/)
const POL = "https://www.asignar.com.co/build/img/";
const policies = [
  { label: "Responsabilidad social", file: "Politica_de_Responsabilidad_Social_Corporativa.pdf" },
  { label: "Tratamiento de datos", file: "Politica_Tratamiento_Datos_Personales.pdf" },
  { label: "Datos por videovigilancia", file: "Politica_Tratamiento_Datos_Captados_por_Sistemas_Videovigilancia.pdf" },
  { label: "Prácticas laborales", file: "Politica_de_Practicas_Laborales.pdf" },
  { label: "Política ambiental", file: "Politica_Ambiental.pdf" },
  { label: "Sostenibilidad", file: "Politica_de_Sostenibilidad.pdf" },
  { label: "Ética corporativa", file: "Etica_Corporativa.pdf" },
  { label: "Derechos humanos", file: "Politica_de_Derechos_Humanos.pdf" },
  { label: "Inhabilidades (delitos sexuales)", file: "Politica_de_Inhabilidades_por_Delitos_Sexuales.pdf" },
  { label: "SAGRILAFT", file: "Manual_de_Procedimientos_Politicas_SAGRILAFT.pdf" },
  { label: "PTEE", file: "Manual_de_Procedimientos_Politicas_PTEE.pdf" },
];

export default function PoliticasSostenibilidad() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 md:px-16 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — heading + policy links */}
        <div className="scroll-reveal">
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-brand-navy md:text-4xl">
            Políticas y Sostenibilidad
          </h2>
          <p className="mt-4 max-w-lg font-[var(--font-body)] text-base leading-relaxed text-text-secondary">
            Conozca nuestro compromiso con la sociedad, el medio ambiente y la
            transparencia corporativa. Descargue nuestras políticas para
            entender cómo operamos con responsabilidad.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {policies.map((p) => (
              <a
                key={p.label}
                href={`${POL}${p.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-brand-blue/[0.05]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <DocIcon className="h-4 w-4" />
                </span>
                <span className="flex-1 font-[var(--font-body)] text-sm font-medium text-brand-navy">
                  {p.label}
                </span>
                <ExternalArrow className="h-4 w-4 shrink-0 text-brand-blue/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </a>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <p className="font-[var(--font-body)] text-xs text-text-muted/70">
              Todos los documentos se abren en una nueva pestaña en formato PDF.
            </p>
          </div>
        </div>

        {/* RIGHT — image block */}
        <div className="scroll-reveal" data-delay="120">
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-light-blue via-brand-blue to-brand-deep-blue shadow-[0_40px_90px_-40px_rgba(0,18,51,0.5)]"
            role="img"
            aria-label="Operación de Asignar con estándares de calidad y cumplimiento"
          >
            {/* photo layer — /politicas.jpg (drop image later). Transparent on 404 → gradient shows. */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/politicas.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-brand-navy/60 px-4 py-2 backdrop-blur-md">
              <span className="font-[var(--font-ui)] text-xs font-medium text-white/90">
                Operación responsable y certificada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
