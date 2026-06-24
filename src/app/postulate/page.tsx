import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Postúlate",
  description:
    "Aplica a nuestras vacantes de empleo temporal en Colombia. Hotelería, restaurantes, logística y servicios generales.",
};

const pasos = [
  {
    num: "1",
    titulo: "Revisa las vacantes",
    descripcion:
      "Explora nuestras vacantes activas y encuentra la que se ajuste a tu perfil y ciudad.",
    icon: "search",
  },
  {
    num: "2",
    titulo: "Prepara tus documentos",
    descripcion:
      "Ten lista tu hoja de vida actualizada y los documentos requeridos.",
    icon: "description",
  },
  {
    num: "3",
    titulo: "Envía tu aplicación",
    descripcion:
      "Aplica a través de nuestra plataforma o envía tu hoja de vida por email.",
    icon: "send",
  },
  {
    num: "4",
    titulo: "Te contactamos",
    descripcion:
      "Nuestro equipo de selección revisará tu perfil y te contactará para el proceso.",
    icon: "call",
  },
];

const documentos = [
  "Hoja de vida actualizada (formato libre o Minerva)",
  "Copia de cédula de ciudadanía",
  "Certificados laborales (si los tienes)",
  "Certificados de estudio",
  "Número de teléfono y correo electrónico activo",
];

export default function PostulatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-deep-blue/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Encuentra trabajo rápido,
              <br className="hidden sm:block" />
              sin complicaciones
            </h1>
            <p className="font-[var(--font-body)] text-lg text-white/80 mb-8">
              Nosotros te acompañamos en todo el proceso. Desde la aplicación
              hasta tu primer día de trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/vacantes"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-surface-gray transition-colors"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  work
                </span>
                Ver vacantes activas
              </Link>
              <a
                href="https://postulate.asignar.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Aplicar en línea
                <span className="material-symbols-outlined text-base">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-brand-navy mb-3">
              ¿Cómo aplicar?
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary max-w-lg mx-auto">
              Es un proceso sencillo. Sigue estos pasos y nosotros nos
              encargamos del resto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pasos.map((paso) => (
              <div
                key={paso.num}
                className="group bg-surface-gray border border-border rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative"
              >
                <span className="absolute top-3 right-4 font-[var(--font-display)] text-5xl font-extrabold text-brand-blue/[0.06]">
                  {paso.num}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-brand-blue text-2xl group-hover:text-white transition-colors duration-300"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {paso.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-2">
                  {paso.titulo}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos + Email */}
      <section className="py-16 md:py-20 bg-surface-gray">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Documentos */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-brand-blue text-xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    folder_open
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-brand-navy">
                    Documentos requeridos
                  </h3>
                  <p className="font-[var(--font-ui)] text-xs text-text-muted">
                    Ten estos documentos listos para aplicar
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {documentos.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-blue text-base mt-0.5 flex-shrink-0">
                      check_circle
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-text-secondary">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicar por email */}
            <div className="bg-brand-gradient rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-brand-light-blue text-xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    mail
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-bold">
                    Aplica por email
                  </h3>
                  <p className="font-[var(--font-ui)] text-xs text-white/50">
                    Envía tu hoja de vida con estos datos
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "Nombre completo",
                  "Número de cédula",
                  "Ciudad donde te encuentras",
                  "Teléfono de contacto",
                  "Cargo al que aplicas",
                  "Disponibilidad para iniciar",
                  "Hoja de vida adjunta (PDF)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-gold text-sm">
                      arrow_right
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:marketingdigital@asignar.com.co?subject=Aplicación%20-%20[Tu%20nombre]%20-%20[Cargo]"
                className="inline-flex items-center gap-2 bg-white text-brand-navy font-[var(--font-ui)] text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-surface-gray transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                Enviar hoja de vida
              </a>
              <p className="font-[var(--font-ui)] text-xs text-white/40 mt-3">
                marketingdigital@asignar.com.co
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-16 text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-brand-navy mb-4">
            ¿Prefieres buscar en Computrabajo?
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary mb-8">
            También publicamos vacantes en Computrabajo. Busca
            &quot;Asignar&quot; para ver nuestras ofertas activas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/vacantes"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver vacantes en Asignar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
