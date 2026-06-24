"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Años de experiencia" },
  { value: 7, suffix: "+", label: "Sedes en Colombia" },
  { value: 500, suffix: "+", label: "Empresas cliente" },
  { value: 1000, suffix: "+", label: "Trabajadores gestionados" },
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

function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="text-center">
      <span className="block font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-[-0.02em]">
        {inView ? count : 0}
        {suffix}
      </span>
      <span className="block font-[var(--font-ui)] text-sm text-text-muted mt-2">
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
    <section className="py-16 md:py-20 bg-surface">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}
