import type { Metadata } from "next";
import Link from "next/link";
import ServiciosExplorer from "@/components/soluciones/ServiciosExplorer";
import { PropuestaProvider } from "@/components/servicios/PropuestaProvider";
import PropuestaForm from "@/components/servicios/PropuestaForm";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { altDeLogo } from "@/lib/clientes";
import ResumenClave from "@/components/servicios/ResumenClave";
import ComparativaServicios from "@/components/servicios/ComparativaServicios";

export const metadata: Metadata = {
  alternates: { canonical: "/servicios" },
  title: "Servicios Empresariales",
  description:
    "Servicios temporales, outsourcing y selección de personal para hotelería, restaurantes, logística e industria en Colombia.",
};

const diferenciadores = [
  {
    titulo: "Cumplimos la normatividad legal",
    descripcion:
      "Asignar cumple con todos los lineamientos de ley para personal temporal eventual y tiempo completo.",
    icon: "verified_user",
    img: "/images/servicios/diferenciador-4.webp",
  },
  {
    titulo: "Cobertura a nivel nacional",
    descripcion:
      "Nuestras sedes: Medellín, Rionegro, Bogotá, Cali, Barranquilla, Santa Marta, Cartagena, Pereira, Manizales.",
    icon: "location_on",
    img: "/images/servicios/diferenciador-2.webp",
  },
  {
    titulo: "Especialistas en sector HORECA",
    descripcion:
      "Hoteles de alto perfil, clubes, cadenas de restaurantes y centros de convenciones.",
    icon: "apartment",
    img: "/images/servicios/diferenciador-3.webp",
  },
  {
    titulo: "Software propio",
    descripcion:
      "QR en dispositivos electrónicos para agilizar nómina y requisiciones en tiempo real.",
    icon: "desktop_windows",
    img: "/images/servicios/diferenciador-1.webp",
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
  {
    // 34 logos → en desktop (8/fila) la última fila queda con 2, sin huérfano
    nombre: "Sector Hotelero",
    logos: [
      "/clientes-brand/nh-hotels-y-resorts.webp", "/clientes-brand/marriott.webp",
      "/clientes-brand/estelar.webp", "/clientes-brand/grand-hyatt.webp",
      "/clientes-brand/tequendama-hoteles.webp", "/clientes-brand/atton-hoteles.webp",
      "/clientes-brand/hilton-bogota.webp", "/clientes-brand/dann-carlton-hotel-y-spa.webp",
      "/clientes-brand/hoteles-dann.webp", "/clientes-brand/exe-hotels.webp",
      "/clientes-brand/ibis-hotels.webp", "/clientes-brand/intercontinental-movich-medellin.webp",
      "/clientes-brand/hoteles-spiwak.webp", "/clientes-brand/movich-hotels.webp",
      "/clientes-brand/jw-marriott.webp", "/clientes-brand/habitel-hotels.webp",
      "/clientes-brand/hotel-caribe-cartagena.webp", "/clientes-brand/w-hotels.webp",
      "/clientes-brand/diez-hotel-categoria-colombia.webp", "/clientes-brand/hotel-spirito-by-spiwak.webp",
      "/clientes-brand/lagoon-hotel-llanogrande.webp", "/clientes-brand/four-seasons-hotels-and-resorts.webp",
      "/clientes-brand/hotel-capital-ghl.webp", "/clientes-brand/fairfield-by-marriott-medellin.webp",
      "/clientes-brand/nh-collection.webp", "/clientes-brand/sonesta-hotels-and-resorts.webp",
      "/clientes-brand/irotama-resort.webp", "/clientes-brand/accor.webp",
      "/clientes-brand/hotel-nutibara-medellin.webp", "/clientes-brand/the-charlee-hotels.webp",
      "/clientes-brand/the-brown-at-luxe.webp", "/clientes-brand/crowne-plaza-barranquilla.webp",
      "/clientes-brand/tequendama-hotel-medellin.webp", "/clientes-brand/city-express-hoteles.webp",
    ],
  },
  {
    // 7 logos → una sola fila
    nombre: "Centros de eventos",
    logos: [
      "/clientes-brand/colsubsidio.webp", "/clientes-brand/corferias.webp",
      "/clientes-brand/agora-bogota-centro-de-convenciones.webp", "/clientes-brand/centro-de-eventos-valle-del-pacifico.webp",
      "/clientes-brand/centro-de-convenciones-cartagena-de-indias.webp", "/clientes-brand/macarena-centro-de-negocios-y-eventos.webp",
      "/clientes-brand/d-groupe.webp",
    ],
  },
  {
    // 5 logos → una sola fila
    nombre: "Clubes",
    logos: [
      "/clientes-brand/club-el-rodeo.webp", "/clientes-brand/country-club-ejecutivos.webp",
      "/clientes-brand/club-campestre-pereira.webp", "/clientes-brand/club-campestre-de-cali.webp",
      "/clientes-brand/club-campestre-medellin-llanogrande.webp",
    ],
  },
  {
    // 7 logos → una sola fila
    nombre: "Restaurantes",
    logos: [
      "/clientes-brand/casal-casa-alimenticia.webp", "/clientes-brand/la-kasta-grill-y-wine.webp",
      "/clientes-brand/mangiare-pizzeria-enoteca.webp", "/clientes-brand/la-causa-marisqueria.webp",
      "/clientes-brand/romero-cocina-artesanal.webp", "/clientes-brand/izumi-asian-fusion.webp",
      "/clientes-brand/casa-soller-cocina-mediterranea.webp",
    ],
  },
  {
    // 3 logos → una sola fila
    nombre: "Sector Inmobiliario",
    logos: [
      "/clientes-brand/jalo.webp", "/clientes-brand/hashtag-98-hotel.webp",
      "/clientes-brand/go-living-y-suites.webp",
    ],
  },
  {
    // 6 logos → una sola fila
    nombre: "Industria, Producción, Retail y Servicios",
    logos: [
      "/clientes-brand/medicox.webp", "/clientes-brand/superpack.webp",
      "/clientes-brand/fruta-fresca-origin.webp", "/clientes-brand/gesproyect.webp",
      "/clientes-brand/rcd-project.webp", "/clientes-brand/industrias-mecanicas-dayo.webp",
    ],
  },
];

export default function SolucionesPage() {
  return (
    // El provider comparte el servicio elegido entre el explorador y el formulario.
    <PropuestaProvider>
      {/* 01 Hero */}
      <section className="bg-surface py-16 md:py-[72px]">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
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
            <div className="flex flex-wrap gap-3.5 mb-6 justify-center lg:justify-start">
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
            <div className="flex flex-wrap items-center gap-2.5 justify-center lg:justify-start">
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
          <PropuestaForm />
        </div>
      </section>

      {/* 01b Resumen extraíble — justo después del H1 */}
      <ResumenClave />

      {/* 02 Servicios Explorer */}
      <ServiciosExplorer />

      {/* 02b Comparativa de servicios */}
      <ComparativaServicios />

      {/* 02b ¿Por qué Asignar? — photo cards */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-white">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="mb-10 text-center lg:text-left">
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
                className="group h-[280px] rounded-[20px]"
              >
                <SpotlightCard className="h-full w-full overflow-hidden rounded-[20px] shadow-[0_6px_24px_rgba(0,18,51,0.1)]">
                  {/* photo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url('${d.img}')` }}
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-[5] h-[75%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                  {/* icon badge */}
                  <div className="absolute top-5 left-5 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span
                      className="material-symbols-outlined text-brand-blue text-xl"
                      style={{
                        fontVariationSettings: '"FILL" 1, "wght" 600',
                      }}
                    >
                      {d.icon}
                    </span>
                  </div>

                  {/* text */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                    <h3 className="font-[var(--font-display)] text-xl font-extrabold text-white">
                      {d.titulo}
                    </h3>
                    <p className="mt-1.5 font-[var(--font-body)] text-[13px] text-white/80 leading-relaxed">
                      {d.descripcion}
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Proceso */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-surface">
        <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
          <div className="mb-12 text-center lg:text-left">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Cómo trabajamos
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em]">
              Un proceso claro, de la solicitud al primer día
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue" />
            {/* Es una secuencia real (solicitud → primer día), por eso <ol> y
                no <div>: se lee y se extrae como los 7 pasos que es. */}
            <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 list-none">
              {procesoSteps.map((step, i) => (
                <li key={step.num} className="text-center group relative">
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
                </li>
              ))}
            </ol>
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

          <div className="space-y-12">
            {sectoresClientes.map((sector) => (
              <div key={sector.nombre}>
                <div className="bg-surface-gray rounded-lg px-5 py-3 mb-6 inline-block">
                  <span className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                    {sector.nombre}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {sector.logos.map((src, i) => (
                    <div
                      key={i}
                      className="shrink-0 w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={altDeLogo(src)}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                  ))}
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
                    9 sedes
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
                  {/* H3 y no H4: es subsección directa del H2 "Respaldo que
                      protege tu operación", sin nivel intermedio. */}
                  <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1">
                    {c.titulo}
                  </h3>
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
    </PropuestaProvider>
  );
}
