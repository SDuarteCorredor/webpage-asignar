"use client";

import { useState } from "react";
import type { Metadata } from "next";

const allVacantes = [
  {
    id: 1,
    cargo: "Mesero/a de Servicio",
    ciudad: "Medellín",
    sector: "Hotelería",
    icon: "room_service",
    tipo: "Temporal",
    descripcion:
      "Atención al cliente en restaurante de hotel 5 estrellas. Experiencia mínima 6 meses.",
  },
  {
    id: 2,
    cargo: "Auxiliar de Cocina",
    ciudad: "Bogotá",
    sector: "Restaurantes",
    icon: "restaurant",
    tipo: "Temporal",
    descripcion:
      "Preparación de alimentos, mise en place y apoyo al chef principal.",
  },
  {
    id: 3,
    cargo: "Recepcionista de Hotel",
    ciudad: "Cartagena",
    sector: "Hotelería",
    icon: "concierge",
    tipo: "Temporal",
    descripcion:
      "Check-in/check-out, atención a huéspedes. Inglés intermedio requerido.",
  },
  {
    id: 4,
    cargo: "Auxiliar de Bodega",
    ciudad: "Cali",
    sector: "Logística",
    icon: "warehouse",
    tipo: "Temporal",
    descripcion:
      "Recepción, almacenamiento y despacho de mercancía. Manejo de inventarios.",
  },
  {
    id: 5,
    cargo: "Camarero/a de Pisos",
    ciudad: "Barranquilla",
    sector: "Hotelería",
    icon: "bed",
    tipo: "Temporal",
    descripcion:
      "Limpieza y acondicionamiento de habitaciones según estándares de calidad.",
  },
  {
    id: 6,
    cargo: "Auxiliar de Servicios Generales",
    ciudad: "Medellín",
    sector: "Servicios",
    icon: "cleaning_services",
    tipo: "Temporal",
    descripcion:
      "Mantenimiento, aseo de áreas comunes y apoyo logístico general.",
  },
  {
    id: 7,
    cargo: "Bartender",
    ciudad: "Cartagena",
    sector: "Hotelería",
    icon: "local_bar",
    tipo: "Temporal",
    descripcion:
      "Preparación de cócteles y bebidas. Experiencia en bares de hotel o restaurante.",
  },
  {
    id: 8,
    cargo: "Operario de Producción",
    ciudad: "Bogotá",
    sector: "Industrial",
    icon: "factory",
    tipo: "Temporal",
    descripcion:
      "Operación de líneas de producción, control de calidad y empaque.",
  },
  {
    id: 9,
    cargo: "Supervisor de Alimentos y Bebidas",
    ciudad: "Medellín",
    sector: "Restaurantes",
    icon: "restaurant_menu",
    tipo: "Temporal",
    descripcion:
      "Coordinación del equipo de servicio y cocina. Experiencia mínima 2 años.",
  },
  {
    id: 10,
    cargo: "Auxiliar Administrativo",
    ciudad: "Rionegro",
    sector: "Servicios",
    icon: "description",
    tipo: "Temporal",
    descripcion:
      "Apoyo en gestión documental, archivo y atención de requerimientos.",
  },
  {
    id: 11,
    cargo: "Steward / Lavaplatos",
    ciudad: "Bogotá",
    sector: "Restaurantes",
    icon: "countertops",
    tipo: "Temporal",
    descripcion:
      "Lavado de loza y utensilios, apoyo en área de cocina y aseo.",
  },
  {
    id: 12,
    cargo: "Auxiliar de Logística",
    ciudad: "Cali",
    sector: "Logística",
    icon: "local_shipping",
    tipo: "Temporal",
    descripcion:
      "Coordinación de entregas, control de rutas y documentación de transporte.",
  },
];

const ciudades = [
  "Todas",
  "Medellín",
  "Bogotá",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Rionegro",
];
const sectores = [
  "Todos",
  "Hotelería",
  "Restaurantes",
  "Logística",
  "Industrial",
  "Servicios",
];

export default function VacantesPage() {
  const [ciudad, setCiudad] = useState("Todas");
  const [sector, setSector] = useState("Todos");

  const filtered = allVacantes.filter((v) => {
    if (ciudad !== "Todas" && v.ciudad !== ciudad) return false;
    if (sector !== "Todos" && v.sector !== sector) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-gray py-16 md:py-20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-blue mb-3 block">
            Oportunidades de empleo
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4">
            Encuentra tu próximo empleo
          </h1>
          <p className="font-[var(--font-body)] text-lg text-text-secondary max-w-2xl">
            Explora nuestras vacantes activas y aplica sin complicaciones.
            Nosotros te acompañamos en todo el proceso.
          </p>
        </div>
      </section>

      {/* Filters + Listing */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 block">
                Ciudad
              </label>
              <select
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm text-text-primary bg-surface-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              >
                {ciudades.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 block">
                Sector
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm text-text-primary bg-surface-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              >
                {sectores.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <span className="font-[var(--font-ui)] text-sm text-text-muted py-3">
                {filtered.length} vacante{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((v) => (
                <div
                  key={v.id}
                  className="group bg-surface-gray border border-border rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-blue/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-brand-blue group-hover:text-white transition-colors duration-300"
                        style={{ fontVariationSettings: '"FILL" 0' }}
                      >
                        {v.icon}
                      </span>
                    </div>
                    <span className="font-[var(--font-ui)] text-[11px] font-medium text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full">
                      {v.tipo}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1.5">
                    {v.cargo}
                  </h3>
                  <p className="font-[var(--font-body)] text-xs text-text-secondary mb-3 line-clamp-2">
                    {v.descripcion}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 font-[var(--font-ui)] text-xs text-text-muted">
                      <span className="material-symbols-outlined text-sm">
                        location_on
                      </span>
                      {v.ciudad}
                    </span>
                    <span className="flex items-center gap-1 font-[var(--font-ui)] text-xs text-text-muted">
                      <span className="material-symbols-outlined text-sm">
                        category
                      </span>
                      {v.sector}
                    </span>
                  </div>
                  <a
                    href="https://postulate.asignar.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 font-[var(--font-ui)] text-sm font-semibold text-brand-blue border border-brand-blue/30 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-200"
                  >
                    Aplicar
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-text-muted/30 mb-4 block">
                search_off
              </span>
              <p className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-2">
                No hay vacantes con esos filtros
              </p>
              <p className="font-[var(--font-body)] text-sm text-text-secondary">
                Prueba cambiando la ciudad o el sector, o envía tu hoja de vida
                a{" "}
                <a
                  href="mailto:marketingdigital@asignar.com.co"
                  className="text-brand-blue underline"
                >
                  marketingdigital@asignar.com.co
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
