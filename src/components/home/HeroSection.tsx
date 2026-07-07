"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Palabras que rotan en el titular del Hero
const words = ["talento", "futuro", "equipo", "camino"];

/* Inline SVG icons — bulletproof (no icon-font dependency) */
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Trophy = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
    <section className="relative w-full overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-brand-navy"
        style={{ backgroundImage: "url('/home/hero.jpg')" }}
      />
      {/* Legibility + brand-grade overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-brand-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-brand-navy/20" />

      <div className="relative mx-auto flex min-h-[600px] max-w-[1280px] flex-col justify-center px-5 py-24 md:min-h-[680px] md:px-16 lg:min-h-[760px]">
        <div className="max-w-2xl">
          {/* badge */}
          <div className="rise mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-brand-navy/40 px-4 py-2 backdrop-blur-md" style={{ animationDelay: "0s" }}>
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
              +20 años conectando talento
            </span>
          </div>

          {/* heading */}
          <h1
            className="rise font-[var(--font-display)] text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white"
            style={{ animationDelay: "0.08s" }}
          >
            Creemos en ti
            <br />
            y en tu{" "}
            <span
              key={index}
              className="word-swap bg-gradient-to-r from-brand-light-blue to-brand-blue bg-clip-text text-transparent"
            >
              {words[index]}
            </span>
          </h1>

          {/* description */}
          <p
            className="rise mt-6 max-w-lg font-[var(--font-body)] text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "0.16s" }}
          >
            Conectamos el mejor talento humano con las empresas más destacadas
            de Colombia. Tu próximo empleo o la solución de personal que tu
            operación necesita.
          </p>

          {/* CTAs */}
          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/vacantes"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(0,122,254,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep-blue active:translate-y-0"
              style={{ transitionDuration: "var(--duration-base)", transitionTimingFunction: "var(--ease-spring)" }}
            >
              Ver vacantes
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/soluciones"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              Soluciones Empresariales
            </Link>
          </div>
        </div>

        {/* floating glass cards (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* +5 mil */}
          <div className="float-card absolute right-16 top-28 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-md">
            <p className="font-[var(--font-display)] text-3xl font-extrabold leading-none text-white">+5 mil</p>
            <p className="mt-1.5 font-[var(--font-ui)] text-xs text-white/80">colaboradores en misión</p>
          </div>

          {/* Premio a la Excelencia */}
          <div className="float-card absolute right-24 top-1/2 flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-md" style={{ animationDelay: "1s" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <p className="font-[var(--font-ui)] text-sm font-semibold text-white">Premio a la Excelencia</p>
              <p className="font-[var(--font-ui)] text-xs text-white/70">Business Management Awards 2023</p>
            </div>
          </div>

          {/* +500 */}
          <div className="float-card absolute bottom-24 right-20 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-md" style={{ animationDelay: "2s" }}>
            <p className="font-[var(--font-display)] text-3xl font-extrabold leading-none text-white">+500</p>
            <p className="mt-1.5 font-[var(--font-ui)] text-xs text-white/80">empresas cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
