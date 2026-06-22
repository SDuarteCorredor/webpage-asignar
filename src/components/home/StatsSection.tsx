"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Años de experiencia", icon: "history" },
  { value: 7, suffix: "+", label: "Sedes en Colombia", icon: "location_on" },
  { value: 500, suffix: "+", label: "Empresas cliente", icon: "business" },
  {
    value: 1000,
    suffix: "+",
    label: "Trabajadores gestionados",
    icon: "groups",
  },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
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

function StatCard({
  value,
  suffix,
  label,
  icon,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
        <span
          className="material-symbols-outlined text-brand-blue text-2xl group-hover:text-white transition-colors"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {icon}
        </span>
      </div>
      <span className="block font-[var(--font-display)] text-4xl md:text-5xl font-extrabold text-brand-navy">
        {inView ? count : 0}
        {suffix}
      </span>
      <span className="block font-[var(--font-ui)] text-sm text-text-secondary mt-1">
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
    <section className="py-16 md:py-20 bg-white border-y border-border">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}
