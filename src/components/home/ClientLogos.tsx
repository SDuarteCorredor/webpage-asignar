import { clientesTodos } from "./clientes";

export default function ClientLogos() {
  const doubled = [...clientesTodos, ...clientesTodos];

  return (
    <section className="py-12 bg-surface overflow-hidden">
      <p className="text-center font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-8">
        Empresas que confían en nosotros
      </p>
      <div
        className="marquee-track flex gap-4 items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 80s linear infinite" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 h-16 w-28 rounded-xl bg-white card-elevated flex items-center justify-center p-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Cliente de Asignar"
              loading="lazy"
              className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
