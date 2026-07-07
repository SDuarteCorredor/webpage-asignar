// Logos de clientes reales extraídos del Figma (tarjetas de marca a todo color).
// Por ahora solo 5 montados; se irán agregando los demás a este arreglo.
const logos = [
  { src: "/clientes-brand/logo-01.png", alt: "NH Hoteles" },
  { src: "/clientes-brand/logo-02.png", alt: "Marriott" },
  { src: "/clientes-brand/logo-03.png", alt: "Estelar" },
  { src: "/clientes-brand/logo-04.png", alt: "Grand Hyatt" },
  { src: "/clientes-brand/logo-05.png", alt: "Tequendama Hoteles" },
];

export default function ClientLogos() {
  // Cada mitad del track se repite para llenar pantallas anchas; el keyframe
  // `marquee` (0 → -50%) recorre exactamente una mitad, así el loop es continuo.
  const half = [...logos, ...logos];
  const track = [...half, ...half];

  return (
    <section className="py-14 md:py-20 bg-surface overflow-hidden">
      <p className="text-center font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-10">
        Empresas que confían en nosotros
      </p>
      <div
        className="marquee-track flex gap-6 md:gap-8 items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center justify-center h-[104px] md:h-[128px] lg:h-[150px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
