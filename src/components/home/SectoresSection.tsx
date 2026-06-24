const sectores = [
  {
    nombre: "Sector Hotelero",
    icon: "bed",
    descripcion: "Hoteles 4 y 5 estrellas en todo el país",
  },
  {
    nombre: "Restaurantes",
    icon: "restaurant",
    descripcion: "Cadenas y restaurantes de alta gama",
  },
  {
    nombre: "Sector Industrial",
    icon: "factory",
    descripcion: "Manufactura, producción y plantas",
  },
  {
    nombre: "Logística",
    icon: "local_shipping",
    descripcion: "Bodegas, centros de distribución y transporte",
  },
  {
    nombre: "Servicios Generales",
    icon: "cleaning_services",
    descripcion: "Aseo, mantenimiento y facility management",
  },
  {
    nombre: "Sector Inmobiliario",
    icon: "real_estate_agent",
    descripcion: "Constructoras y administración de propiedad",
  },
];

export default function SectoresSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-14 scroll-reveal">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Cobertura Sectorial
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-brand-navy tracking-[-0.02em]">
            Sectores que transformamos
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-xl mx-auto mt-3">
            Conectamos el talento adecuado con las industrias clave del país.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectores.map((sector, i) => (
            <div
              key={sector.nombre}
              className="scroll-reveal group relative bg-brand-gradient rounded-2xl p-6 overflow-hidden hover:brightness-110 transition-all cursor-default"
              style={{ transitionDuration: "var(--duration-slow)" }}
              data-delay={String(i * 80)}
            >
              <span
                className="material-symbols-outlined absolute -bottom-4 -right-4 text-[100px] text-white/[0.03] group-hover:text-white/[0.07] transition-colors"
                style={{ transitionDuration: "var(--duration-slow)" }}
              >
                {sector.icon}
              </span>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  <span
                    className="material-symbols-outlined text-white text-xl"
                    style={{ fontVariationSettings: '"FILL" 0' }}
                  >
                    {sector.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-white mb-1">
                  {sector.nombre}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-white/60">
                  {sector.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
