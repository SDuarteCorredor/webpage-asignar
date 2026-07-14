import type { Metadata } from "next";
import Link from "next/link";
import ServiciosExplorer from "@/components/soluciones/ServiciosExplorer";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";

export const metadata: Metadata = {
  title: "Soluciones Empresariales",
  description:
    "Servicios temporales, outsourcing y selección de personal para hotelería, restaurantes, logística e industria en Colombia.",
};

const diferenciadores = [
  {
    titulo: "Cumplimos la normatividad legal",
    descripcion:
      "Asignar cumple con todos los lineamientos de ley para personal temporal eventual y tiempo completo.",
    icon: "verified_user",
  },
  {
    titulo: "Cobertura a nivel nacional",
    descripcion:
      "Nuestras sedes: Medellín, Rionegro, Bogotá, Cali, Barranquilla, Santa Marta, Cartagena, Pereira, Manizales.",
    icon: "location_on",
  },
  {
    titulo: "Especialistas en sector HORECA",
    descripcion:
      "Hoteles de alto perfil, clubes, cadenas de restaurantes y centros de convenciones.",
    icon: "apartment",
  },
  {
    titulo: "Software propio",
    descripcion:
      "QR en dispositivos electrónicos para agilizar nómina y requisiciones en tiempo real.",
    icon: "desktop_windows",
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
    descripcion: "Contratación temporal 100% legal",
  },
  {
    titulo: "SG-SST",
    descripcion: "Sistema de seguridad y salud implementado",
  },
  {
    titulo: "ARL SURA",
    descripcion: "Cobertura y respaldo en riesgos laborales",
  },
  {
    titulo: "Póliza de cumplimiento",
    descripcion: "Vigente y verificable ante tu empresa",
  },
];

const sectoresClientes = [
  { nombre: "Sector Hotelero", cantidad: 35 },
  { nombre: "Centros de eventos", cantidad: 7 },
  { nombre: "Clubes", cantidad: 5 },
  { nombre: "Restaurantes", cantidad: 8 },
  { nombre: "Sector Inmobiliario", cantidad: 3 },
  { nombre: "Industria, Producción, Retail y Servicios", cantidad: 6 },
];

