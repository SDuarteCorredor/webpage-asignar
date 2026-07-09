"use client";

import { Fragment, useEffect, useState } from "react";

type IconProps = { className?: string };
const ChevronLeft = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const testimonios = [
  {
    cita: "La eficiencia de Asignar en proveernos personal calificado ha sido fundamental para mantener la calidad de nuestro servicio.",
    nombre: "Carlos Martínez",
    cargo: "Director de RRHH",
    empresa: "Hotel 5 Estrellas, Medellín",
    iniciales: "CM",
    slug: "carlos",
  },
  {
    cita: "Encontré trabajo rápido gracias a Asignar. El acompañamiento fue humano, transparente y muy profesional. Me sentí respaldada en cada paso.",
    nombre: "Laura Restrepo",
    cargo: "Mesera de Servicio",
    empresa: "Restaurante Premium, Bogotá",
    iniciales: "LR",
    slug: "laura",
  },
  {
    cita: "Delegar la gestión de personal temporal a Asignar nos permitió enfocarnos en nuestra operación con total tranquilidad.",
    nombre: "Andrés Gómez",
    cargo: "Gerente de Operaciones",
    empresa: "Cadena Hotelera, Cartagena",
    iniciales: "AG",
    slug: "andres",
  },
];

/* Reel columns — plain glass cells (sin iniciales).
   Each column is rendered twice inside its track for a seamless loop. */
const columnas = [
  { dir: "reel-down", count: 6 },
  { dir: "reel-up", count: 6 },
  { dir: "reel-down", count: 6 },
];

function ReelCell() {
  return (
    <div className="h-[104px] w-[104px] shrink-0 rounded-2xl border border-border bg-gradient-to-br from-surface to-white shadow-sm" />
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonios[index];

  const next = () => setIndex((i) => (i + 1) % testimonios.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonios.length) % testimonios.length);

  // Auto-advance; resets whenever index changes (incl. manual nav)
  useEffect(() => {
    const id = setTimeout(next, 6500);
    return () => clearTimeout(id);
  }, [index]);

  const words = t.cita.split(" ");

  return (
    <section className="overflow-hidden bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:px-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT — scroll reel */}
        <div className="reel-stage relative hidden h-[440px] items-center justify-center lg:flex">
          {/* fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-surface to-transparent" />

          {/* three counter-rotating columns */}
          <div className="flex h-full items-start gap-3 overflow-hidden">
            {columnas.map((col, ci) => (
              <div key={ci} className="h-full overflow-hidden">
                <div className={`flex flex-col gap-3 ${col.dir}`}>
                  {Array.from({ length: col.count * 2 }).map((_, i) => (
                    <ReelCell key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* featured focus card — current author */}
          <div
            className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-deep-blue shadow-[0_24px_50px_-12px_rgba(0,122,254,0.5)] ring-4 ring-surface"
            aria-hidden="true"
          >
            {/* photo layer — /testimonios/<slug>.jpg */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/testimonios/${t.slug}.jpg')` }}
            />
          </div>
        </div>

        {/* RIGHT — quote + author + nav */}
        <div className="scroll-reveal text-center lg:text-left">
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-brand-navy md:text-4xl">
            Lo que dicen de nosotros
          </h2>

          {/* opening quote mark */}
          <span
            className="mt-6 block font-[var(--font-display)] text-6xl font-extrabold leading-none text-brand-navy/10"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* rotating quote — per-word rise, remounts on index change */}
          <blockquote
            key={index}
            className="mt-1 max-w-xl mx-auto font-[var(--font-body)] text-xl font-medium leading-relaxed tracking-[-0.01em] text-brand-navy md:text-2xl lg:mx-0"
          >
            {words.map((w, i) => (
              <Fragment key={i}>
                <span
                  className="testi-word"
                  style={{ animationDelay: `${i * 22}ms` }}
                >
                  {w}
                </span>{" "}
              </Fragment>
            ))}
          </blockquote>

          <div key={`meta-${index}`} className="mt-7">
            <p className="testi-word font-[var(--font-body)] text-base font-medium text-brand-navy" style={{ animationDelay: "80ms" }}>
              {t.nombre}
            </p>
            <p className="testi-word mt-0.5 font-[var(--font-body)] text-sm text-text-muted" style={{ animationDelay: "140ms" }}>
              {t.cargo} · {t.empresa}
            </p>
          </div>

          {/* nav */}
          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy/50 transition-all hover:border-brand-blue hover:text-brand-blue"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy/50 transition-all hover:border-brand-blue hover:text-brand-blue"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* progress dots */}
            <div className="ml-3 flex items-center gap-2">
              {testimonios.map((item, i) => (
                <button
                  key={item.slug}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver testimonio de ${item.nombre}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-brand-blue"
                      : "w-2 bg-brand-navy/20 hover:bg-brand-navy/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
