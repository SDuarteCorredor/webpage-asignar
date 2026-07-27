"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import type { FormEvent } from "react";

/* ============================================================
   Datos — vacantes SIEMPRE activas (genéricas de Asignar).
   Nota: por ahora NO se muestran nombres de empresas cliente
   (pendiente de autorización). El empleador visible es Asignar.
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
  { id: 1, cargo: "Mesero/a de Servicio", ciudad: "Medellín", departamento: "Antioquia", sector: "Hotelería", contrato: "Obra o labor", salario: "$1.550.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley · + Propinas", experiencia: "Mínimo 6 meses", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Atención y servicio a mesa en restaurante de hotel, montaje de estaciones, toma de pedidos y apoyo al equipo de A&B.", icon: "room_service", destacada: true },
  { id: 2, cargo: "Auxiliar de Cocina", ciudad: "Bogotá", departamento: "Cundinamarca", sector: "Restaurantes", contrato: "Obra o labor", salario: "$1.500.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 6 meses", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Preparación de alimentos, mise en place, control de inventario de insumos y apoyo directo al chef principal.", icon: "restaurant" },
  { id: 3, cargo: "Recepcionista de Hotel", ciudad: "Cartagena", departamento: "Bolívar", sector: "Hotelería", contrato: "Obra o labor", salario: "$1.750.905", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 1 año", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Check-in / check-out, atención a huéspedes, manejo de reservas y apoyo administrativo. Inglés intermedio requerido.", icon: "concierge", destacada: true },
  { id: 4, cargo: "Auxiliar de Bodega", ciudad: "Cali", departamento: "Valle del Cauca", sector: "Logística", contrato: "Obra o labor", salario: "$1.423.500", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Sin experiencia", jornada: "Diurna", modalidad: "Presencial", funciones: "Recepción, almacenamiento y despacho de mercancía, manejo de inventarios y organización de bodega.", icon: "warehouse" },
  { id: 5, cargo: "Camarero/a de Pisos", ciudad: "Barranquilla", departamento: "Atlántico", sector: "Hotelería", contrato: "Obra o labor", salario: "$1.423.500", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 6 meses", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Limpieza y acondicionamiento de habitaciones según estándares de calidad y reposición de amenidades.", icon: "bed" },
  { id: 6, cargo: "Auxiliar de Servicios Generales", ciudad: "Medellín", departamento: "Antioquia", sector: "Servicios", contrato: "Obra o labor", salario: "$1.423.500", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Sin experiencia", jornada: "Diurna", modalidad: "Presencial", funciones: "Mantenimiento y aseo de áreas comunes, manejo de insumos de limpieza y apoyo logístico general.", icon: "cleaning_services" },
  { id: 7, cargo: "Bartender", ciudad: "Cartagena", departamento: "Bolívar", sector: "Hotelería", contrato: "Obra o labor", salario: "$1.600.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley · + Propinas", experiencia: "Mínimo 1 año", jornada: "Nocturna / rotativa", modalidad: "Presencial", funciones: "Preparación de cócteles y bebidas, atención en barra y manejo de inventario de licores. Experiencia en hotel o restaurante.", icon: "local_bar" },
  { id: 8, cargo: "Operario de Producción", ciudad: "Bogotá", departamento: "Cundinamarca", sector: "Industrial", contrato: "Obra o labor", salario: "$1.500.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 6 meses", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Operación de líneas de producción, control de calidad, empaque y registro de indicadores del proceso.", icon: "factory" },
  { id: 9, cargo: "Supervisor de Alimentos y Bebidas", ciudad: "Medellín", departamento: "Antioquia", sector: "Restaurantes", contrato: "Obra o labor", salario: "$2.200.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 2 años", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Coordinación del equipo de servicio y cocina, control de estándares, manejo de inventarios y reportes de gestión.", icon: "restaurant_menu" },
  { id: 10, cargo: "Auxiliar Administrativo", ciudad: "Rionegro", departamento: "Antioquia", sector: "Servicios", contrato: "Obra o labor", salario: "$1.600.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 1 año", jornada: "Diurna", modalidad: "Presencial", funciones: "Gestión documental, archivo, atención de requerimientos y apoyo a las áreas administrativas.", icon: "description" },
  { id: 11, cargo: "Steward / Lavaplatos", ciudad: "Bogotá", departamento: "Cundinamarca", sector: "Restaurantes", contrato: "Obra o labor", salario: "$1.423.500", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Sin experiencia", jornada: "Turnos rotativos", modalidad: "Presencial", funciones: "Lavado de loza y utensilios, aseo del área de cocina y apoyo en la recepción de insumos.", icon: "countertops" },
  { id: 12, cargo: "Auxiliar de Logística", ciudad: "Cali", departamento: "Valle del Cauca", sector: "Logística", contrato: "Obra o labor", salario: "$1.550.000", salarioDetalle: "+ Auxilio de transporte · + Prestaciones de ley", experiencia: "Mínimo 6 meses", jornada: "Diurna", modalidad: "Presencial", funciones: "Coordinación de entregas, control de rutas, documentación de transporte y seguimiento de despachos.", icon: "local_shipping" },
];

const CIUDADES = ["Todas", "Medellín", "Bogotá", "Cali", "Cartagena", "Barranquilla", "Rionegro"];
const FILTROS = [
  { key: "sector", label: "Sector", opciones: ["Todos", "Hotelería", "Restaurantes", "Logística", "Industrial", "Servicios"] },
  { key: "modalidad", label: "Modalidad", opciones: ["Todas", "Presencial"] },
  { key: "experiencia", label: "Experiencia", opciones: ["Todas", "Sin experiencia", "Mínimo 6 meses", "Mínimo 1 año", "Mínimo 2 años"] },
  { key: "contrato", label: "Contrato", opciones: ["Todos", "Obra o labor"] },
] as const;

const MARKETING_EMAIL = "marketingdigital@asignar.com.co";

/* ---------- Estilos de formulario ---------- */
const labelCls = "font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]";
const baseInput = "w-full bg-surface border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors";
const inputCls = (err?: boolean) => `${baseInput} ${err ? "border-red-400 focus:border-red-500" : "border-border focus:border-brand-blue"}`;

