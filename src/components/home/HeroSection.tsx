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
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] bg-brand-light-blue/[0.05] rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-16 max-w-[1280px] mx-auto py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 bg-brand-blue/[0.06] rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span className="font-[var(--font-ui)] text-xs font-semibold text-brand-blue tracking-wide uppercase">
                +20 años conectando talento
              </span>
            </div>

            <h1 className="font-[var(--font-display)] text-[40px] sm:text-[56px] md:text-[64px] lg:text-[68px] font-bold text-brand-navy leading-[1.05] tracking-[-0.03em]">
              Creemos en ti
              <br />
              y en tu{" "}
              <span key={index} className="word-swap text-brand-blue">
                {words[index]}
              </span>
            </h1>

            <p className="font-[var(--font-body)] text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mt-6 md:mt-8">
              Conectamos el mejor talento humano con las empresas más destacadas
              de Colombia. Tu próximo empleo o la solución de personal que tu
              operación necesita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <Link
                href="/vacantes"
                className="group inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.35)] hover:shadow-[0_8px_24px_rgba(0,122,254,0.3)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all"
                style={{
                  transitionDuration: "var(--duration-base)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                Ver Vacantes
                <span
                  className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue border-2 border-brand-blue/25 font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full hover:border-brand-blue hover:bg-brand-blue/[0.04] transition-all"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Soluciones Empresariales
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-14 pt-8 border-t border-border/40">
              {[
                { label: "Licencia MinTrabajo", icon: "verified" },
                { label: "7+ sedes en Colombia", icon: "location_on" },
                { label: "+500 empresas cliente", icon: "handshake" },
              ].map((signal) => (
                <div key={signal.label} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-brand-blue/50 text-lg"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {signal.icon}
                  </span>
                  <span className="font-[var(--font-ui)] text-sm text-text-muted font-medium">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[4/5] w-full">
              <div
                className="absolute inset-0 rounded-[2rem] bg-cover bg-center shadow-[0_30px_60px_-20px_rgba(0,122,254,0.35)]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80')",
                }}
                role="img"
                aria-label="Equipo de trabajo conectado por Asignar SAS"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-brand-deep-blue/45 via-transparent to-transparent" />
              </div>

              {/* Floating award card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 card-elevated max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/[0.1] flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-brand-blue text-2xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      workspace_premium
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-bold text-brand-navy leading-tight">
                      Premio a la Excelencia
                    </p>
                    <p className="font-[var(--font-ui)] text-xs text-text-muted">
                      Business Management Awards 2023
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-5 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 card-elevated">
                <p className="font-[var(--font-display)] text-2xl font-extrabold text-brand-blue leading-none">
                  +5 mil
                </p>
                <p className="font-[var(--font-ui)] text-xs text-text-muted mt-1">
                  colaboradores en misión
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
