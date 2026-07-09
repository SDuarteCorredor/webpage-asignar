import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Asignar SAS: +20 años conectando talento humano con las mejores empresas de Colombia. Nuestra historia, valores y sedes.",
};

const valores = [
  {
    titulo: "Servicio",
    descripcion: "Vocación genuina por resolver necesidades con excelencia.",
    icon: "volunteer_activism",
  },
  {
    titulo: "Responsabilidad",
    descripcion: "Cumplimos lo que prometemos, siempre a tiempo.",
    icon: "task_alt",
  },
  {
    titulo: "Respeto",
    descripcion:
      "Cada persona es valiosa. Tratamos a todos con dignidad.",
    icon: "diversity_3",
  },
  {
    titulo: "Liderazgo",
    descripcion: "Innovamos y guiamos al sector con visión de futuro.",
    icon: "flag",
  },
  {
    titulo: "Honestidad",
    descripcion: "Transparencia total en cada proceso y relación.",
    icon: "shield",
  },
];

const sedes = [
  {
    ciudad: "Medellín",
    tipo: "Sede Principal",
    icon: "location_city",
  },
  { ciudad: "Bogotá", tipo: "Sede", icon: "apartment" },
  { ciudad: "Cali", tipo: "Sede", icon: "apartment" },
  { ciudad: "Barranquilla", tipo: "Sede", icon: "apartment" },
  { ciudad: "Cartagena", tipo: "Sede", icon: "apartment" },
  { ciudad: "Rionegro", tipo: "Sede", icon: "apartment" },
  {
    ciudad: "Pereira / Manizales",
    tipo: "Sede Eje Cafetero",
    icon: "apartment",
  },
];

const timeline = [
  { year: "2006", event: "Fundación de Asignar SAS en Medellín" },
  {
    year: "2010",
    event: "Expansión a Bogotá y consolidación en hotelería",
  },
  { year: "2014", event: "Apertura de sedes en la Costa Caribe" },
  {
    year: "2018",
    event: "Certificaciones y expansión a 7+ ciudades",
  },
  {
    year: "2023",
    event: "Premio a la Excelencia — +20 años de trayectoria",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-gray py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="max-w-3xl">
            <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-blue mb-3 block">
              Sobre Nosotros
            </span>
            <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
              Creemos en las personas
              <br className="hidden md:block" />y en su potencial
            </h1>
            <p className="font-[var(--font-body)] text-lg text-text-secondary leading-relaxed max-w-2xl">
              Desde 2006, Asignar SAS ha sido el puente entre el talento
              colombiano y las empresas que necesitan equipos comprometidos.
              Somos una empresa de servicios temporales con licencia del
              Ministerio de Trabajo, operando bajo la Ley 50 de 1990.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-brand-navy mb-10">
            Nuestra historia
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-[var(--font-display)] text-sm font-bold z-10 ${
                      i === timeline.length - 1
                        ? "bg-brand-blue text-white shadow-md"
                        : "bg-white border-2 border-border text-text-muted group-hover:border-brand-blue group-hover:text-brand-blue"
                    } transition-colors duration-300`}
                  >
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-border" />
                  )}
                </div>
                <div className="pb-8 pt-2.5">
                  <p className="font-[var(--font-body)] text-base text-text-secondary">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-20 bg-surface-gray">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-brand-navy mb-3">
              Nuestros valores
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto">
              Los principios que guían cada decisión y cada relación.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="group bg-white border border-border rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-blue transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-brand-blue text-xl group-hover:text-white transition-colors duration-300"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                  {v.titulo}
                </h3>
                <p className="font-[var(--font-body)] text-xs text-text-secondary leading-relaxed">
                  {v.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCA */}
      <section className="py-16 md:py-20 bg-brand-gradient">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-light-blue mb-2 block">
              Propuesta de Valor
            </span>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-white mb-3">
              El método DOCA
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                l: "D",
                t: "Disposición",
                d: "Servicio ágil y proactivo",
              },
              {
                l: "O",
                t: "Oportunidad",
                d: "Puentes entre talento y empresas",
              },
              {
                l: "C",
                t: "Calidad",
                d: "Procesos rigurosos y certificados",
              },
              {
                l: "A",
                t: "Acompañamiento",
                d: "Contigo en cada paso del proceso",
              },
            ].map((p) => (
              <div
                key={p.l}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <span className="font-[var(--font-display)] text-5xl font-extrabold text-brand-blue block mb-2">
                  {p.l}
                </span>
                <h3 className="font-[var(--font-display)] text-base font-bold text-white mb-1">
                  {p.t}
                </h3>
                <p className="font-[var(--font-body)] text-xs text-white/60">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-brand-navy mb-3">
              Nuestras sedes
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary">
              Presencia nacional para atenderte donde estés.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sedes.map((s) => (
              <div
                key={s.ciudad}
                className={`border rounded-xl p-5 text-center transition-all duration-300 hover:shadow-md ${
                  s.tipo === "Sede Principal"
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-border bg-surface-gray"
                }`}
              >
                <span className="material-symbols-outlined text-brand-blue text-2xl mb-2">
                  {s.icon}
                </span>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy">
                  {s.ciudad}
                </h3>
                <p className="font-[var(--font-ui)] text-xs text-text-muted mt-1">
                  {s.tipo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
