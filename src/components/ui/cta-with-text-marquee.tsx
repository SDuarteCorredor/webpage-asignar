"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn("group/marquee flex flex-col overflow-hidden", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Hotelería",
  "Restaurantes",
  "Logística",
  "Industria",
  "Centros de Eventos",
  "Inmobiliario",
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    let frame: number;
    const animationFrame = () => {
      updateOpacity();
      frame = requestAnimationFrame(animationFrame);
    };
    frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-surface py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)] overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left — copy + CTAs */}
          <div className="space-y-6 max-w-xl">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em] text-brand-navy">
              ¿Listo para optimizar
              <br />
              tu operación?
            </h2>
            <p className="font-[var(--font-body)] text-base md:text-lg text-text-secondary leading-relaxed">
              Cuéntanos sobre tu empresa y te diseñamos una propuesta a la
              medida. Sin compromisos. Personal calificado y listo cuando lo
              necesites.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contacto"
                className="group relative inline-flex items-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Solicitar propuesta</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-[18px] h-[18px] relative z-10"
                  aria-hidden="true"
                >
                  <path
                    d="M4 12h15M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
              <Link
                href="/soluciones"
                className="group relative inline-flex items-center gap-2 font-[var(--font-ui)] text-sm font-semibold px-8 py-4 rounded-full border border-border bg-white text-brand-navy hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Ver servicios</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </div>
          </div>

          {/* Right — vertical marquee */}
          <div
            ref={marqueeRef}
            className="relative h-[400px] lg:h-[500px] hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <VerticalMarquee speed={20} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight py-6 marquee-item text-brand-navy/80"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>

              {/* Top vignette */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-surface via-surface/50 to-transparent z-10" />

              {/* Bottom vignette */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
