import type { Metadata } from "next";
import Link from "next/link";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";

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
      "Personal eventual para picos de demanda y temporadas altas",
      "Personal temporal fijo para proyectos de mediano plazo",
      "Cobertura inmediata en menos de 48 horas",
      "Gestión completa de nómina, prestaciones y seguridad social",
      "Póliza de cumplimiento vigente",
      "Reemplazo garantizado sin costo adicional",
    ],
  },
  {
    titulo: "Outsourcing de Procesos",
    descripcion:
      "Tercerización integral de áreas operativas. Nos encargamos de todo para que tu equipo se concentre en lo estratégico.",
    icon: "settings_suggest",
    items: [
      "Gestión de áreas completas (aseo, cocina, servicio, logística)",
      "Supervisión y coordinación permanente en sitio",
      "Indicadores de gestión y reportes mensuales",
      "Estándares de calidad certificados",
      "Reducción de costos operativos y administrativos",
      "Flexibilidad para escalar según demanda",
    ],
  },
  {
    titulo: "Selección de Personal",
    descripcion:
      "Proceso riguroso de selección para posiciones directas en tu empresa. Encontramos el talento que se ajusta a tu cultura organizacional.",
    icon: "person_search",
    items: [
      "Perfilamiento y headhunting especializado",
      "Evaluación por competencias y pruebas psicotécnicas",
      "Verificación de antecedentes y referencias",
      "Entrevistas grupales e individuales",
      "Garantía de permanencia del candidato",
      "Informe final detallado de selección",
    ],
  },
  {
    titulo: "Gestión de SST",
    descripcion:
      "Sistema de Gestión de Seguridad y Salud en el Trabajo. Cumplimiento normativo y cultura de prevención para tu personal en misión.",
    icon: "health_and_safety",
    items: [
      "Diseño e implementación del SG-SST",
      "Capacitaciones y entrenamientos continuos",
      "Inspecciones periódicas en sitio",
      "Matrices de riesgo y planes de acción",
      "Reportes e indicadores de accidentalidad",
      "Acompañamiento en auditorías — Visión Zero ATEL",
    ],
  },
];

const diferenciadores = [
  {
    titulo: "Cumplimos la normatividad legal",
    descripcion:
      "Operamos bajo la Ley 50 de 1990 con licencia vigente del Ministerio de Trabajo. Transparencia total en cada vinculación.",
    icon: "gavel",
  },
  {
    titulo: "Cobertura a nivel nacional",
    descripcion:
      "7+ sedes en las principales ciudades: Medellín, Bogotá, Cali, Cartagena, Barranquilla, Pereira, Rionegro y más.",
    icon: "location_on",
  },
  {
    titulo: "Especialistas en sector HORECA",
    descripcion:
      "Más de 20 años de experiencia en hotelería, restaurantes, centros de eventos, clubes e industria.",
    icon: "restaurant",
  },
  {
    titulo: "Software propio de gestión",
    descripcion:
      "Plataforma tecnológica propia para trazabilidad de procesos, reportes en tiempo real y autogestión de clientes.",
    icon: "devices",
  },
];

const procesoSteps = [
  { num: "01", titulo: "Reclutamiento", desc: "Hojas de vida" },
  { num: "02", titulo: "Antecedentes", desc: "Consulta y verificación" },
  { num: "03", titulo: "Pruebas", desc: "Psicotécnicas" },
  { num: "04", titulo: "Entrevistas", desc: "Grupal o individual" },
  { num: "05", titulo: "Informe final", desc: "Selección de candidatos" },
  { num: "06", titulo: "Envío", desc: "Candidatos presentados" },
  { num: "07", titulo: "Vinculación", desc: "Listo para trabajar" },
];

const cumplimientoCards = [
  {
    titulo: "Ley 50 de 1990",
    descripcion: "Licencia vigente como Empresa de Servicios Temporales expedida por el Ministerio de Trabajo.",
    icon: "balance",
  },
  {
    titulo: "SG-SST",
    descripcion: "Sistema de Gestión de Seguridad y Salud en el Trabajo al 100% de cumplimiento normativo.",
    icon: "health_and_safety",
  },
  {
    titulo: "ARL SURA",
    descripcion: "Cobertura total en riesgos laborales con la ARL de mayor respaldo del país.",
    icon: "shield",
  },
  {
    titulo: "Póliza de Cumplimiento",
    descripcion: "Garantía financiera vigente que respalda cada contrato de servicio temporal.",
    icon: "verified_user",
  },
];

