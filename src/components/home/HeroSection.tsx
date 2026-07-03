"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const words = ["talento", "futuro", "equipo", "camino"];

/* Inline SVG icons — bulletproof (no icon-font dependency) */
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Shield = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Pin = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const Handshake = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 8h4l3 3 2-2 2 2 4-3h3M7 11v6M17 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Spark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" />
  </svg>
);

const trust = [
  { label: "Licencia MinTrabajo", Icon: Shield },
  { label: "7+ sedes en Colombia", Icon: Pin },
  { label: "+500 empresas cliente", Icon: Handshake },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-surface pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] right-[20%] h-[560px] w-[560px] rounded-full bg-brand-light-blue/[0.08] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left: editorial copy */}
          <div className="lg:col-span-5">
            <div className="rise mb-7 inline-flex items-center gap-2.5" style={{ animationDelay: "0s" }}>
              <span className="h-px w-9 bg-brand-blue" />
              <span className="font-[var(--font-ui)] text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Más de 20 años conectando talento
              </span>
            </div>

            <h1
              className="rise font-[var(--font-display)] font-extrabold text-brand-navy leading-[0.92] tracking-[-0.035em] text-[clamp(2.75rem,5.5vw,4.75rem)]"
              style={{ animationDelay: "0.08s" }}
            >
              Creemos en ti
              <br />
              y en tu{" "}
              <span
                key={index}
                className="word-swap bg-gradient-to-r from-brand-blue to-brand-light-blue bg-clip-text text-transparent italic"
              >
                {words[index]}
              </span>
            </h1>

            <p
              className="rise mt-7 max-w-md font-[var(--font-body)] text-lg leading-relaxed text-text-secondary"
              style={{ animationDelay: "0.16s" }}
            >
              Conectamos el mejor talento humano con las empresas líderes de
              Colombia. Tu próximo empleo o la solución de personal que tu
              operación necesita.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/vacantes"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(0,122,254,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(0,122,254,0.6)] active:translate-y-0 active:scale-[0.98]"
                style={{ transitionDuration: "var(--duration-base)", transitionTimingFunction: "var(--ease-spring)" }}
              >
                Ver vacantes
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-brand-navy transition-all hover:-translate-y-0.5 hover:border-brand-navy/30"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Soy empresa
              </Link>
            </div>

            <div
              className="rise mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border/60 pt-7"
              style={{ animationDelay: "0.32s" }}
            >
              {trust.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-[18px] w-[18px] text-brand-blue" />
                  <span className="font-[var(--font-ui)] text-sm font-medium text-text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: impactful image block + floating cards */}
          <div className="rise lg:col-span-7" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* IMAGE BLOCK — reemplaza /hero.jpg (ver prompt de GPT). Fallback: degradado de marca. */}
              <div
                className="relative aspect-[16/12] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-light-blue via-brand-blue to-brand-deep-blue bg-cover bg-center shadow-[0_50px_100px_-40px_rgba(0,18,51,0.55)] md:aspect-[16/11] md:rounded-[2.5rem]"
                style={{ backgroundImage: "url('/hero.jpg')" }}
                role="img"
                aria-label="Equipo de talento de Asignar en operación"
              >
                {/* brand grade overlay para cohesión de color */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-brand-blue/5 mix-blend-multiply" />

                {/* top badge */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-md">
                  <Spark className="h-3.5 w-3.5 text-brand-blue" />
                  <span className="font-[var(--font-ui)] text-xs font-semibold text-brand-navy">
                    Talento verificado
                  </span>
                </div>

                {/* sectors chip */}
                <div className="absolute bottom-5 left-5 rounded-full bg-brand-navy/70 px-4 py-2 backdrop-blur-md">
                  <span className="font-[var(--font-ui)] text-xs font-medium text-white/90">
                    Hotelería · Restaurantes · Logística · Industria
                  </span>
                </div>
              </div>

              {/* floating glass card — stat */}
              <div className="float-card absolute -right-3 top-8 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_20px_44px_-18px_rgba(0,18,51,0.35)] backdrop-blur-md md:-right-5">
                <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-blue">+5 mil</p>
                <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">colaboradores en misión</p>
              </div>

              {/* floating glass card — speed */}
              <div
                className="float-card absolute -bottom-4 right-10 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_20px_44px_-18px_rgba(0,18,51,0.35)] backdrop-blur-md"
                style={{ animationDelay: "1.4s" }}
              >
                <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-navy">48 h</p>
                <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">para tener tu equipo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
