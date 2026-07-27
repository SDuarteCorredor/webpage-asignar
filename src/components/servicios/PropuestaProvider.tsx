"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

/* Títulos de servicio que se ofrecen en el formulario.
   Deben coincidir con los `titulo` de `servicios` en
   components/soluciones/ServiciosExplorer.tsx para que, al pulsar
   "Solicitar este servicio", el <select> quede en la opción correcta. */
export const SERVICIOS_OPCIONES = [
  "Servicios Temporales",
  "Outsourcing de Procesos",
  "Selección de Personal",
  "Gestión de SST",
] as const;

/* Ancla del formulario en la página de servicios. */
export const PROPUESTA_ANCHOR_ID = "solicitar-propuesta";

type PropuestaContextValue = {
  servicio: string;
  setServicio: (servicio: string) => void;
  mensaje: string;
  setMensaje: (mensaje: string) => void;
  /** Precarga servicio + mensaje desde el explorador y sube al formulario. */
  solicitarServicio: (servicio: string, subtipo?: string) => void;
};

const PropuestaContext = createContext<PropuestaContextValue | null>(null);

export function usePropuesta() {
  const ctx = useContext(PropuestaContext);
  if (!ctx) {
    throw new Error("usePropuesta debe usarse dentro de <PropuestaProvider>");
  }
  return ctx;
}

export function PropuestaProvider({ children }: { children: ReactNode }) {
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const solicitarServicio = useCallback((titulo: string, subtipo?: string) => {
    setServicio(titulo);
    // Solo autocompletamos si el usuario aún no ha escrito nada suyo.
    setMensaje((actual) =>
      actual.trim()
        ? actual
        : subtipo
          ? `Estoy interesado en ${titulo} — ${subtipo}. `
          : `Estoy interesado en ${titulo}. `
    );

    const destino = document.getElementById(PROPUESTA_ANCHOR_ID);
    if (!destino) return;
    destino.scrollIntoView({ behavior: "smooth", block: "center" });
    // Enfoca el primer campo vacío para que pueda seguir escribiendo de una vez.
    window.setTimeout(() => {
      destino
        .querySelector<HTMLInputElement>("input:not([value]), input[value='']")
        ?.focus({ preventScroll: true });
    }, 600);
  }, []);

  return (
    <PropuestaContext.Provider
      value={{ servicio, setServicio, mensaje, setMensaje, solicitarServicio }}
    >
      {children}
    </PropuestaContext.Provider>
  );
}
