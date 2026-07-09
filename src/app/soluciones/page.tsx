import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones Empresariales",
  description:
    "Servicios temporales, outsourcing y selección de personal para hotelería, restaurantes, logística e industria en Colombia.",
};

const servicios = [
  {
    titulo: "Servicios Temporales",
    descripcion:
      "Suministro de personal temporal calificado para cubrir picos de demanda, reemplazos y proyectos específicos. Cumplimiento total de la Ley 50 de 1990.",
    icon: "groups",
    items: [
      "Personal operativo y administrativo",
      "Cobertura inmediata en menos de 48 horas",
      "Gestión completa de nómina y prestaciones",
      "Póliza de cumplimiento vigente",
    ],
  },
  {
    titulo: "Outsourcing de Procesos",
    descripcion:
      "Tercerización integral de áreas operativas. Nos encargamos de todo para que tu equipo se concentre en lo estratégico.",
    icon: "settings_suggest",
    items: [
      "Gestión de áreas completas (aseo, cocina, servicio)",
      "Supervisión y coordinación permanente",
      "Indicadores de gestión y reportes",
      "Estándares de calidad certificados",
    ],
  },
  {
    titulo: "Selección de Personal",
    descripcion:
      "Proceso riguroso de selección para posiciones directas en tu empresa. Encontramos el talento que se ajusta a tu cultura organizacional.",
    icon: "person_search",
    items: [
      "Perfilamiento y headhunting especializado",
      "Evaluación por competencias",
      "Verificación de antecedentes y referencias",
      "Garantía de permanencia",
    ],
  },
  {
    titulo: "Gestión de SST",
    descripcion:
      "Sistema de Gestión de Seguridad y Salud en el Trabajo para tu personal. Cumplimiento normativo y cultura de prevención.",
    icon: "health_and_safety",
    items: [
      "Implementación SG-SST",
      "Capacitaciones y entrenamientos",
      "Inspecciones periódicas",
      "Reportes e indicadores de accidentalidad",
    ],
  },
];

const procesoSteps = [
  { num: "01", titulo: "Requerimiento", desc: "Nos cuentas qué necesitas" },
  { num: "02", titulo: "Sourcing", desc: "Buscamos los perfiles ideales" },
  { num: "03", titulo: "Entrevistas", desc: "Evaluamos competencias" },
  { num: "04", titulo: "Pruebas", desc: "Validamos habilidades técnicas" },
  { num: "05", titulo: "Ternas", desc: "Te presentamos los mejores" },
  { num: "06", titulo: "Selección", desc: "Tú decides, nosotros ejecutamos" },
  { num: "07", titulo: "Contratación", desc: "Listo para trabajar" },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
          <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-light-blue mb-3 block">
            Para Empresas
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            La solución en talento humano
            <br className="hidden md:block" />
            que tu operación necesita
          </h1>
          <p className="font-[var(--font-body)] text-lg text-white/70 max-w-2xl mb-8">
            Más de 20 años diseñando estrategias de gestión de personal para los
            sectores más exigentes de Colombia.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-brand-navy font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-surface-gray transition-colors"
          >
            Solicitar propuesta
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
              Nuestros servicios
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mx-auto">
              Soluciones integrales adaptadas a las necesidades específicas de tu
              sector y operación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="group bg-surface-gray border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-brand-blue text-2xl group-hover:text-white transition-colors duration-300"
                    style={{ fontVariationSettings: '"FILL" 0' }}
                  >
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-2">
                  {s.titulo}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-text-secondary mb-5 leading-relaxed">
                  {s.descripcion}
                </p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-brand-blue text-base mt-0.5 flex-shrink-0">
                        check
                      </span>
                      <span className="font-[var(--font-body)] text-sm text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 md:py-20 bg-surface-gray">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
              Proceso de selección
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary">
              Metodología comprobada para asegurar el ajuste perfecto.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {procesoSteps.map((step, i) => (
              <div key={step.num} className="text-center group">
                <div
                  className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center font-[var(--font-display)] text-lg font-bold mb-3 transition-colors duration-300 ${
                    i === procesoSteps.length - 1
                      ? "bg-brand-blue text-white shadow-md"
                      : "bg-white border-2 border-border text-text-muted group-hover:border-brand-blue group-hover:text-brand-blue"
                  }`}
                >
                  {step.num}
                </div>
                <p className="font-[var(--font-ui)] text-xs font-bold text-brand-navy">
                  {step.titulo}
                </p>
                <p className="font-[var(--font-body)] text-[11px] text-text-muted mt-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-16 text-center">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            ¿Listo para optimizar tu operación?
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary mb-8 max-w-lg mx-auto">
            Cuéntanos sobre tu empresa y te diseñamos una propuesta a la medida.
            Sin compromisos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-10 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Solicitar propuesta
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
