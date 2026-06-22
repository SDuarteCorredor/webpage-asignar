"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const sedes = [
  { ciudad: "Medellín", tipo: "Sede Principal", tel: "" },
  { ciudad: "Bogotá", tipo: "Sede", tel: "" },
  { ciudad: "Cali", tipo: "Sede", tel: "" },
  { ciudad: "Barranquilla", tipo: "Sede", tel: "" },
  { ciudad: "Cartagena", tipo: "Sede", tel: "" },
  { ciudad: "Rionegro", tipo: "Sede", tel: "" },
  { ciudad: "Pereira / Manizales", tipo: "Sede Eje Cafetero", tel: "" },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-gray py-16 md:py-20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <span className="font-[var(--font-ui)] text-xs font-bold uppercase tracking-widest text-brand-blue mb-3 block">
            Contacto Empresarial
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4">
            Hablemos de tu operación
          </h1>
          <p className="font-[var(--font-body)] text-lg text-text-secondary max-w-2xl">
            Cuéntanos qué necesitas y te diseñamos una propuesta a la medida.
            Sin compromisos.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-16 bg-surface-gray rounded-2xl border border-border">
                  <span className="material-symbols-outlined text-5xl text-brand-blue mb-4 block">
                    check_circle
                  </span>
                  <h2 className="font-[var(--font-display)] text-2xl font-bold text-brand-navy mb-2">
                    Mensaje enviado
                  </h2>
                  <p className="font-[var(--font-body)] text-base text-text-secondary max-w-md mx-auto">
                    Gracias por contactarnos. Nuestro equipo comercial se
                    comunicará contigo en las próximas 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface-gray rounded-2xl border border-border p-6 md:p-8 space-y-5"
                >
                  <h2 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-1">
                    Solicitar propuesta
                  </h2>
                  <p className="font-[var(--font-body)] text-sm text-text-secondary mb-4">
                    Completa el formulario y un asesor comercial te contactará.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nombre de tu empresa"
                        className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="correo@empresa.com"
                        className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+57 300 000 0000"
                        className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                      Ciudad
                    </label>
                    <select className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue">
                      <option value="">Selecciona una ciudad</option>
                      <option>Medellín</option>
                      <option>Bogotá</option>
                      <option>Cali</option>
                      <option>Barranquilla</option>
                      <option>Cartagena</option>
                      <option>Rionegro</option>
                      <option>Pereira / Manizales</option>
                      <option>Otra</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-[var(--font-ui)] text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5 block">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos qué necesitas: tipo de personal, cantidad, fechas..."
                      className="w-full border border-border rounded-xl px-4 py-3 font-[var(--font-body)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-10 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:shadow-[0_6px_20px_rgba(0,122,254,0.23)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Enviar solicitud
                    <span className="material-symbols-outlined text-base">
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-gray rounded-2xl border border-border p-6">
                <h3 className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-4">
                  Nuestras sedes
                </h3>
                <ul className="space-y-3">
                  {sedes.map((s) => (
                    <li key={s.ciudad} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-brand-blue text-lg">
                        location_on
                      </span>
                      <div>
                        <p className="font-[var(--font-ui)] text-sm font-bold text-brand-navy">
                          {s.ciudad}
                        </p>
                        <p className="font-[var(--font-ui)] text-xs text-text-muted">
                          {s.tipo}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-[var(--font-display)] text-lg font-bold mb-4">
                  Contacto directo
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-light-blue text-lg mt-0.5">
                      mail
                    </span>
                    <div>
                      <p className="text-xs text-white/50">Email comercial</p>
                      <a
                        href="mailto:marketingdigital@asignar.com.co"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        marketingdigital@asignar.com.co
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-light-blue text-lg mt-0.5">
                      shield
                    </span>
                    <div>
                      <p className="text-xs text-white/50">Línea Ética</p>
                      <a
                        href="mailto:sqr@asignar.com.co"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        sqr@asignar.com.co
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-gray rounded-2xl border border-border p-6">
                <p className="font-[var(--font-body)] text-xs text-text-muted leading-relaxed">
                  <strong className="text-brand-navy">¿Eres candidato?</strong>{" "}
                  Si buscas empleo, visita nuestra sección de{" "}
                  <a
                    href="/vacantes"
                    className="text-brand-blue underline"
                  >
                    vacantes
                  </a>{" "}
                  o envía tu hoja de vida a{" "}
                  <a
                    href="mailto:marketingdigital@asignar.com.co"
                    className="text-brand-blue underline"
                  >
                    marketingdigital@asignar.com.co
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
