const clients = [
  { name: "Hotel Dann Carlton", icon: "hotel" },
  { name: "Marriott", icon: "bed" },
  { name: "Hilton", icon: "apartment" },
  { name: "Crepes & Waffles", icon: "restaurant" },
  { name: "Grupo Éxito", icon: "storefront" },
  { name: "Frisby", icon: "fastfood" },
  { name: "Sodexo", icon: "food_bank" },
  { name: "Compass Group", icon: "corporate_fare" },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-surface-gray border-b border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <p className="text-center font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 text-text-secondary/50 grayscale hover:grayscale-0 hover:text-brand-navy transition-all duration-500 cursor-default"
            >
              <span className="material-symbols-outlined text-2xl">
                {client.icon}
              </span>
              <span className="font-[var(--font-display)] text-sm font-bold hidden sm:inline">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