/* ============================================================
   Chip de filtro (estilo Magneto: botón + popover)
   ============================================================ */
function FilterChip({
  label, value, opciones, onChange, open, onToggle,
}: {
  label: string; value: string; opciones: readonly string[];
  onChange: (v: string) => void; open: boolean; onToggle: () => void;
}) {
  const activo = value !== opciones[0];
  return (
    <div className="relative" data-chip>
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 font-[var(--font-ui)] text-[13px] font-semibold transition-colors ${
          activo
            ? "border-brand-blue bg-brand-blue/[0.06] text-brand-blue"
            : "border-border bg-white text-brand-navy hover:border-brand-blue/40"
        }`}
      >
        {activo ? value : label}
        <span className={`material-symbols-outlined text-[18px] transition-transform ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 z-40 w-56 rounded-2xl border border-border bg-white p-1.5 shadow-[0_16px_40px_-16px_rgba(0,18,51,0.3)] animate-[fadeIn_0.15s_ease-out]">
          {opciones.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-[var(--font-body)] text-sm transition-colors ${
                value === o ? "bg-brand-blue/[0.06] text-brand-blue font-semibold" : "text-text-secondary hover:bg-surface"
              }`}
            >
              {o}
              {value === o && <span className="material-symbols-outlined text-[18px]">check</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Ítem de la lista (columna izquierda)
   ============================================================ */
function VacanteItem({ v, active, onClick }: { v: Vacante; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border p-4 transition-all ${
        active
          ? "border-brand-blue bg-brand-blue/[0.04] shadow-[0_10px_30px_-18px_rgba(0,122,254,0.5)]"
          : "border-border bg-white hover:border-brand-blue/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${active ? "bg-brand-blue text-white" : "bg-brand-blue/10 text-brand-blue"}`}>
          <span className="material-symbols-outlined text-[22px]">{v.icon}</span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-[var(--font-display)] text-[15px] font-bold text-brand-navy leading-snug">{v.cargo}</h3>
            {v.destacada && (
              <span className="shrink-0 inline-flex items-center rounded-full bg-brand-blue/10 px-2 py-0.5 font-[var(--font-ui)] text-[9px] font-semibold uppercase tracking-wide text-brand-blue">
                Destacada
              </span>
            )}
          </div>
          <p className="mt-0.5 flex items-center gap-1 font-[var(--font-body)] text-[12.5px] text-text-muted">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {v.ciudad} · {v.sector}
          </p>
          <p className="mt-1.5 font-[var(--font-display)] text-sm font-extrabold text-brand-navy">
            {v.salario} <span className="font-[var(--font-body)] text-[11px] font-normal text-text-muted">/ mes</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[v.contrato, v.jornada].map((c) => (
              <span key={c} className="rounded-full bg-surface-gray px-2 py-0.5 font-[var(--font-ui)] text-[10.5px] font-medium text-text-secondary">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

/* ============================================================
   Panel de detalle + formulario (columna derecha)
   Fluye con el scroll del contenedor padre — sin scroll anidado.
   Envío interino por correo a marketing (automatización lee/enruta).
   TODO(TI): conectar al backend/endpoint real de postulación.
   ============================================================ */
function DetailPanel({ v, onClose }: { v: Vacante; onClose?: () => void }) {
  const [form, setForm] = useState({ nombre: "", tipoDoc: "CC", documento: "", edad: "", telefono: "", whatsapp: "", hojaVida: "", consent: false });
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const set = (k: string, val: string | boolean) => {
    setForm((f) => ({ ...f, [k]: val }));
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
      `Cargo: ${v.cargo}`,
      `Ciudad: ${v.ciudad}, ${v.departamento}`,
      `Sector: ${v.sector}`,
      "",
      `Nombres: ${form.nombre}`,
      `Documento: ${form.tipoDoc} ${form.documento}`,
      `Edad: ${form.edad}`,
      `Teléfono: ${form.telefono}`,
      `WhatsApp: ${form.whatsapp || "—"}`,
      form.hojaVida ? `Hoja de vida: ${form.hojaVida} (adjuntar a este correo)` : "",
      "",
      "— Autorizo el tratamiento de mis datos personales (Ley 1581 de 2012).",
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:${MARKETING_EMAIL}?subject=${encodeURIComponent(`Postulación — ${v.cargo} (${v.ciudad})`)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  };

  return (
    <div className="rounded-3xl border border-border bg-white overflow-hidden">
      {/* Info del cargo */}
      <div className="relative bg-brand-gradient text-white p-6 md:p-7">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        {onClose && (
          <button type="button" onClick={onClose} aria-label="Cerrar" className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white lg:hidden">
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 font-[var(--font-ui)] text-[11px] font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Vacante activa
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-2xl md:text-[28px] font-extrabold leading-tight">{v.cargo}</h2>
          <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/80">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            {v.ciudad}, {v.departamento}
          </p>

          <div className="mt-5 rounded-2xl bg-white/10 border border-white/15 p-4">
            <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-wide text-white/60">Salario mensual</p>
            <p className="font-[var(--font-display)] text-2xl font-extrabold">{v.salario}</p>
            <p className="font-[var(--font-body)] text-[12px] text-white/70 mt-0.5">{v.salarioDetalle}</p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {[
              { i: "work_history", l: "Experiencia", val: v.experiencia },
              { i: "assignment", l: "Contrato", val: v.contrato },
              { i: "schedule", l: "Jornada", val: v.jornada },
              { i: "business", l: "Modalidad", val: v.modalidad },
            ].map((h) => (
              <div key={h.l} className="rounded-xl bg-white/[0.07] border border-white/10 p-3">
                <span className="material-symbols-outlined text-brand-light-blue text-[19px]">{h.i}</span>
                <p className="mt-1 font-[var(--font-ui)] text-[10px] font-semibold uppercase tracking-wide text-white/55">{h.l}</p>
                <p className="font-[var(--font-body)] text-[13px] font-medium text-white leading-snug">{h.val}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-wide text-white/55 mb-1.5">Funciones principales</p>
            <p className="font-[var(--font-body)] text-[13px] text-white/85 leading-relaxed">{v.funciones}</p>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-6 md:p-7">
        {enviado ? (
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
              <span className="material-symbols-outlined text-brand-blue text-3xl">mark_email_read</span>
            </div>
            <h3 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-2">¡Postulación lista!</h3>
            <p className="font-[var(--font-body)] text-sm text-text-secondary max-w-xs">
              Se abrió tu correo con la postulación diligenciada. Si tienes hoja de vida, adjúntala antes de enviar. Nuestro equipo te contactará muy pronto.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <h3 className="font-[var(--font-display)] text-lg font-extrabold text-brand-navy">Postúlate a esta vacante</h3>
              <p className="flex items-center gap-1.5 font-[var(--font-body)] text-[13px] text-text-muted mt-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> Te toma menos de 2 minutos
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div>
                <label htmlFor="ap-nombre" className={labelCls}>Nombres completos <span className="text-red-500">*</span></label>
                <input id="ap-nombre" type="text" value={form.nombre} onChange={(e) => set("nombre", e.target.value)} placeholder="Ej. María Camila López Restrepo" className={inputCls(!!errores.nombre)} />
                {errores.nombre && <p className="mt-1 text-[11px] text-red-500">{errores.nombre}</p>}
              </div>
              <div className="grid grid-cols-[104px_1fr] gap-3">
                <div>
                  <label htmlFor="ap-tipodoc" className={labelCls}>Tipo ID</label>
                  <select id="ap-tipodoc" value={form.tipoDoc} onChange={(e) => set("tipoDoc", e.target.value)} className={`${inputCls()} appearance-none`}>
                    {["CC", "CE", "PPT", "PA"].map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="ap-doc" className={labelCls}>Número de documento <span className="text-red-500">*</span></label>
                  <input id="ap-doc" type="text" inputMode="numeric" value={form.documento} onChange={(e) => set("documento", e.target.value)} placeholder="Sin puntos ni comas" className={inputCls(!!errores.documento)} />
                  {errores.documento && <p className="mt-1 text-[11px] text-red-500">{errores.documento}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="ap-edad" className={labelCls}>Edad <span className="text-red-500">*</span></label>
                  <input id="ap-edad" type="number" inputMode="numeric" min={18} max={70} value={form.edad} onChange={(e) => set("edad", e.target.value)} placeholder="Años" className={inputCls(!!errores.edad)} />
                  {errores.edad && <p className="mt-1 text-[11px] text-red-500">{errores.edad}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ap-tel" className={labelCls}>Teléfono <span className="text-red-500">*</span></label>
                  <input id="ap-tel" type="tel" inputMode="tel" value={form.telefono} onChange={(e) => set("telefono", e.target.value)} placeholder="Ej. 300 123 4567" className={inputCls(!!errores.telefono)} />
                  {errores.telefono && <p className="mt-1 text-[11px] text-red-500">{errores.telefono}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="ap-wa" className={labelCls}>WhatsApp <span className="text-text-muted font-normal">(opcional)</span></label>
                <input id="ap-wa" type="tel" inputMode="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="Ej. 300 123 4567" className={inputCls()} />
              </div>
              <div>
                <label className={labelCls}>Hoja de vida <span className="text-text-muted font-normal">(opcional)</span></label>
                <label htmlFor="ap-cv" className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-surface px-4 py-5 cursor-pointer hover:border-brand-blue/50 transition-colors text-center">
                  <span className="material-symbols-outlined text-brand-blue text-2xl">upload_file</span>
                  <span className="font-[var(--font-body)] text-[13px] text-text-secondary">
                    {form.hojaVida ? <strong className="text-brand-navy">{form.hojaVida}</strong> : <>Adjunta tu HV — <strong className="text-brand-blue">selecciona</strong></>}
                  </span>
                  <span className="font-[var(--font-ui)] text-[11px] text-text-muted">PDF o Word · máx. 5 MB</span>
                  <input id="ap-cv" type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => set("hojaVida", e.target.files?.[0]?.name || "")} />
                </label>
              </div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue" />
                <span className="font-[var(--font-body)] text-[12px] text-text-secondary leading-snug">
                  Autorizo el tratamiento de mis datos personales conforme a la{" "}
                  <a href="https://www.asignar.com.co/build/img/Politica_Tratamiento_Datos_Personales.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">política de datos</a>{" "}(Ley 1581 de 2012).
                </span>
              </label>
              {errores.consent && <p className="-mt-2 text-[11px] text-red-500">{errores.consent}</p>}
              <button type="submit" className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:-translate-y-0.5 transition-transform">
                Postularme ahora
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Portal de vacantes
   ============================================================ */
export default function VacantesClient() {
  const [query, setQuery] = useState("");
  const [ciudad, setCiudad] = useState("Todas");
  const [sector, setSector] = useState("Todos");
  const [modalidad, setModalidad] = useState("Todas");
  const [experiencia, setExperiencia] = useState("Todas");
  const [contrato, setContrato] = useState("Todos");
  const [openChip, setOpenChip] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number>(vacantes[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const listaRef = useRef<HTMLDivElement>(null);

  const setters: Record<string, (v: string) => void> = {
    sector: setSector, modalidad: setModalidad, experiencia: setExperiencia, contrato: setContrato,
  };
  const valores: Record<string, string> = { sector, modalidad, experiencia, contrato };

  // Cerrar popover de filtros al hacer clic afuera
  useEffect(() => {
    if (!openChip) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-chip]")) setOpenChip(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openChip]);

  // Bloqueo de scroll + Escape para el overlay móvil
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vacantes.filter((v) => {
      if (ciudad !== "Todas" && v.ciudad !== ciudad) return false;
      if (sector !== "Todos" && v.sector !== sector) return false;
      if (modalidad !== "Todas" && v.modalidad !== modalidad) return false;
      if (experiencia !== "Todas" && v.experiencia !== experiencia) return false;
      if (contrato !== "Todos" && v.contrato !== contrato) return false;
      if (q && !v.cargo.toLowerCase().includes(q) && !v.sector.toLowerCase().includes(q) && !v.funciones.toLowerCase().includes(q) && !v.ciudad.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, ciudad, sector, modalidad, experiencia, contrato]);

  // La vacante seleccionada siempre debe existir dentro del filtro
  const selected = filtered.find((v) => v.id === selectedId) ?? filtered[0] ?? null;

  const hayFiltros = query !== "" || ciudad !== "Todas" || sector !== "Todos" || modalidad !== "Todas" || experiencia !== "Todas" || contrato !== "Todos";
  const limpiar = useCallback(() => {
    setQuery(""); setCiudad("Todas"); setSector("Todos"); setModalidad("Todas"); setExperiencia("Todas"); setContrato("Todos");
  }, []);

  const selectVacante = (id: number, abrirMovil = false) => {
    setSelectedId(id);
    if (abrirMovil) setMobileOpen(true);
  };

  return (
    <>
      {/* ---------- Banner de búsqueda (estilo portal) ---------- */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/home/hero.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-16 py-10 md:py-14 text-center md:text-left">
          <p className="font-[var(--font-display)] text-2xl md:text-[32px] font-extrabold text-white leading-tight">
            Encuentra tu próximo empleo
          </p>
          <p className="font-[var(--font-body)] text-sm md:text-base text-white/70 mt-1.5">
            {vacantes.length} vacantes activas en hotelería, restaurantes, logística e industria.
          </p>

          {/* Barra de búsqueda */}
          <div className="mt-6 flex flex-col md:flex-row gap-2.5 md:gap-0 md:rounded-full md:bg-white md:p-1.5 md:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]">
            <div className="relative flex-1 flex items-center gap-2 bg-white rounded-full md:rounded-none px-4 py-3 md:py-2">
              <span className="material-symbols-outlined text-brand-blue">work</span>
              <input
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Cargo, sector o palabra clave"
                aria-label="Buscar por cargo"
                className="w-full bg-transparent outline-none font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted"
              />
            </div>
            <div className="hidden md:block w-px my-1.5 bg-border" />
            <div className="relative flex items-center gap-2 bg-white rounded-full md:rounded-none px-4 py-3 md:py-2 md:min-w-[220px]">
              <span className="material-symbols-outlined text-brand-blue">location_on</span>
              <select
                value={ciudad} onChange={(e) => setCiudad(e.target.value)}
                aria-label="Ciudad"
                className="w-full bg-transparent outline-none appearance-none cursor-pointer font-[var(--font-body)] text-sm text-text-primary"
              >
                {CIUDADES.map((c) => <option key={c} value={c}>{c === "Todas" ? "Todas las ciudades" : c}</option>)}
              </select>
              <span className="material-symbols-outlined text-text-muted text-[18px] pointer-events-none">expand_more</span>
            </div>
            <button
              type="button"
              onClick={() => listaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-6 py-3 md:py-2 rounded-full hover:bg-brand-deep-blue transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Filtros (estilo Magneto) ---------- */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-4 flex flex-wrap items-center gap-2.5">
          <span className="hidden sm:inline-flex items-center gap-1 font-[var(--font-ui)] text-[13px] font-semibold text-text-muted mr-1">
            <span className="material-symbols-outlined text-[18px]">tune</span> Filtrar
          </span>
          {FILTROS.map((f) => (
            <FilterChip
              key={f.key}
              label={f.label}
              value={valores[f.key]}
              opciones={f.opciones}
              open={openChip === f.key}
              onToggle={() => setOpenChip(openChip === f.key ? null : f.key)}
              onChange={(v) => { setters[f.key](v); setOpenChip(null); }}
            />
          ))}
          {hayFiltros && (
            <button type="button" onClick={limpiar} className="inline-flex items-center gap-1 font-[var(--font-ui)] text-[13px] font-semibold text-text-muted hover:text-brand-blue transition-colors">
              <span className="material-symbols-outlined text-[16px]">close</span> Limpiar
            </button>
          )}
        </div>
      </section>

      {/* ---------- Dos bloques: lista + detalle ---------- */}
      <section className="bg-surface" ref={listaRef}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-6 md:py-8">
          <p className="font-[var(--font-ui)] text-sm text-text-muted mb-4">
            <strong className="text-brand-navy">{filtered.length}</strong> {filtered.length === 1 ? "vacante encontrada" : "vacantes encontradas"}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-text-muted/30 mb-3 block">search_off</span>
              <p className="font-[var(--font-display)] text-lg font-bold text-brand-navy mb-2">No hay vacantes con esos filtros</p>
              <p className="font-[var(--font-body)] text-sm text-text-secondary">
                Prueba con otros filtros o envía tu hoja de vida a{" "}
                <a href={`mailto:${MARKETING_EMAIL}`} className="text-brand-blue underline">{MARKETING_EMAIL}</a>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,380px)_1fr] gap-6 lg:items-start">
              {/* Lista — scroll propio en desktop */}
              <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1 lg:pb-2">
                {filtered.map((v) => (
                  <VacanteItem
                    key={v.id}
                    v={v}
                    active={selected?.id === v.id}
                    onClick={() => selectVacante(v.id, true)}
                  />
                ))}
              </div>

              {/* Detalle — usa el scroll de la página (sin scroll anidado) */}
              <div className="hidden lg:block">
                {selected && <DetailPanel key={selected.id} v={selected} />}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------- Overlay móvil de detalle ---------- */}
      {mobileOpen && selected && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-brand-navy/60 backdrop-blur-sm overflow-y-auto animate-[fadeIn_0.2s_ease-out]" onClick={() => setMobileOpen(false)}>
          <div className="min-h-full flex items-start justify-center p-3 pt-6" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-w-lg">
              <DetailPanel key={selected.id} v={selected} onClose={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
