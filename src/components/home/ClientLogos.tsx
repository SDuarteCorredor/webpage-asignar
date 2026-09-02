import { LOGOS_CLIENTES } from "@/lib/clientes";

export default function ClientLogos() {
  const half = [...LOGOS_CLIENTES, ...LOGOS_CLIENTES];
  const track = [...half, ...half];

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <p className="text-center font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-10">
        Empresas que confian en nosotros
      </p>
      <div
        className="marquee-track flex gap-6 md:gap-8 items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 80s linear infinite" }}
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
