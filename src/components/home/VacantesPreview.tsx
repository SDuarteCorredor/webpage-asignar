import Link from "next/link";

const vacantes = [
  {
    id: 1,
    cargo: "Mesero/a de Servicio",
    ciudad: "Medellín",
    sector: "Hotelería",
    icon: "room_service",
    tipo: "Temporal",
  },
  {
    id: 2,
    cargo: "Auxiliar de Cocina",
    ciudad: "Bogotá",
    sector: "Restaurantes",
    icon: "restaurant",
    tipo: "Temporal",
  },
  {
    id: 3,
    cargo: "Recepcionista Hotel",
    ciudad: "Cartagena",
    sector: "Hotelería",
    icon: "concierge",
    tipo: "Temporal",
  },
  {
    id: 4,
    cargo: "Auxiliar de Bodega",
    ciudad: "Cali",
    sector: "Logística",
    icon: "warehouse",
    tipo: "Temporal",
  },
  {
    id: 5,
    cargo: "Camarero/a de Pisos",
    ciudad: "Barranquilla",
    sector: "Hotelería",
    icon: "bed",
    tipo: "Temporal",
  },
  {
    id: 6,
    cargo: "Auxiliar de Servicios Generales",
    ciudad: "Medellín",
    sector: "Servicios",
    icon: "cleaning_services",
    tipo: "Temporal",
  },
];

export default function VacantesPreview() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 scroll-reveal">
          <div>
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Oportunidades Activas
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
              Vacantes disponibles
            </h2>
            <p className="font-[var(--font-body)] text-base text-text-secondary mt-2 max-w-lg">
              Encuentra la oportunidad que se ajusta a tu perfil.
            </p>
          </div>
          <Link
            href="/vacantes"
            className="inline-flex items-center gap-1 font-[var(--font-ui)] text-sm font-semibold text-brand-blue hover:text-brand-deep-blue transition-colors group"
          >
            Ver todas las vacantes
            <span
              className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vacantes.map((v, i) => (
            <div
              key={v.id}
              className="scroll-reveal group bg-white rounded-2xl p-5 card-elevated hover:-translate-y-0.5"
              data-delay={String(i * 80)}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl bg-brand-blue/[0.08] flex items-center justify-center group-hover:bg-brand-blue transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  <span
                    className="material-symbols-outlined text-brand-blue group-hover:text-white transition-colors"
                    style={{
                      fontVariationSettings: '"FILL" 0',
                      transitionDuration: "var(--duration-base)",
                    }}
                  >
                    {v.icon}
                  </span>
                </div>
                <span className="font-[var(--font-ui)] text-[11px] font-medium text-brand-blue bg-brand-blue/[0.06] px-2.5 py-1 rounded-full">
                  {v.tipo}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1.5">
                {v.cargo}
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 font-[var(--font-ui)] text-xs text-text-muted">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  {v.ciudad}
                </span>
                <span className="flex items-center gap-1 font-[var(--font-ui)] text-xs text-text-muted">
                  <span className="material-symbols-outlined text-sm">
                    category
                  </span>
                  {v.sector}
                </span>
              </div>
              <a
                href="https://postulate.asignar.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1 font-[var(--font-ui)] text-sm font-semibold text-brand-blue bg-brand-blue/[0.06] py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Aplicar
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