export default function SolucionesPage() {
  return (
    <>
      {/* 01 Hero */}
      <section className="bg-surface py-16 md:py-[72px]">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[1px] text-brand-blue bg-brand-blue/[0.09] rounded-full px-3 py-1.5 mb-5">
              Para empresas
            </span>
            <h1 className="font-[var(--font-display)] text-[32px] md:text-[40px] font-extrabold text-brand-navy leading-[1.06] tracking-[-0.8px] mb-5">
              El personal que tu operación necesita, listo en{" "}
              <span className="text-brand-blue">menos de 48 horas</span>.
            </h1>
            <p className="font-[var(--font-body)] text-lg text-text-secondary leading-relaxed mb-6">
              Servicios temporales, outsourcing y selección de personal con
              cumplimiento total —Ley 50/1990, SG-SST y ARL SURA— para los
              sectores más exigentes de Colombia.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-6">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold px-7 py-[15px] rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Solicitar propuesta
              </Link>
              <a
                href="https://www.asignar.com.co/build/img/PORTAFOLIO%20DE%20SERVICIOS%20ASIGNAR%20SAS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-[1.5px] border-border font-[var(--font-ui)] text-[15px] font-semibold text-brand-navy px-7 py-[15px] rounded-full hover:bg-white transition-colors"
              >
                Ver portafolio
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-[var(--font-ui)] text-[13px] font-semibold text-text-muted">
                Respaldo:
              </span>
              {["Ley 50/1990", "SG-SST", "ARL SURA"].map((chip) => (
                <span
                  key={chip}
                  className="inline-block bg-white border border-border rounded-full px-3 py-1.5 font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — proposal form card */}
          <div className="w-full lg:w-[440px] shrink-0 bg-white border border-border rounded-3xl p-8 shadow-[0_24px_56px_-20px_rgba(0,18,51,0.12)]">
            <div className="mb-5">
              <h2 className="font-[var(--font-display)] text-[23px] font-extrabold text-brand-navy tracking-[-0.46px] mb-2">
                Solicita tu propuesta
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="font-[var(--font-body)] text-[13px] text-text-muted">
                  Respuesta en menos de 24 h · sin compromiso
                </span>
              </div>
            </div>

            <form
              action="/contacto"
              className="flex flex-col gap-[18px]"
            >
              <div>
                <label className="font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-surface border border-border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors"
                />
              </div>
              <div>
                <label className="font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]">
                  Sector
                </label>
                <select className="w-full bg-surface border border-border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-muted outline-none focus:border-brand-blue transition-colors appearance-none">
                  <option value="">Selecciona tu sector</option>
                  <option value="hotelero">Hotelero</option>
                  <option value="restaurantes">Restaurantes</option>
                  <option value="eventos">Centros de eventos</option>
                  <option value="clubes">Clubes</option>
                  <option value="industria">Industria</option>
                  <option value="inmobiliario">Inmobiliario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]">
                  ¿Qué necesitas?
                </label>
                <textarea
                  placeholder="Ej. 15 meseros para eventos de fin de año"
                  rows={2}
                  className="w-full bg-surface border border-border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Enviar solicitud →
              </button>
            </form>
            <p className="font-[var(--font-body)] text-xs text-text-muted text-center mt-4">
              🔒 Tus datos están protegidos (Ley 1581 de 2012).
            </p>
          </div>
        </div>
      </section>

      {/* 02 Servicios Explorer */}
      <ServiciosExplorer />

      {/* 02b ¿Por qué Asignar? */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-white">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="mb-10">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Nuestros diferenciales
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em]">
              ¿Por qué Asignar?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferenciadores.map((d) => (
              <div
                key={d.titulo}
                className="bg-surface-gray rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-5">
                  <span
                    className="material-symbols-outlined text-brand-blue text-2xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {d.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-2">
                  {d.titulo}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                  {d.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Proceso */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-surface">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="mb-12">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Cómo trabajamos
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em]">
              Un proceso claro, de la solicitud al primer día
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
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

      {/* 04b Clientes por sector */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-white">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Nuestros clientes
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em]">
              Las mejores experiencias del país
            </h2>
          </div>

          <div className="space-y-10">
            {sectoresClientes.map((sector) => (
              <div key={sector.nombre}>
                <div className="bg-surface-gray rounded-lg px-5 py-3 mb-4 inline-block">
                  <span className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                    {sector.nombre}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {Array.from({ length: Math.min(sector.cantidad, 7) }).map(
                    (_, i) => (
                      <div
                        key={i}
                        className="w-[72px] h-[72px] rounded-full bg-surface-gray border border-border"
                      />
                    )
                  )}
                  {sector.cantidad > 7 && (
                    <div className="w-[72px] h-[72px] rounded-full bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center">
                      <span className="font-[var(--font-ui)] text-xs font-bold text-brand-blue">
                        +{sector.cantidad - 7}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Cumplimiento */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-surface">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy + stats */}
            <div>
              <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
                Respaldo y cumplimiento
              </span>
              <h2 className="font-[var(--font-display)] text-3xl md:text-[34px] font-extrabold text-brand-navy tracking-[-0.02em] leading-tight mb-4">
                Respaldo que protege tu operación
              </h2>
              <p className="font-[var(--font-body)] text-base text-text-secondary leading-relaxed mb-10">
                Operamos con licencia del Ministerio de Trabajo y todos los
                respaldos de ley. El riesgo laboral y administrativo queda
                cubierto para que tu equipo se concentre en operar.
              </p>
              <div className="flex gap-10 flex-wrap">
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy">
                    +20 años
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-muted mt-1">
                    de operación
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-blue">
                    7 sedes
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-muted mt-1">
                    cobertura nacional
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-blue">
                    +5.000
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-text-muted mt-1">
                    colaboradores en misión
                  </p>
                </div>
              </div>
            </div>

            {/* Right — proof cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cumplimientoCards.map((c) => (
                <div
                  key={c.titulo}
                  className="bg-white rounded-xl border border-border p-5 card-elevated"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-brand-blue"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                    {c.titulo}
                  </h4>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                    {c.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 CTA Marquee */}
      <CTAWithVerticalMarquee />
    </>
  );
}
