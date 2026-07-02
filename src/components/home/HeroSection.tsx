"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const words = ["talento", "futuro", "equipo", "camino"];

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
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-surface">
      {/* soft ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] -left-[5%] w-[720px] h-[720px] bg-brand-blue/[0.05] rounded-full blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[0%] w-[560px] h-[560px] bg-brand-light-blue/[0.06] rounded-full blur-[110px]" />
        {/* faint editorial grid line */}
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border/40 lg:block" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-28 md:px-16 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: editorial copy */}
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2.5">
              <span className="h-px w-9 bg-brand-blue" />
              <span className="font-[var(--font-ui)] text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Más de 20 años conectando talento
              </span>
            </div>

            <h1 className="font-[var(--font-display)] font-extrabold text-brand-navy leading-[0.94] tracking-[-0.035em] text-[clamp(3rem,8vw,5.75rem)]">
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

            <p className="mt-7 max-w-xl font-[var(--font-body)] text-lg leading-relaxed text-text-secondary md:text-xl">
              Conectamos el mejor talento humano con las empresas líderes de
              Colombia. Tu próximo empleo o la solución de personal que tu
              operación necesita.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/vacantes"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(0,122,254,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(0,122,254,0.55)] active:translate-y-0 active:scale-[0.98]"
                style={{
                  transitionDuration: "var(--duration-base)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                Ver vacantes
                <span
                  className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-8 py-4 font-[var(--font-ui)] text-sm font-semibold text-brand-navy transition-all hover:border-brand-navy/30 hover:bg-white"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Soy empresa
              </Link>
            </div>

            {/* trust row */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/50 pt-7">
              {[
                { label: "Licencia MinTrabajo", icon: "verified" },
                { label: "7+ sedes en Colombia", icon: "location_on" },
                { label: "+500 empresas cliente", icon: "handshake" },
              ].map((signal) => (
                <div key={signal.label} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-lg text-brand-blue"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {signal.icon}
                  </span>
                  <span className="font-[var(--font-ui)] text-sm font-medium text-text-muted">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo + floating glass cards */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/5] w-full">
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-cover bg-[center_top] shadow-[0_40px_80px_-30px_rgba(0,18,51,0.45)] ring-1 ring-brand-navy/5"
                style={{ backgroundImage: "url('/hero-asignar.jpg')" }}
                role="img"
                aria-label="Equipo de trabajo conectado por Asignar SAS"
              >
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-brand-navy/50 via-brand-navy/5 to-transparent" />
                {/* gold micro-accent */}
                <span className="absolute right-6 top-6 h-2 w-2 rounded-full bg-brand-gold" />
              </div>

              {/* Floating stat card — glass */}
              <div className="glass-panel absolute -right-5 -top-5 rounded-2xl border border-white/60 px-5 py-4 shadow-[0_20px_40px_-16px_rgba(0,18,51,0.25)]">
                <p className="font-[var(--font-display)] text-2xl font-extrabold leading-none text-brand-blue">
                  +5 mil
                </p>
                <p className="mt-1 font-[var(--font-ui)] text-xs text-text-muted">
                  colaboradores en misión
                </p>
              </div>

              {/* Floating award card — glass */}
              <div className="glass-panel absolute -bottom-6 -left-6 max-w-[260px] rounded-2xl border border-white/60 p-5 shadow-[0_20px_40px_-16px_rgba(0,18,51,0.25)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <span
                      className="material-symbols-outlined text-2xl text-brand-blue"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      workspace_premium
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-bold leading-tight text-brand-navy">
                      Premio a la Excelencia
                    </p>
                    <p className="font-[var(--font-ui)] text-xs text-text-muted">
                      Business Management Awards 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