const sectoresClientes = [
  { nombre: "Hotelero", cantidad: 35, icon: "hotel" },
  { nombre: "Centros de Eventos", cantidad: 7, icon: "celebration" },
  { nombre: "Clubes", cantidad: 5, icon: "sports_tennis" },
  { nombre: "Restaurantes", cantidad: 8, icon: "restaurant" },
  { nombre: "Inmobiliario", cantidad: 3, icon: "apartment" },
  { nombre: "Industria", cantidad: 6, icon: "factory" },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
          <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-light-blue mb-3 block">
            Para Empresas
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-4">
            Personal calificado en{" "}
            <span className="text-brand-light-blue">menos de 48 horas</span>
          </h1>
          <p className="font-[var(--font-body)] text-lg text-white/70 max-w-2xl mb-8">
            Más de 20 años diseñando estrategias de gestión de personal para los
            sectores más exigentes de Colombia. Servicios temporales,
            outsourcing y selección con cumplimiento total.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-surface-gray transition-colors"
            >
              Solicitar propuesta
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
            <a
              href="https://www.asignar.com.co/build/img/PORTAFOLIO%20DE%20SERVICIOS%20ASIGNAR%20SAS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Ver portafolio
              <span className="material-symbols-outlined text-base">
                download
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Ley 50/1990", "SG-SST", "ARL SURA"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 font-[var(--font-ui)] text-xs font-semibold text-white/90"
              >
                <span className="material-symbols-outlined text-brand-light-blue text-sm">
                  verified
                </span>
                {chip}
              </span>
            ))}
          </div>
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
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

      {/* ¿Por qué Asignar? */}
      <section className="py-16 md:py-20 bg-white border-t border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
              ¿Por qué Asignar?
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mx-auto">
              Lo que nos diferencia como aliado estratégico en gestión de talento
              humano.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciadores.map((d) => (
              <div
                key={d.titulo}
                className="flex items-start gap-5 bg-surface rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-brand-blue text-xl"
                    style={{ fontVariationSettings: '"FILL" 0' }}
                  >
                    {d.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                    {d.titulo}
                  </h3>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de selección */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
              Proceso de selección
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary">
              Metodología rigurosa de 7 pasos para garantizar el mejor talento.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {procesoSteps.map((step, i) => (
                <div key={step.num} className="text-center group relative">
                  <div
                    className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center font-[var(--font-display)] text-lg font-bold mb-3 transition-colors duration-300 ${
                      i === procesoSteps.length - 1
                        ? "bg-brand-blue text-white shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
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
        </div>
      </section>

      {/* Cumplimiento y respaldo */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-4">
                Cumplimiento y respaldo
              </h2>
              <p className="font-[var(--font-body)] text-base text-text-secondary leading-relaxed mb-8">
                Operamos con transparencia total y respaldo institucional.
                Cada contrato está protegido por la normatividad colombiana
                y las mejores aseguradoras del país.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-blue">
                    +20
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary mt-1">
                    Años de experiencia
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-blue">
                    7+
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary mt-1">
                    Sedes en Colombia
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy">
                    +5.000
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary mt-1">
                    Colaboradores en misión
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cumplimientoCards.map((c) => (
                <div
                  key={c.titulo}
                  className="bg-white rounded-xl border border-border p-5 card-elevated"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3">
                    <span
                      className="material-symbols-outlined text-brand-blue text-xl"
                      style={{ fontVariationSettings: '"FILL" 0' }}
                    >
                      {c.icon}
                    </span>
                  </div>
                  <h4 className="font-[var(--font-display)] text-sm font-bold text-brand-navy mb-1">
                    {c.titulo}
                  </h4>
                  <p className="font-[var(--font-body)] text-xs text-text-secondary leading-relaxed">
                    {c.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clientes por sector */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-[32px] font-bold text-brand-navy mb-3">
              Clientes por sector
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mx-auto">
              Más de 64 empresas confían en nosotros en los sectores más
              exigentes del país.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {sectoresClientes.map((sector) => (
              <div
                key={sector.nombre}
                className="group bg-surface rounded-xl border border-border p-6 hover:border-brand-blue/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-brand-blue/10 rounded-full px-3 py-1.5 font-[var(--font-ui)] text-xs font-semibold text-brand-blue">
                    <span className="material-symbols-outlined text-sm">
                      {sector.icon}
                    </span>
                    {sector.nombre}
                  </span>
                  <span className="font-[var(--font-display)] text-lg font-bold text-brand-navy">
                    {sector.cantidad}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: Math.min(sector.cantidad, 10) }).map(
                    (_, i) => (
                      <div
                        key={i}
                        className="aspect-[3/2] rounded-lg bg-surface-gray border border-border"
                      />
                    )
                  )}
                  {sector.cantidad > 10 && (
                    <div className="aspect-[3/2] rounded-lg bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center">
                      <span className="font-[var(--font-ui)] text-[10px] font-bold text-brand-blue">
                        +{sector.cantidad - 10}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final — marquee de sectores */}
      <CTAWithVerticalMarquee />
    </>
  );
}
