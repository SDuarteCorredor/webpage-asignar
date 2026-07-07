type IconProps = { className?: string };

const DocIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M13 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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

// Dos filas centradas: la primera con 6, la segunda con 5.
const rows = [policies.slice(0, 6), policies.slice(6)];

function PolicyChip({ label, file }: { label: string; file: string }) {
  return (
    <a
      href={`${POL}${file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 transition-colors hover:border-brand-blue hover:bg-brand-blue/[0.05]"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/[0.08] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
        <DocIcon className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap font-[var(--font-body)] text-[13px] font-medium text-brand-navy">
        {label}
      </span>
    </a>
  );
}

export default function PoliticasSostenibilidad() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 text-center">
        <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-brand-navy md:text-4xl">
          Políticas y Sostenibilidad
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-[var(--font-body)] text-base leading-relaxed text-text-secondary">
          Conozca nuestro compromiso con la sociedad, el medio ambiente y la
          transparencia corporativa. Descargue nuestras políticas para entender
          cómo operamos con responsabilidad.
        </p>

        <div className="scroll-reveal mt-10 flex flex-col items-center gap-3">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-3 lg:flex-nowrap"
            >
              {row.map((p) => (
                <PolicyChip key={p.label} label={p.label} file={p.file} />
              ))}
            </div>
          ))}
        </div>

        <p className="mt-9 font-[var(--font-body)] text-xs text-text-muted/70">
          Todos los documentos se abren en una nueva pestaña en formato PDF.
        </p>
      </div>
    </section>
  );
}
