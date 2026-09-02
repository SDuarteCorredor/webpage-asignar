"use client";

import { useEffect, useRef, useState } from "react";

/* Arranca en el valor final a propósito: el HTML que sirve el servidor debe
   traer el número real, porque es lo que leen Google y los motores de
   respuesta con IA. El 0 lo pone el primer frame de la animación, ya en el
   cliente. Con reduced-motion no se anima y el número queda en su valor. */
function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t0: number;
    let raf: number;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { value: 20, prefix: "+", label: "Años de experiencia" },
  { value: 9, label: "Ciudades con presencia" },
  { value: 5000, prefix: "+", dot: true, label: "Colaboradores en misión" },
  { value: 64, prefix: "+", label: "Clientes activos" },
];

function StatItem({ value, prefix, suffix, dot, label, inView }: {
  value: number; prefix?: string; suffix?: string; dot?: boolean; label: string; inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);
  const display = dot ? count.toLocaleString("es-CO") : String(count);
  return (
    <div className="text-center py-4 px-6">
      <span className="block font-[var(--font-display)] text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-[-0.02em] leading-tight">
        {prefix}{display}{suffix}
      </span>
      <span className="block font-[var(--font-ui)] text-xs font-semibold text-white/70 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLUListElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-brand-gradient" aria-labelledby="cifras-heading">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Título solo para lectores de pantalla y para el esquema de
            encabezados: la banda es visualmente autoexplicativa. */}
        <h2 id="cifras-heading" className="sr-only">
          Asignar en cifras
        </h2>
        <ul
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-0"
        >
          {stats.map((s, i) => (
            <li key={s.label} className={i > 0 ? "lg:border-l border-white/15" : ""}>
              <StatItem {...s} inView={inView} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
