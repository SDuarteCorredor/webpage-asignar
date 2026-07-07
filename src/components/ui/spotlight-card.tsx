"use client";

import { ReactNode, useEffect } from "react";

/**
 * Spotlight / glow que sigue al cursor, fijado a los azules de Asignar.
 * Adaptación del patrón "spotlight-card" al stack del proyecto
 * (Next + Tailwind v4, sin shadcn). El brillo se pinta en coordenadas de
 * viewport (`background-attachment: fixed`) por lo que una sola escucha de
 * puntero ilumina cualquier tarjeta que quede bajo el cursor.
 */

let subscribers = 0;
let move: ((e: PointerEvent) => void) | null = null;

export function useGlowPointer() {
  useEffect(() => {
    if (subscribers === 0) {
      move = (e: PointerEvent) => {
        const s = document.documentElement.style;
        s.setProperty("--glow-x", `${e.clientX}px`);
        s.setProperty("--glow-y", `${e.clientY}px`);
      };
      window.addEventListener("pointermove", move, { passive: true });
    }
    subscribers += 1;
    return () => {
      subscribers -= 1;
      if (subscribers === 0 && move) {
        window.removeEventListener("pointermove", move);
        move = null;
      }
    };
  }, []);
}

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Envuelve su contenido y añade dos capas decorativas:
 * - `spotlight-sheen`: un halo azul suave bajo el cursor.
 * - `spotlight-border`: un borde que se enciende en azul cerca del cursor.
 * El radio se hereda del contenedor (usa `rounded-[…]` en `className`).
 */
export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  useGlowPointer();
  return (
    <div className={`spotlight-card relative isolate ${className}`}>
      {children}
      <span
        aria-hidden
        className="spotlight-sheen pointer-events-none absolute inset-0 z-[6] rounded-[inherit]"
      />
      <span
        aria-hidden
        className="spotlight-border pointer-events-none absolute inset-0 z-30 rounded-[inherit]"
      />
    </div>
  );
}
