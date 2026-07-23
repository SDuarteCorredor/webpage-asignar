"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import type { FormEvent } from "react";

/* ============================================================
   Datos — vacantes SIEMPRE activas (genéricas de Asignar).
   Nota: por ahora NO se muestran nombres de empresas cliente
   (pendiente de autorización). El empleador visible es Asignar
   como empresa de servicios temporales.
   ============================================================ */
type Vacante = {
  id: number;
  cargo: string;
  ciudad: string;
  departamento: string;
  sector: string;
  contrato: string;
  salario: string;
  salarioDetalle: string;
  experiencia: string;
  jornada: string;
  modalidad: string;
  funciones: string;
  icon: string;
  destacada?: boolean;
};

const vacantes: Vacante[] = [
  {
    id: 1,
    cargo: "Mesero/a de Servicio",
    ciudad: "Medellín",
    departamento: "Antioquia",
    sector: "Hotelería",
    contrato: "Obra o labor",
    salario: "$1.550.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley · + Propinas",
    experiencia: "Mínimo 6 meses",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Atención y servicio a mesa en restaurante de hotel, montaje de estaciones, toma de pedidos y apoyo al equipo de A&B.",
    icon: "room_service",
    destacada: true,
  },
  {
    id: 2,
    cargo: "Auxiliar de Cocina",
    ciudad: "Bogotá",
    departamento: "Cundinamarca",
    sector: "Restaurantes",
    contrato: "Obra o labor",
    salario: "$1.500.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 6 meses",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Preparación de alimentos, mise en place, control de inventario de insumos y apoyo directo al chef principal.",
    icon: "restaurant",
  },
  {
    id: 3,
    cargo: "Recepcionista de Hotel",
    ciudad: "Cartagena",
    departamento: "Bolívar",
    sector: "Hotelería",
    contrato: "Obra o labor",
    salario: "$1.750.905",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 1 año",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Check-in / check-out, atención a huéspedes, manejo de reservas y apoyo administrativo. Inglés intermedio requerido.",
    icon: "concierge",
    destacada: true,
  },
  {
    id: 4,
    cargo: "Auxiliar de Bodega",
    ciudad: "Cali",
    departamento: "Valle del Cauca",
    sector: "Logística",
    contrato: "Obra o labor",
    salario: "$1.423.500",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Sin experiencia",
    jornada: "Diurna",
    modalidad: "Presencial",
    funciones:
      "Recepción, almacenamiento y despacho de mercancía, manejo de inventarios y organización de bodega.",
    icon: "warehouse",
  },
  {
    id: 5,
    cargo: "Camarero/a de Pisos",
    ciudad: "Barranquilla",
    departamento: "Atlántico",
    sector: "Hotelería",
    contrato: "Obra o labor",
    salario: "$1.423.500",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 6 meses",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Limpieza y acondicionamiento de habitaciones según estándares de calidad y reposición de amenidades.",
    icon: "bed",
  },
  {
    id: 6,
    cargo: "Auxiliar de Servicios Generales",
    ciudad: "Medellín",
    departamento: "Antioquia",
    sector: "Servicios",
    contrato: "Obra o labor",
    salario: "$1.423.500",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Sin experiencia",
    jornada: "Diurna",
    modalidad: "Presencial",
    funciones:
      "Mantenimiento y aseo de áreas comunes, manejo de insumos de limpieza y apoyo logístico general.",
    icon: "cleaning_services",
  },
  {
    id: 7,
    cargo: "Bartender",
    ciudad: "Cartagena",
    departamento: "Bolívar",
    sector: "Hotelería",
    contrato: "Obra o labor",
    salario: "$1.600.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley · + Propinas",
    experiencia: "Mínimo 1 año",
    jornada: "Nocturna / rotativa",
    modalidad: "Presencial",
    funciones:
      "Preparación de cócteles y bebidas, atención en barra y manejo de inventario de licores. Experiencia en hotel o restaurante.",
    icon: "local_bar",
  },
  {
    id: 8,
    cargo: "Operario de Producción",
    ciudad: "Bogotá",
    departamento: "Cundinamarca",
    sector: "Industrial",
    contrato: "Obra o labor",
    salario: "$1.500.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 6 meses",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Operación de líneas de producción, control de calidad, empaque y registro de indicadores del proceso.",
    icon: "factory",
  },
  {
    id: 9,
    cargo: "Supervisor de Alimentos y Bebidas",
    ciudad: "Medellín",
    departamento: "Antioquia",
    sector: "Restaurantes",
    contrato: "Obra o labor",
    salario: "$2.200.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 2 años",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Coordinación del equipo de servicio y cocina, control de estándares, manejo de inventarios y reportes de gestión.",
    icon: "restaurant_menu",
  },
  {
    id: 10,
    cargo: "Auxiliar Administrativo",
    ciudad: "Rionegro",
    departamento: "Antioquia",
    sector: "Servicios",
    contrato: "Obra o labor",
    salario: "$1.600.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 1 año",
    jornada: "Diurna",
    modalidad: "Presencial",
    funciones:
      "Gestión documental, archivo, atención de requerimientos y apoyo a las áreas administrativas.",
    icon: "description",
  },
  {
    id: 11,
    cargo: "Steward / Lavaplatos",
    ciudad: "Bogotá",
    departamento: "Cundinamarca",
    sector: "Restaurantes",
    contrato: "Obra o labor",
    salario: "$1.423.500",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Sin experiencia",
    jornada: "Turnos rotativos",
    modalidad: "Presencial",
    funciones:
      "Lavado de loza y utensilios, aseo del área de cocina y apoyo en la recepción de insumos.",
    icon: "countertops",
  },
  {
    id: 12,
    cargo: "Auxiliar de Logística",
    ciudad: "Cali",
    departamento: "Valle del Cauca",
    sector: "Logística",
    contrato: "Obra o labor",
    salario: "$1.550.000",
    salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley",
    experiencia: "Mínimo 6 meses",
    jornada: "Diurna",
    modalidad: "Presencial",
    funciones:
      "Coordinación de entregas, control de rutas, documentación de transporte y seguimiento de despachos.",
    icon: "local_shipping",
  },
];

