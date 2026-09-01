"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Años de experiencia" },
  { value: 9, label: "Sedes en Colombia" },
  { value: 500, suffix: "+", label: "Empresas cliente" },
  { value: 1000, suffix: "+", label: "Trabajadores gestionados" },
];

/* Arranca en el valor final a propósito: el HTML que sirve el servidor debe
   traer el número real. Google y los motores de respuesta con IA leen ese
   HTML, y publicar "0+ años de experiencia" es peor que no tener contador.
   El 0 lo pone el primer frame de la animación —ya en el cliente y justo
   cuando la franja entra en pantalla—, así que nunca se sirve un 0 y el
   conteo se sigue viendo completo. Con reduced-motion no se anima y el
   número se queda en su valor real. */
function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  /* Opcional: las cifras exactas (p. ej. las 9 sedes) van sin "+". */
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);
  const display = count.toLocaleString("es-CO");

  return (
    <div className="text-center">
      <span className="block font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.02em]">
        {display}
        {suffix}
      </span>
      <span className="block font-[var(--font-ui)] text-sm text-white/70 mt-2">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-brand-gradient">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-0"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i > 0
                ? "lg:border-l border-white/15 lg:px-4"
                : "lg:px-4"
            }
          >
            <StatItem {...stat} inView={inView} />
          </div>
        ))}
      </div>
    </section>
  );
}
