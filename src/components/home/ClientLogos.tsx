const clients = [
  { name: "NH Hotels", icon: "hotel" },
  { name: "Marriott", icon: "bed" },
  { name: "Estelar", icon: "apartment" },
  { name: "Hilton", icon: "hotel" },
  { name: "Sheraton", icon: "apartment" },
  { name: "Movich", icon: "bed" },
  { name: "Four Seasons", icon: "hotel" },
  { name: "W Hotels", icon: "apartment" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 bg-surface overflow-hidden">
      <p className="text-center font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-8 scroll-reveal">
        Empresas que confían en nosotros
      </p>
      <div
        className="marquee-track flex gap-12 items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center gap-2.5 text-text-muted/40 hover:text-brand-navy transition-colors shrink-0 cursor-default"
            style={{ transitionDuration: "var(--duration-slow)" }}
          >
            <span className="material-symbols-outlined text-2xl">
              {client.icon}
            </span>
            <span className="font-[var(--font-display)] text-sm font-bold whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
