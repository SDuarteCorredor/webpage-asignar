"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  PROPUESTA_ANCHOR_ID,
  SERVICIOS_OPCIONES,
  usePropuesta,
} from "./PropuestaProvider";

/* ============================================================
   Formulario "Solicita tu propuesta" (hero de /servicios)

   IMPORTANTE — el correo que genera está acoplado a la automatización
   n8n "Cotizaciones - Solicitudes Comercial (Paula)":

   · El disparador de Gmail filtra por  subject:(Nuevo Contacto empresarial)
     → NO cambiar ASUNTO_AUTOMATIZACION sin ajustar el flujo.
   · El nodo "Extraer datos" lee el cuerpo con etiquetas exactas
     (Empresa, NIT, Nombre del contacto, Cargo, Email de contacto,
     Teléfono, Ciudad, Dirección, Mensaje) → conservar los nombres
     y el orden, con "Mensaje" al final porque su regex captura
     multilínea hasta el final del correo.
   · Sin "Email de contacto" el flujo cae en la rama REVISAR y alguien
     tiene que responder a mano → por eso el correo es obligatorio.

   TODO(TI): reemplazar el mailto por un POST a un endpoint propio que
   registre la solicitud y dispare la automatización del lado del servidor.
   ============================================================ */
const COMERCIAL_EMAIL = "comercialbog@asignar.com.co";
/* Copia a gerencia y coordinación, como hacía el formulario anterior.
   La automatización solo corre sobre el buzón comercial. */
const COMERCIAL_CC = ["gerenciaop@asignar.com.co", "coorantioquia@asignar.com.co"];
const ASUNTO_AUTOMATIZACION = "Nuevo Contacto empresarial";

const CIUDADES = [
  "Medellín",
  "Rionegro",
  "Bogotá",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Santa Marta",
  "Pereira",
  "Manizales",
  "Otra",
];

const labelCls =
  "font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]";
const baseInput =
  "w-full bg-surface border rounded-xl px-3.5 py-[12px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors";
const inputCls = (err?: boolean) =>
  `${baseInput} ${err ? "border-red-400 focus:border-red-500" : "border-border focus:border-brand-blue"}`;
const errorCls = "mt-1 font-[var(--font-ui)] text-[11px] text-red-500";

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PropuestaForm() {
  const { servicio, setServicio, mensaje, setMensaje } = usePropuesta();

  const [empresa, setEmpresa] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("Medellín");
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const e: Record<string, string> = {};
    if (!empresa.trim()) e.empresa = "Ingresa el nombre de tu empresa.";
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!email.trim()) e.email = "El correo es obligatorio para responderte.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Correo no válido.";
    if (!telefono.trim()) e.telefono = "Ingresa un teléfono de contacto.";
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validar()) return;

    // El orden y las etiquetas los consume el parser de n8n. "Mensaje" va al final.
    const cuerpo = [
      `Empresa: ${empresa}`,
      `Nombre del contacto: ${nombre}`,
      `Email de contacto: ${email}`,
      `Teléfono: ${telefono}`,
      `Ciudad: ${ciudad}`,
      `Servicio de interés: ${servicio || "Por definir"}`,
      "",
      `Mensaje: ${mensaje || "Solicito una propuesta comercial."}`,
    ].join("\n");

    window.location.href =
      `mailto:${COMERCIAL_EMAIL}` +
      `?cc=${encodeURIComponent(COMERCIAL_CC.join(","))}` +
      `&subject=${encodeURIComponent(`${ASUNTO_AUTOMATIZACION} — ${empresa}`)}` +
      `&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  };

  const limpiar = () => {
    setEmpresa("");
    setNombre("");
    setEmail("");
    setTelefono("");
    setCiudad("Medellín");
    setServicio("");
    setMensaje("");
    setErrores({});
    setEnviado(false);
  };

  return (
    <div
      id={PROPUESTA_ANCHOR_ID}
      className="w-full lg:w-[440px] shrink-0 scroll-mt-28 bg-white border border-border rounded-3xl p-7 md:p-8 shadow-[0_24px_56px_-20px_rgba(0,18,51,0.12)]"
    >
      {enviado ? (
        <div className="text-center py-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
            <span className="material-symbols-outlined text-brand-blue text-3xl">
              mark_email_read
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-2">
            Tu solicitud está lista para enviar
          </h2>
          <p className="font-[var(--font-body)] text-sm text-text-secondary mb-6">
            Abrimos tu correo con la solicitud diligenciada. Al enviarlo recibirás
            nuestro portafolio y un asesor te contactará en menos de 24 horas
            hábiles.
          </p>
          <button
            type="button"
            onClick={limpiar}
            className="inline-flex items-center justify-center gap-2 border-[1.5px] border-border font-[var(--font-ui)] text-sm font-semibold text-brand-navy px-6 py-3 rounded-full hover:bg-surface transition-colors"
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h2 className="font-[var(--font-display)] text-[23px] font-extrabold text-brand-navy tracking-[-0.46px] mb-2">
              Solicita tu propuesta
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="font-[var(--font-body)] text-[13px] text-text-muted">
                Respuesta en menos de 24 h · sin compromiso
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="pf-empresa" className={labelCls}>
                Empresa <span className="text-red-500">*</span>
              </label>
              <input
                id="pf-empresa"
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Nombre de tu empresa"
                className={inputCls(!!errores.empresa)}
              />
              {errores.empresa && <p className={errorCls}>{errores.empresa}</p>}
            </div>

            <div>
              <label htmlFor="pf-nombre" className={labelCls}>
                Nombre del contacto <span className="text-red-500">*</span>
              </label>
              <input
                id="pf-nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre completo"
                className={inputCls(!!errores.nombre)}
              />
              {errores.nombre && <p className={errorCls}>{errores.nombre}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="pf-email" className={labelCls}>
                  Correo <span className="text-red-500">*</span>
                </label>
                <input
                  id="pf-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@empresa.com"
                  className={inputCls(!!errores.email)}
                />
                {errores.email && <p className={errorCls}>{errores.email}</p>}
              </div>
              <div>
                <label htmlFor="pf-tel" className={labelCls}>
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  id="pf-tel"
                  type="tel"
                  inputMode="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="300 000 0000"
                  className={inputCls(!!errores.telefono)}
                />
                {errores.telefono && <p className={errorCls}>{errores.telefono}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="pf-ciudad" className={labelCls}>
                  Ciudad
                </label>
                <select
                  id="pf-ciudad"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  className={`${inputCls()} appearance-none`}
                >
                  {CIUDADES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pf-servicio" className={labelCls}>
                  Servicio de interés
                </label>
                <select
                  id="pf-servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className={`${inputCls()} appearance-none`}
                >
                  <option value="">Selecciona…</option>
                  {SERVICIOS_OPCIONES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="pf-mensaje" className={labelCls}>
                ¿Qué necesitas?
              </label>
              <textarea
                id="pf-mensaje"
                rows={3}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Ej. 15 meseros para eventos de fin de año, turnos rotativos…"
                className={`${inputCls()} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:-translate-y-0.5 transition-transform"
            >
              <span>Enviar solicitud</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="font-[var(--font-body)] text-xs text-text-muted text-center">
              Tus datos están protegidos (Ley 1581 de 2012).
            </p>
          </form>
        </>
      )}
    </div>
  );
}