const ciudades = ["Todas", "Medellín", "Bogotá", "Cali", "Cartagena", "Barranquilla", "Rionegro"];
const sectores = ["Todos", "Hotelería", "Restaurantes", "Logística", "Industrial", "Servicios"];
const contratos = ["Todos", "Obra o labor"];

const MARKETING_EMAIL = "marketingdigital@asignar.com.co";

/* ---------- Estilos de formulario ---------- */
const labelCls =
  "font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]";
const baseInput =
  "w-full bg-surface border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors";
const inputCls = (err?: boolean) =>
  `${baseInput} ${err ? "border-red-400 focus:border-red-500" : "border-border focus:border-brand-blue"}`;

/* ============================================================
   Modal de postulación (basado en la propuesta v2.1)
   Panel de info del cargo (gradiente marca) + formulario.
   Envío interino por correo a marketing (automatización lee/enruta).
   TODO(TI): conectar al backend/endpoint real de postulación.
   ============================================================ */
function ApplyModal({ vacante, onClose }: { vacante: Vacante; onClose: () => void }) {
  const [form, setForm] = useState({
    nombre: "",
    tipoDoc: "CC",
    documento: "",
    edad: "",
    telefono: "",
    whatsapp: "",
    hojaVida: "",
    consent: false,
  });
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const set = (k: string, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrores((e) => ({ ...e, [k]: "" }));
  };

  const validar = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tus nombres completos.";
    if (!form.documento.trim()) e.documento = "Ingresa tu número de documento.";
    if (!form.edad.trim()) e.edad = "Ingresa tu edad.";
    if (!form.telefono.trim()) e.telefono = "Ingresa un teléfono.";
    if (!form.consent) e.consent = "Debes aceptar el tratamiento de datos.";
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validar()) return;
    const cuerpo = [
      `POSTULACIÓN A VACANTE`,
      `Cargo: ${vacante.cargo}`,
      `Ciudad: ${vacante.ciudad}, ${vacante.departamento}`,
      `Sector: ${vacante.sector}`,
      "",
      `Nombres: ${form.nombre}`,
      `Documento: ${form.tipoDoc} ${form.documento}`,
      `Edad: ${form.edad}`,
      `Teléfono: ${form.telefono}`,
      `WhatsApp: ${form.whatsapp || "—"}`,
      form.hojaVida ? `Hoja de vida: ${form.hojaVida} (adjuntar a este correo)` : "",
      "",
      "— Autorizo el tratamiento de mis datos personales (Ley 1581 de 2012).",
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${MARKETING_EMAIL}?subject=${encodeURIComponent(
      `Postulación — ${vacante.cargo} (${vacante.ciudad})`
    )}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch md:items-center justify-center bg-brand-navy/60 backdrop-blur-sm md:p-6 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Postulación a ${vacante.cargo}`}
    >
      <div
        className="relative w-full md:max-w-[960px] md:max-h-[90vh] bg-white md:rounded-3xl overflow-hidden flex flex-col md:grid md:grid-cols-[minmax(0,42%)_1fr] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 md:bg-white/90 text-white md:text-brand-navy hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* ---- Panel de info del cargo ---- */}
        <aside className="relative bg-brand-gradient text-white p-6 md:p-7 overflow-y-auto shrink-0">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 font-[var(--font-ui)] text-[11px] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Vacante activa
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-2xl md:text-[26px] font-extrabold leading-tight">
              {vacante.cargo}
            </h2>
            <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/80">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              {vacante.ciudad}, {vacante.departamento}
            </p>

            {/* Salario hero */}
            <div className="mt-5 rounded-2xl bg-white/10 border border-white/15 p-4">
              <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-wide text-white/60">
                Salario mensual
              </p>
              <p className="font-[var(--font-display)] text-2xl font-extrabold">{vacante.salario}</p>
              <p className="font-[var(--font-body)] text-[12px] text-white/70 mt-0.5">
                {vacante.salarioDetalle}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {[
                { i: "work_history", l: "Experiencia", v: vacante.experiencia },
                { i: "assignment", l: "Contrato", v: vacante.contrato },
                { i: "schedule", l: "Jornada", v: vacante.jornada },
                { i: "business", l: "Modalidad", v: vacante.modalidad },
              ].map((h) => (
                <div key={h.l} className="rounded-xl bg-white/[0.07] border border-white/10 p-3">
                  <span className="material-symbols-outlined text-brand-light-blue text-[19px]">
                    {h.i}
                  </span>
                  <p className="mt-1 font-[var(--font-ui)] text-[10px] font-semibold uppercase tracking-wide text-white/55">
                    {h.l}
                  </p>
                  <p className="font-[var(--font-body)] text-[13px] font-medium text-white leading-snug">
                    {h.v}
                  </p>
                </div>
              ))}
            </div>

            {/* Funciones */}
            <div className="mt-4">
              <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-wide text-white/55 mb-1.5">
                Funciones principales
              </p>
              <p className="font-[var(--font-body)] text-[13px] text-white/85 leading-relaxed">
                {vacante.funciones}
              </p>
            </div>
          </div>
        </aside>

        {/* ---- Formulario ---- */}
        <main className="p-6 md:p-8 overflow-y-auto">
          {enviado ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                <span className="material-symbols-outlined text-brand-blue text-3xl">
                  mark_email_read
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-2">
                ¡Postulación lista!
              </h3>
              <p className="font-[var(--font-body)] text-sm text-text-secondary max-w-xs mb-6">
                Se abrió tu correo con la postulación diligenciada. Si tienes hoja de vida,
                adjúntala antes de enviar. Nuestro equipo te contactará muy pronto.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-7 py-3 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <h3 className="font-[var(--font-display)] text-xl font-extrabold text-brand-navy">
                  Postúlate a esta vacante
                </h3>
                <p className="flex items-center gap-1.5 font-[var(--font-body)] text-[13px] text-text-muted mt-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Te toma menos de 2 minutos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label htmlFor="ap-nombre" className={labelCls}>
                    Nombres completos <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ap-nombre"
                    type="text"
                    value={form.nombre}
                    onChange={(e) => set("nombre", e.target.value)}
                    placeholder="Ej. María Camila López Restrepo"
                    className={inputCls(!!errores.nombre)}
                  />
                  {errores.nombre && (
                    <p className="mt-1 text-[11px] text-red-500">{errores.nombre}</p>
                  )}
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-3">
                  <div>
                    <label htmlFor="ap-tipodoc" className={labelCls}>
                      Tipo ID
                    </label>
                    <select
                      id="ap-tipodoc"
                      value={form.tipoDoc}
                      onChange={(e) => set("tipoDoc", e.target.value)}
                      className={`${inputCls()} appearance-none`}
                    >
                      {["CC", "CE", "PPT", "PA"].map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ap-doc" className={labelCls}>
                      Número de documento <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="ap-doc"
                      type="text"
                      inputMode="numeric"
                      value={form.documento}
                      onChange={(e) => set("documento", e.target.value)}
                      placeholder="Sin puntos ni comas"
                      className={inputCls(!!errores.documento)}
                    />
                    {errores.documento && (
                      <p className="mt-1 text-[11px] text-red-500">{errores.documento}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="ap-edad" className={labelCls}>
                      Edad <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="ap-edad"
                      type="number"
                      inputMode="numeric"
                      min={18}
                      max={70}
                      value={form.edad}
                      onChange={(e) => set("edad", e.target.value)}
                      placeholder="Años"
                      className={inputCls(!!errores.edad)}
                    />
                    {errores.edad && <p className="mt-1 text-[11px] text-red-500">{errores.edad}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="ap-tel" className={labelCls}>
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="ap-tel"
                      type="tel"
                      inputMode="tel"
                      value={form.telefono}
                      onChange={(e) => set("telefono", e.target.value)}
                      placeholder="Ej. 300 123 4567"
                      className={inputCls(!!errores.telefono)}
                    />
                    {errores.telefono && (
                      <p className="mt-1 text-[11px] text-red-500">{errores.telefono}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="ap-wa" className={labelCls}>
                    WhatsApp <span className="text-text-muted font-normal">(opcional)</span>
                  </label>
                  <input
                    id="ap-wa"
                    type="tel"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    placeholder="Ej. 300 123 4567"
                    className={inputCls()}
                  />
                </div>

                {/* Hoja de vida */}
                <div>
                  <label className={labelCls}>
                    Hoja de vida <span className="text-text-muted font-normal">(opcional)</span>
                  </label>
                  <label
                    htmlFor="ap-cv"
                    className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-surface px-4 py-5 cursor-pointer hover:border-brand-blue/50 transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-brand-blue text-2xl">
                      upload_file
                    </span>
                    <span className="font-[var(--font-body)] text-[13px] text-text-secondary">
                      {form.hojaVida ? (
                        <strong className="text-brand-navy">{form.hojaVida}</strong>
                      ) : (
                        <>
                          Adjunta tu HV — <strong className="text-brand-blue">selecciona</strong>
                        </>
                      )}
                    </span>
                    <span className="font-[var(--font-ui)] text-[11px] text-text-muted">
                      PDF o Word · máx. 5 MB
                    </span>
                    <input
                      id="ap-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => set("hojaVida", e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>

                {/* Consentimiento */}
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue"
                  />
                  <span className="font-[var(--font-body)] text-[12px] text-text-secondary leading-snug">
                    Autorizo el tratamiento de mis datos personales conforme a la{" "}
                    <a
                      href="https://www.asignar.com.co/build/img/Politica_Tratamiento_Datos_Personales.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue underline"
                    >
                      política de datos
                    </a>{" "}
                    (Ley 1581 de 2012).
                  </span>
                </label>
                {errores.consent && (
                  <p className="-mt-2 text-[11px] text-red-500">{errores.consent}</p>
                )}

                <button
                  type="submit"
                  className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:-translate-y-0.5 transition-transform"
                >
                  Postularme ahora
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

/* ============================================================
   Tarjeta de vacante (grid tipo portal de empleo)
   ============================================================ */
function VacanteCard({ v, onApply }: { v: Vacante; onApply: () => void }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:border-brand-blue/40 hover:shadow-[0_16px_40px_-24px_rgba(0,18,51,0.3)]">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
          <span className="material-symbols-outlined">{v.icon}</span>
        </span>
        {v.destacada && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-2.5 py-1 font-[var(--font-ui)] text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
            <span className="material-symbols-outlined text-[13px]">star</span>
            Destacada
          </span>
        )}
      </div>

      <h3 className="font-[var(--font-display)] text-[17px] font-bold text-brand-navy leading-snug">
        {v.cargo}
      </h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-[var(--font-body)] text-[13px] text-text-muted">
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px]">location_on</span>
          {v.ciudad}
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px]">category</span>
          {v.sector}
        </span>
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-[var(--font-display)] text-lg font-extrabold text-brand-navy">
          {v.salario}
        </span>
        <span className="font-[var(--font-body)] text-[12px] text-text-muted">/ mes</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {[v.contrato, v.jornada].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-surface-gray px-2.5 py-1 font-[var(--font-ui)] text-[11px] font-medium text-text-secondary"
          >
            {chip}
          </span>
        ))}
      </div>

      <p className="mt-3 font-[var(--font-body)] text-[13px] text-text-secondary leading-relaxed line-clamp-2">
        {v.funciones}
      </p>

      <button
        type="button"
        onClick={onApply}
        className="mt-4 w-full inline-flex items-center justify-center gap-1.5 font-[var(--font-ui)] text-sm font-semibold text-brand-blue border border-brand-blue/30 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all"
      >
        Ver y postularme
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </div>
  );
}

/* ============================================================
   Página de vacantes
   ============================================================ */
export default function VacantesClient() {
  const [query, setQuery] = useState("");
  const [ciudad, setCiudad] = useState("Todas");
  const [sector, setSector] = useState("Todos");
  const [contrato, setContrato] = useState("Todos");
  const [aplicar, setAplicar] = useState<Vacante | null>(null);

  // Bloquea el scroll del body con el modal abierto + cierre con Escape
  useEffect(() => {
    if (!aplicar) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAplicar(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [aplicar]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vacantes.filter((v) => {
      if (ciudad !== "Todas" && v.ciudad !== ciudad) return false;
      if (sector !== "Todos" && v.sector !== sector) return false;
      if (contrato !== "Todos" && v.contrato !== contrato) return false;
      if (
        q &&
        !v.cargo.toLowerCase().includes(q) &&
        !v.sector.toLowerCase().includes(q) &&
        !v.funciones.toLowerCase().includes(q) &&
        !v.ciudad.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [query, ciudad, sector, contrato]);

  const limpiar = useCallback(() => {
    setQuery("");
    setCiudad("Todas");
    setSector("Todos");
    setContrato("Todos");
  }, []);

  const hayFiltros =
    query !== "" || ciudad !== "Todas" || sector !== "Todos" || contrato !== "Todos";

  const selectCls =
    "appearance-none bg-white border border-border rounded-xl pl-3.5 pr-9 py-2.5 font-[var(--font-ui)] text-sm font-medium text-brand-navy outline-none focus:border-brand-blue transition-colors cursor-pointer";

  return (
    <>
      {/* ---------- Hero + buscador ---------- */}
      <section className="bg-surface py-14 md:py-[64px]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="max-w-2xl">
            <span className="inline-block font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[1px] text-brand-blue bg-brand-blue/[0.09] rounded-full px-3 py-1.5 mb-5">
              Trabaja con nosotros
            </span>
            <h1 className="font-[var(--font-display)] text-[32px] md:text-[44px] font-extrabold text-brand-navy leading-[1.05] tracking-[-0.8px]">
              Tu próximo empleo, <span className="text-brand-blue">a un clic</span>
            </h1>
            <p className="font-[var(--font-body)] text-base md:text-lg text-text-secondary leading-relaxed mt-4">
              Vacantes activas en hotelería, restaurantes, logística e industria en toda Colombia.
              Vinculación legal, pagos puntuales y acompañamiento en todo el proceso.
            </p>
          </div>

          {/* Buscador */}
          <div className="mt-7 relative max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca por cargo, sector o ciudad…"
              aria-label="Buscar vacantes"
              className="w-full bg-white rounded-full pl-12 pr-4 py-4 font-[var(--font-body)] text-sm text-text-primary border border-border shadow-[0_12px_30px_-18px_rgba(0,18,51,0.25)] outline-none focus:border-brand-blue transition-colors"
            />
          </div>

          {/* Stats de venta */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { n: "+2.000", l: "vacantes al año" },
              { n: "9", l: "ciudades" },
              { n: "48 h", l: "tiempo de respuesta" },
              { n: "Ley 50", l: "vinculación legal" },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-1.5">
                <span className="font-[var(--font-display)] text-xl font-extrabold text-brand-navy">
                  {s.n}
                </span>
                <span className="font-[var(--font-body)] text-[13px] text-text-muted">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Filtros + listado ---------- */}
      <section className="py-10 md:py-14 bg-white border-t border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          {/* Barra de filtros */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            {[
              { val: ciudad, set: setCiudad, opts: ciudades, ico: "location_on" },
              { val: sector, set: setSector, opts: sectores, ico: "category" },
              { val: contrato, set: setContrato, opts: contratos, ico: "assignment" },
            ].map((f, i) => (
              <div key={i} className="relative">
                <select
                  value={f.val}
                  onChange={(e) => f.set(e.target.value)}
                  className={selectCls}
                >
                  {f.opts.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted text-[18px]">
                  expand_more
                </span>
              </div>
            ))}

            {hayFiltros && (
              <button
                type="button"
                onClick={limpiar}
                className="inline-flex items-center gap-1 font-[var(--font-ui)] text-[13px] font-semibold text-text-muted hover:text-brand-blue transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
                Limpiar
              </button>
            )}

            <span className="ml-auto font-[var(--font-ui)] text-sm text-text-muted">
              <strong className="text-brand-navy">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "vacante" : "vacantes"}
            </span>
          </div>

          {/* Grid de vacantes */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((v) => (
                <VacanteCard key={v.id} v={v} onApply={() => setAplicar(v)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-text-muted/30 mb-3 block">
                search_off
              </span>
              <p className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-2">
                No hay vacantes con esos filtros
              </p>
              <p className="font-[var(--font-body)] text-sm text-text-secondary">
                Prueba con otros filtros o envía tu hoja de vida a{" "}
                <a
                  href={`mailto:${MARKETING_EMAIL}`}
                  className="text-brand-blue underline"
                >
                  {MARKETING_EMAIL}
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ---------- ¿Por qué postularte con Asignar? ---------- */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-extrabold text-brand-navy tracking-[-0.02em] mb-3">
            ¿Por qué postularte con Asignar?
          </h2>
          <p className="font-[var(--font-body)] text-base text-text-secondary max-w-2xl mb-10">
            Somos una empresa de servicios temporales con más de 20 años conectando talento con las
            mejores empresas de Colombia. Tú te postulas una vez; nosotros te acompañamos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                i: "verified_user",
                t: "Vinculación 100% legal",
                d: "Contrato bajo Ley 50 de 1990, con todas las prestaciones de ley.",
              },
              {
                i: "payments",
                t: "Pagos puntuales",
                d: "Nómina quincenal con seguridad social, EPS, pensión y ARL SURA.",
              },
              {
                i: "support_agent",
                t: "Acompañamiento real",
                d: "Un equipo que te guía desde la postulación hasta tu primer día.",
              },
              {
                i: "trending_up",
                t: "Crece con nosotros",
                d: "Capacitaciones y oportunidades en hoteles, clubes y empresas líderes.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
                  <span className="material-symbols-outlined">{b.i}</span>
                </span>
                <h3 className="font-[var(--font-display)] text-base font-bold text-brand-navy mb-1.5">
                  {b.t}
                </h3>
                <p className="font-[var(--font-body)] text-[13px] text-text-secondary leading-relaxed">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {aplicar && <ApplyModal vacante={aplicar} onClose={() => setAplicar(null)} />}
    </>
  );
}
