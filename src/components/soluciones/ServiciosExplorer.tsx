"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Servicio {
  num: string;
  titulo: string;
  shortDesc: string;
  descripcion: string;
  checks: string[];
}

const servicios: Servicio[] = [
  {
    num: "01",
    titulo: "Servicios Temporales",
    shortDesc: "Personal calificado para picos, reemplazos y proyectos.",
    descripcion:
      "Suministro de personal temporal calificado para cubrir picos de demanda, reemplazos y proyectos específicos, con cumplimiento total de la Ley 50 de 1990.",
    checks: [
      "Personal operativo y administrativo",
      "Cobertura en menos de 48 horas",
      "Gestión completa de nómina y prestaciones",
      "Póliza de cumplimiento vigente",
    ],
  },
  {
    num: "02",
    titulo: "Outsourcing de Procesos",
    shortDesc: "Tercerizamos áreas operativas completas.",
    descripcion:
      "Tercerización integral de áreas operativas. Nos encargamos de todo para que tu equipo se concentre en lo estratégico.",
    checks: [
      "Gestión de áreas completas",
      "Supervisión permanente en sitio",
      "Indicadores y reportes mensuales",
      "Flexibilidad para escalar",
    ],
  },
  {
    num: "03",
    titulo: "Selección de Personal",
    shortDesc: "Headhunting y evaluación para vacantes directas.",
    descripcion:
      "Proceso riguroso de selección para posiciones directas en tu empresa. Encontramos el talento que se ajusta a tu cultura organizacional.",
    checks: [
      "Headhunting especializado",
      "Evaluación por competencias",
      "Verificación de antecedentes",
      "Garantía de permanencia",
    ],
  },
  {
    num: "04",
    titulo: "Gestión de SST",
    shortDesc: "Sistema de seguridad y salud en el trabajo.",
    descripcion:
      "Sistema de Gestión de Seguridad y Salud en el Trabajo. Cumplimiento normativo y cultura de prevención para tu personal en misión.",
    checks: [
      "Diseño e implementación del SG-SST",
      "Capacitaciones continuas",
      "Inspecciones periódicas en sitio",
      "Acompañamiento en auditorías",
    ],
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiciosExplorer() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!canHover || !panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * -8;
      const ry = (x - 0.5) * 8;
      panelRef.current.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.08), transparent 60%)`;
        glareRef.current.style.opacity = "1";
      }
    },
    [canHover]
  );

  const handleMouseLeave = useCallback(() => {
    if (!panelRef.current) return;
    panelRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg)";
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, []);

  const s = servicios[active];

  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
        <div className="mb-12">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
            Nuestros servicios
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em] mb-3">
            Cuatro formas de resolver tu operación
          </h2>
          <p className="font-[var(--font-body)] text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            Selecciona un servicio para ver el detalle. Cada uno se adapta al
            sector y al volumen de tu operación.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Service list */}
          <div className="flex flex-col gap-2.5 lg:w-[400px] shrink-0">
            {servicios.map((svc, i) => (
              <button
                key={svc.num}
                onClick={() => setActive(i)}
                className={`flex gap-3.5 items-center text-left px-5 py-[18px] rounded-2xl transition-all duration-300 ${
                  i === active
                    ? "bg-[#1E1E24] text-white"
                    : "bg-white border border-border hover:border-brand-blue/30"
                }`}
              >
                <span
                  className={`font-[var(--font-display)] text-[15px] font-extrabold shrink-0 ${
                    i === active ? "text-white" : "text-text-muted"
                  }`}
                >
                  {svc.num}
                </span>
                <div className="min-w-0">
                  <p
                    className={`font-[var(--font-display)] text-[17px] font-semibold ${
                      i === active ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {svc.titulo}
                  </p>
                  <p
                    className={`font-[var(--font-body)] text-[13px] mt-0.5 ${
                      i === active ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {svc.shortDesc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel (dark tilt card) */}
          <div
            ref={panelRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex-1 rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-white/[0.06] overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 45% 70%, rgba(255,255,255,0.04), transparent 60%), #1E1E24",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.25)",
              transition: "transform 0.15s ease-out",
              willChange: "transform",
            }}
          >
            {/* Glare overlay */}
            <div
              ref={glareRef}
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
            />

            <div>
              <p className="font-[var(--font-ui)] text-xs font-semibold tracking-[1px] text-[#828894] mb-2.5">
                SERVICIO {s.num}
              </p>
              <h3 className="font-[var(--font-display)] text-2xl md:text-[30px] font-extrabold text-white tracking-[-0.6px] mb-3">
                {s.titulo}
              </h3>
              <p className="font-[var(--font-body)] text-base text-[#A0A6B3] leading-relaxed">
                {s.descripcion}
              </p>
            </div>

            <div className="h-px bg-[#2A2D35]" />

            {/* Checklist 2×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {s.checks.map((check) => (
                <div key={check} className="flex items-center gap-2.5">
                  <div className="w-[22px] h-[22px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-[var(--font-body)] text-[14.5px] font-medium text-[#E6E8EC] leading-snug">
                    {check}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,122,254,0.3)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200 self-start"
            >
              Solicitar este servicio
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
