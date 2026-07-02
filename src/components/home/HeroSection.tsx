"use client";

import { useState, useEffect, useRef } from "react";
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

const trust = [
  { label: "Licencia MinTrabajo", Icon: Shield },
  { label: "7+ sedes en Colombia", Icon: Pin },
  { label: "+500 empresas cliente", Icon: Handshake },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  // Mouse parallax on the prism device (depth-based, ref-driven, no re-render)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        layersRef.current.forEach((el) => {
          if (!el) return;
          const d = Number(el.dataset.depth || 0);
          el.style.transform = `translate3d(${px * d}px, ${py * d}px, 0)`;
        });
      });
    };
    const reset = () => {
      layersRef.current.forEach((el) => {
        if (el) el.style.transform = "translate3d(0,0,0)";
      });
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", reset);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  const setLayer = (i: number) => (el: HTMLDivElement | null) => {
    layersRef.current[i] = el;
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-surface">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] left-[45%] h-[620px] w-[620px] rounded-full bg-brand-light-blue/[0.10] blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-5%] h-[560px] w-[560px] rounded-full bg-brand-blue/[0.08] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-28 md:px-16 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-6">
          {/* Left: editorial copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rise mb-8 inline-flex items-center gap-2.5" style={{ animationDelay: "0s" }}>
              <span className="h-px w-9 bg-brand-blue" />
              <span className="font-[var(--font-ui)] text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Más de 20 años conectando talento
              </span>
            </div>

            <h1
              className="rise font-[var(--font-display)] font-extrabold text-brand-navy leading-[0.92] tracking-[-0.035em] text-[clamp(3rem,7.5vw,6rem)]"
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
              className="rise mt-8 max-w-lg font-[var(--font-body)] text-lg leading-relaxed text-text-secondary md:text-xl"
              style={{ animationDelay: "0.16s" }}
            >
              Conectamos el mejor talento humano con las empresas líderes de
              Colombia. Tu próximo empleo o la solución de personal que tu
              operación necesita.
            </p>

            <div
              className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/vacantes"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(0,122,254,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(0,122,254,0.6)] active:translate-y-0 active:scale-[0.98]"
                style={{
                  transitionDuration: "var(--duration-base)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                Ver vacantes
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-brand-navy transition-all hover:border-brand-navy/30 hover:-translate-y-0.5"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Soy empresa
              </Link>
            </div>

            <div
              className="rise mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/60 pt-7"
              style={{ animationDelay: "0.32s" }}
            >
              {trust.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-[18px] w-[18px] text-brand-blue" />
                  <span className="font-[var(--font-ui)] text-sm font-medium text-text-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: brand prism device (parallax) */}
          <div className="hidden lg:col-span-6 lg:block xl:col-span-5">
            <div
              ref={stageRef}
              className="rise relative mx-auto aspect-square w-full max-w-[480px]"
              style={{ animationDelay: "0.2s" }}
            >
              {/* spectrum blobs (deepest) */}
              <div ref={setLayer(0)} data-depth="28" className="absolute inset-0 will-change-transform">
                <div className="absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-brand-light-blue/50 blur-[60px]" />
                <div className="absolute right-[6%] top-[24%] h-52 w-52 rounded-full bg-brand-blue/50 blur-[64px]" />
                <div className="absolute bottom-[6%] left-[28%] h-56 w-56 rounded-full bg-[#5B7CFA]/35 blur-[70px]" />
              </div>

              {/* back glass panel */}
              <div ref={setLayer(1)} data-depth="10" className="absolute inset-8 will-change-transform">
                <div className="glass-panel h-full w-full rotate-6 rounded-[2.5rem] border border-white/70 shadow-[0_30px_70px_-30px_rgba(0,18,51,0.35)]" />
              </div>

              {/* main prism panel */}
              <div ref={setLayer(2)} data-depth="6" className="absolute inset-2 will-change-transform">
                <div className="relative h-full w-full -rotate-3 overflow-hidden rounded-[2.5rem] shadow-[0_40px_90px_-30px_rgba(0,122,254,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue via-brand-blue to-brand-deep-blue" />
                  {/* refraction sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 mix-blend-overlay" />
                  <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-white/20 blur-2xl" />
                  <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
                </div>
              </div>

              {/* floating data chips (closest) */}
              <div ref={setLayer(3)} data-depth="20" className="absolute -right-4 top-6 will-change-transform">
                <div className="float-card glass-panel rounded-2xl border border-white/70 px-5 py-4 shadow-[0_20px_44px_-18px_rgba(0,18,51,0.3)] transition-transform hover:scale-[1.04]">
                  <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-blue">+5 mil</p>
                  <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">colaboradores en misión</p>
                </div>
              </div>
              <div ref={setLayer(4)} data-depth="16" className="absolute -bottom-3 -left-4 will-change-transform">
                <div
                  className="float-card glass-panel rounded-2xl border border-white/70 px-5 py-4 shadow-[0_20px_44px_-18px_rgba(0,18,51,0.3)] transition-transform hover:scale-[1.04]"
                  style={{ animationDelay: "1.4s" }}
                >
                  <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-navy">48 h</p>
                  <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">para tener tu equipo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
