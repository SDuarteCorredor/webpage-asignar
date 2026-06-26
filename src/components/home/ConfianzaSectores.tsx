import {
  clientesHotel,
  clientesEventos,
  clientesIndustria,
} from "./clientes";

const grupos = [
  { titulo: "Sector Hotelero", icon: "hotel", items: clientesHotel },
  {
    titulo: "Centros de eventos, clubes y restaurantes",
    icon: "restaurant",
    items: clientesEventos,
  },
  {
    titulo: "Inmobiliario, industria y servicios",
    icon: "apartment",
    items: clientesIndustria,
  },
];

export default function ConfianzaSectores() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Confían en nosotros
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Las mejores experiencias del país
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto mt-3">
            Respaldamos la operación de marcas líderes en hotelería, eventos,
            industria y más.
          </p>
        </div>

        <div className="space-y-10">
          {grupos.map((g, gi) => (
            <div key={g.titulo} className="scroll-reveal" data-delay={String(gi * 100)}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="material-symbols-outlined text-brand-blue text-xl">
                  {g.icon}
                </span>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy">
                  {g.titulo}
                </h3>
                <span className="flex-1 h-px bg-border ml-2" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {g.items.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-white card-elevated flex items-center justify-center p-3 hover:-translate-y-0.5 transition-transform"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt="Logo de cliente de Asignar"
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-[var(--font-ui)] text-[11px] text-text-muted/70 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
          El uso de las marcas es de carácter referencial. Los derechos de
          propiedad industrial pertenecen a sus respectivos titulares.
        </p>
      </div>
    </section>
  );
}
