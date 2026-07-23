"use client";

import { useState, useMemo, useEffect, useRef } from "react";

type Faq = { cat: string; q: string; a: string };

const faqs: Faq[] = [
  // Vinculación
  {
    cat: "Vinculación",
    q: "¿Cómo firmo mi contrato digital paso a paso?",
    a: `1. Entra a www.asignar.com.co/_admin/usuario.php
2. Tu usuario es tu número de cédula
3. Tu contraseña inicial es tu número de cédula
4. Ve a la sección «Contratos»
5. Selecciona el contrato pendiente
6. Crea o ingresa tu clave personal
7. Haz clic en «Firmar»

⚠️ Sin la firma no recibirás pagos ni liquidaciones.`,
  },
  {
    cat: "Vinculación",
    q: "¿Qué pasa si no firmo el contrato a tiempo?",
    a: `Sin la firma digital no podrás recibir pagos ni liquidaciones. Es el primer paso obligatorio. Si tienes problemas para firmar, contacta al área de vinculación antes de tu primer día de trabajo.`,
  },
  {
    cat: "Vinculación",
    q: "¿Qué documentos necesito para vincularme?",
    a: `Cédula vigente, hoja de vida actualizada, certificado de estudios si el cargo lo requiere, y cuenta bancaria a tu nombre. El área de selección te indica si hay documentos adicionales según el cargo.`,
  },
  // Nómina y pagos
  {
    cat: "Nómina y pagos",
    q: "¿Cuáles son las fechas de pago?",
    a: `Depende de la empresa donde estés en misión:

• Esquema 1: corte el 15 y el 30 de cada mes
• Esquema 2: corte el 5 y el 20 de cada mes

Tu coordinador de Asignar te indica cuál aplica para tu caso.`,
  },
  {
    cat: "Nómina y pagos",
    q: "¿Cuánto me pagan por turno en una liquidación?",
    a: `El valor oficial es de $16.446 por turno trabajado. Puede variar según el tipo de contrato y cargo — confirma con nómina si tienes dudas.`,
  },
  {
    cat: "Nómina y pagos",
    q: "¿Dónde veo mi colilla de pago?",
    a: `Accede a la plataforma de Asignar con tu cédula. La colilla muestra el detalle de tu pago, deducciones y aportes. Si tienes problemas de acceso, contacta al área de nómina.`,
  },
  {
    cat: "Nómina y pagos",
    q: "¿Cuándo me pagan las prestaciones sociales?",
    a: `Las prestaciones (prima, cesantías, intereses, vacaciones) se causan durante el tiempo que estás vinculado y se liquidan al terminar el contrato o en las fechas de ley. Nómina te da el detalle exacto.`,
  },
  // Seguridad Social
  {
    cat: "Seguridad Social",
    q: "¿Cuándo tengo derecho a la seguridad social completa?",
    a: `Para el aporte completo a EPS, pensión y ARL debes cumplir UNA de estas condiciones:

• Haber trabajado 30 días continuos, o
• Que tus dos quincenas del mes sumen un SMLV o más

Si no cumples, el sistema hace un retiro y reingreso automático en afiliaciones.`,
  },
  {
    cat: "Seguridad Social",
    q: "¿Qué EPS puedo escoger?",
    a: `Puedes escoger entre las EPS habilitadas por Asignar. Al momento de la vinculación te presentan las opciones disponibles en tu ciudad. Si ya tienes EPS activa puedes continuar si está en las opciones.`,
  },
  {
    cat: "Seguridad Social",
    q: "¿Qué pasa si tengo un accidente en el trabajo?",
    a: `Repórtalo inmediatamente a tu supervisor en la empresa cliente y al área de SST de Asignar. La ARL cubre accidentes laborales. No esperes días para reportar — el tiempo es crítico para la cobertura.`,
  },
  // Terminaciones
  {
    cat: "Terminaciones",
    q: "Me llegó una terminación de contrato y sigo trabajando. ¿Qué significa?",
    a: `No entres en pánico. Al final de cada mes, Asignar hace un proceso masivo de terminaciones y renovaciones que es completamente normal.

Esto NO significa que te quedaste sin trabajo. Si sigues activo en tu misión, tu contrato se renueva automáticamente.`,
  },
  {
    cat: "Terminaciones",
    q: "¿Cómo sé si mi contrato fue renovado?",
    a: `Revisa la plataforma de Asignar con tu cédula — ahí aparecerá el nuevo contrato pendiente de firma. Debes firmarlo para completar el proceso.`,
  },
  {
    cat: "Terminaciones",
    q: "¿Cuánto me pagan cuando termina definitivamente mi contrato?",
    a: `Asignar liquida todas las prestaciones causadas: prima proporcional, cesantías con intereses y vacaciones proporcionales. El monto depende del tiempo trabajado y tu salario. Nómina hace el cálculo exacto.`,
  },
  // Marcación
  {
    cat: "Marcación",
    q: "¿Cómo marco mi asistencia?",
    a: `La marcación se hace en el dispositivo electrónico disponible en las instalaciones del cliente, según la fecha del turno. Escanea el código QR con tu celular, o ingresa al Módulo de Empleados con tu usuario y contraseña y selecciona «Marcar Asistencia» o «Ver Resumen de Asistencias». Es indispensable habilitar la ubicación (GPS) y autorizar el acceso a la cámara del dispositivo móvil.`,
  },
  {
    cat: "Marcación",
    q: "¿Qué pasa si no marco mi asistencia?",
    a: `La marcación es fundamental para el pago. Si no marcas puede afectar tu nómina de ese período. Si tuviste un problema con el dispositivo, repórtalo el mismo día para que se haga el ajuste a tiempo.`,
  },
  // SST
  {
    cat: "SST",
    q: "¿Tengo que hacer una inducción SST al entrar?",
    a: `Sí. Antes de empezar la misión debes recibir la inducción de Seguridad y Salud en el Trabajo. Te explica los riesgos de tu cargo, el uso de EPP y qué hacer ante emergencias o accidentes.`,
  },
  {
    cat: "SST",
    q: "¿Para qué son las pausas activas?",
    a: `Son descansos cortos y obligatorios que reducen el riesgo de lesiones musculares y mejoran la concentración. Son un beneficio para tu salud, no una pérdida de tiempo.`,
  },
];

const categorias = [
  "Todas",
  "Vinculación",
  "Nómina y pagos",
  "Seguridad Social",
  "Terminaciones",
  "Marcación",
  "SST",
];

// Permite enlazar a una categoría desde otras páginas: /faq#nomina
const slugToCat: Record<string, string> = {
  vinculacion: "Vinculación",
  nomina: "Nómina y pagos",
  "seguridad-social": "Seguridad Social",
  terminaciones: "Terminaciones",
  marcacion: "Marcación",
  sst: "SST",
};

// Tipos de SQR (Solicitud, Queja, Reclamo + Sugerencia/Felicitación)
const tiposSQR = [
  { valor: "Petición", desc: "Solicitud de información o de una gestión." },
  { valor: "Queja", desc: "Inconformidad con la atención o el servicio." },
  { valor: "Reclamo", desc: "Exigencia por una falla o incumplimiento." },
  { valor: "Sugerencia", desc: "Propuesta para mejorar nuestro servicio." },
  { valor: "Felicitación", desc: "Reconocimiento a una buena experiencia." },
];

const tiposDocumento = ["CC", "CE", "PPT", "Pasaporte", "NIT"];

const sedesSQR = [
  "Medellín",
  "Rionegro",
  "Bogotá",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Santa Marta",
  "Pereira",
  "Manizales",
  "Otra / No aplica",
];

const vinculos = [
  "Trabajador en misión",
  "Empresa cliente",
  "Aspirante / candidato",
  "Proveedor",
  "Otro",
];

const SQR_EMAIL = "sqr@asignar.com.co";

/* ---------- Estilos reutilizables de formulario ---------- */
const labelCls =
  "font-[var(--font-ui)] text-[12.5px] font-semibold text-brand-navy block mb-[7px]";
const baseInput =
  "w-full bg-surface border rounded-xl px-3.5 py-[13px] font-[var(--font-body)] text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors";
const inputCls = (err?: boolean) =>
  `${baseInput} ${err ? "border-red-400 focus:border-red-500" : "border-border focus:border-brand-blue"}`;
const errorCls = "mt-1 font-[var(--font-ui)] text-[11px] text-red-500";

type FormState = {
  tipo: string;
  nombre: string;
  tipoDoc: string;
  documento: string;
  email: string;
  telefono: string;
  sede: string;
  vinculo: string;
  asunto: string;
  mensaje: string;
  consent: boolean;
};

const emptyForm: FormState = {
  tipo: "Petición",
  nombre: "",
  tipoDoc: "CC",
  documento: "",
  email: "",
  telefono: "",
  sede: "Medellín",
  vinculo: "Trabajador en misión",
  asunto: "",
  mensaje: "",
  consent: false,
};

export default function FaqClient() {
  /* ---------- Estado del formulario SQR ---------- */
  const [modo, setModo] = useState<"radicar" | "seguimiento">("radicar");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errores, setErrores] = useState<Partial<Record<keyof FormState, string>>>({});
  const [enviado, setEnviado] = useState(false);

  // Seguimiento
  const [radicado, setRadicado] = useState("");
  const [docSeguimiento, setDocSeguimiento] = useState("");

  /* ---------- Estado de las preguntas frecuentes ---------- */
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Todas");
  const [openId, setOpenId] = useState<number | null>(null);
  const contenidoRef = useRef<HTMLElement>(null);

  // Si llegamos con un hash (#nomina, #sst…), preselecciona la categoría
  // y baja hasta el listado de preguntas.
  useEffect(() => {
    const aplicarHash = () => {
      const slug = window.location.hash.replace("#", "");
      const categoria = slugToCat[slug];
      if (!categoria) return;
      setCat(categoria);
      requestAnimationFrame(() =>
        contenidoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      );
    };
    aplicarHash();
    window.addEventListener("hashchange", aplicarHash);
    return () => window.removeEventListener("hashchange", aplicarHash);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .map((f, i) => ({ ...f, id: i }))
      .filter((f) => cat === "Todas" || f.cat === cat)
      .filter(
        (f) =>
          !q ||
          f.q.toLowerCase().includes(q) ||
          f.a.toLowerCase().includes(q)
      );
  }, [query, cat]);

  /* ---------- Handlers del formulario ---------- */
  const setCampo = (campo: keyof FormState, valor: string | boolean) => {
    setForm((f) => ({ ...f, [campo]: valor }));
    setErrores((e) => ({ ...e, [campo]: undefined }));
  };

  const validar = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre completo.";
    if (!form.documento.trim()) e.documento = "Ingresa tu número de documento.";
    if (!form.email.trim()) e.email = "Ingresa tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Correo no válido.";
    if (!form.telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    if (!form.asunto.trim()) e.asunto = "Escribe un asunto.";
    if (!form.mensaje.trim()) e.mensaje = "Describe tu solicitud.";
    if (!form.consent) e.consent = "Debes autorizar el tratamiento de datos.";
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  // Interino front-end: abre el correo con la SQR diligenciada.
  // TODO(TI): reemplazar por POST a un endpoint que genere el radicado y persista.
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validar()) return;

    const cuerpo = [
      `Tipo de solicitud: ${form.tipo}`,
      `Nombre: ${form.nombre}`,
      `Documento: ${form.tipoDoc} ${form.documento}`,
      `Correo: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Ciudad / sede: ${form.sede}`,
      `Vínculo con Asignar: ${form.vinculo}`,
      "",
      `Asunto: ${form.asunto}`,
      "",
      "Descripción:",
      form.mensaje,
      "",
      "— Autorizo el tratamiento de mis datos personales (Ley 1581 de 2012).",
    ].join("\n");

    const href = `mailto:${SQR_EMAIL}?subject=${encodeURIComponent(
      `SQR ${form.tipo} — ${form.asunto}`
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = href;
    setEnviado(true);
  };

  const handleSeguimiento = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!radicado.trim() || !docSeguimiento.trim()) return;
    const cuerpo = [
      `Solicito el estado de mi radicado.`,
      `Número de radicado: ${radicado}`,
      `Documento: ${docSeguimiento}`,
    ].join("\n");
    window.location.href = `mailto:${SQR_EMAIL}?subject=${encodeURIComponent(
      `Seguimiento SQR — Radicado ${radicado}`
    )}&body=${encodeURIComponent(cuerpo)}`;
  };

  const resetForm = () => {
    setForm(emptyForm);
    setErrores({});
    setEnviado(false);
  };

  return (
    <>
      {/* ---------- Hero (claro) ---------- */}
      <section className="bg-surface py-14 md:py-[72px]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="inline-block font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[1px] text-brand-blue bg-brand-blue/[0.09] rounded-full px-3 py-1.5 mb-5">
            Atención al usuario
          </span>
          <h1 className="font-[var(--font-display)] text-[32px] md:text-[44px] font-extrabold text-brand-navy leading-[1.06] tracking-[-0.8px] max-w-3xl mx-auto">
            Radica y haz seguimiento a tu{" "}
            <span className="text-brand-blue">SQR</span>
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mt-4">
            Solicitudes, quejas, reclamos, sugerencias y felicitaciones.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2">
            <span className="material-symbols-outlined text-brand-blue text-[18px]">
              schedule
            </span>
            <span className="font-[var(--font-ui)] text-[13px] font-semibold text-brand-navy">
              Respondemos en máximo 15 días hábiles · de forma confidencial
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Formulario SQR ---------- */}
      <section className="pb-14 md:pb-[72px] bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,500px)] gap-8 lg:gap-14 items-start">
            {/* Izquierda — contexto */}
            <div className="lg:pt-2">
              <h2 className="font-[var(--font-display)] text-2xl font-extrabold text-brand-navy mb-5">
                ¿Qué puedes radicar?
              </h2>
              <ul className="flex flex-col gap-3 mb-9">
                {tiposSQR.map((t) => (
                  <li key={t.valor} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                      <span className="material-symbols-outlined text-brand-blue text-[15px]">
                        check
                      </span>
                    </span>
                    <span>
                      <span className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                        {t.valor}.
                      </span>{" "}
                      <span className="font-[var(--font-body)] text-sm text-text-secondary">
                        {t.desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Canales de atención */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted mb-3">
                  Otros canales
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${SQR_EMAIL}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <span className="material-symbols-outlined text-lg">
                        mail
                      </span>
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-text-secondary group-hover:text-brand-blue transition-colors">
                      {SQR_EMAIL}
                    </span>
                  </a>
                  <a href="tel:+576043220310" className="group flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <span className="material-symbols-outlined text-lg">
                        call
                      </span>
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-text-secondary group-hover:text-brand-blue transition-colors">
                      (57) 604 322 0310
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <span className="material-symbols-outlined text-lg">
                        shield
                      </span>
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-text-secondary">
                      Tus datos se tratan de forma confidencial (Ley 1581 de
                      2012).
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Derecha — tarjeta con formulario */}
            <div className="w-full bg-white border border-border rounded-3xl p-6 md:p-8 shadow-[0_24px_56px_-20px_rgba(0,18,51,0.12)]">
              {/* Tabs */}
              <div className="flex gap-1 p-1 bg-surface-gray rounded-full mb-6">
                {(
                  [
                    ["radicar", "Radicar SQR"],
                    ["seguimiento", "Hacer seguimiento"],
                  ] as const
                ).map(([valor, texto]) => (
                  <button
                    key={valor}
                    type="button"
                    onClick={() => setModo(valor)}
                    className={`flex-1 font-[var(--font-ui)] text-[13.5px] font-semibold py-2.5 rounded-full transition-colors ${
                      modo === valor
                        ? "bg-white text-brand-blue shadow-sm"
                        : "text-text-muted hover:text-brand-navy"
                    }`}
                  >
                    {texto}
                  </button>
                ))}
              </div>

              {/* --- Radicar --- */}
              {modo === "radicar" &&
                (enviado ? (
                  <div className="text-center py-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                      <span className="material-symbols-outlined text-brand-blue text-3xl">
                        mark_email_read
                      </span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-xl font-bold text-brand-navy mb-2">
                      Tu solicitud está lista para enviar
                    </h3>
                    <p className="font-[var(--font-body)] text-sm text-text-secondary max-w-sm mx-auto mb-6">
                      Abrimos tu correo con la SQR diligenciada. Al enviarlo,
                      nuestro equipo te asignará un número de radicado y
                      responderá en un máximo de 15 días hábiles.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center justify-center gap-2 border-[1.5px] border-border font-[var(--font-ui)] text-sm font-semibold text-brand-navy px-6 py-3 rounded-full hover:bg-surface transition-colors"
                    >
                      Radicar otra solicitud
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]" noValidate>
                    {/* Tipo */}
                    <div>
                      <label htmlFor="sqr-tipo" className={labelCls}>
                        Tipo de solicitud
                      </label>
                      <select
                        id="sqr-tipo"
                        value={form.tipo}
                        onChange={(e) => setCampo("tipo", e.target.value)}
                        className={`${inputCls()} appearance-none`}
                      >
                        {tiposSQR.map((t) => (
                          <option key={t.valor} value={t.valor}>
                            {t.valor}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Nombre */}
                    <div>
                      <label htmlFor="sqr-nombre" className={labelCls}>
                        Nombres y apellidos <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sqr-nombre"
                        type="text"
                        value={form.nombre}
                        onChange={(e) => setCampo("nombre", e.target.value)}
                        aria-invalid={!!errores.nombre}
                        placeholder="Tu nombre completo"
                        className={inputCls(!!errores.nombre)}
                      />
                      {errores.nombre && <p className={errorCls}>{errores.nombre}</p>}
                    </div>

                    {/* Documento */}
                    <div className="grid grid-cols-[110px_1fr] gap-3">
                      <div>
                        <label htmlFor="sqr-tipodoc" className={labelCls}>
                          Tipo
                        </label>
                        <select
                          id="sqr-tipodoc"
                          value={form.tipoDoc}
                          onChange={(e) => setCampo("tipoDoc", e.target.value)}
                          className={`${inputCls()} appearance-none`}
                        >
                          {tiposDocumento.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="sqr-doc" className={labelCls}>
                          Número de documento <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="sqr-doc"
                          type="text"
                          inputMode="numeric"
                          value={form.documento}
                          onChange={(e) => setCampo("documento", e.target.value)}
                          aria-invalid={!!errores.documento}
                          placeholder="Sin puntos ni comas"
                          className={inputCls(!!errores.documento)}
                        />
                        {errores.documento && (
                          <p className={errorCls}>{errores.documento}</p>
                        )}
                      </div>
                    </div>

                    {/* Correo + Teléfono */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sqr-email" className={labelCls}>
                          Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="sqr-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setCampo("email", e.target.value)}
                          aria-invalid={!!errores.email}
                          placeholder="tucorreo@ejemplo.com"
                          className={inputCls(!!errores.email)}
                        />
                        {errores.email && <p className={errorCls}>{errores.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="sqr-tel" className={labelCls}>
                          Teléfono <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="sqr-tel"
                          type="tel"
                          inputMode="tel"
                          value={form.telefono}
                          onChange={(e) => setCampo("telefono", e.target.value)}
                          aria-invalid={!!errores.telefono}
                          placeholder="300 000 0000"
                          className={inputCls(!!errores.telefono)}
                        />
                        {errores.telefono && (
                          <p className={errorCls}>{errores.telefono}</p>
                        )}
                      </div>
                    </div>

                    {/* Sede + Vínculo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sqr-sede" className={labelCls}>
                          Ciudad / sede
                        </label>
                        <select
                          id="sqr-sede"
                          value={form.sede}
                          onChange={(e) => setCampo("sede", e.target.value)}
                          className={`${inputCls()} appearance-none`}
                        >
                          {sedesSQR.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="sqr-vinculo" className={labelCls}>
                          ¿Cómo te relacionas con Asignar?
                        </label>
                        <select
                          id="sqr-vinculo"
                          value={form.vinculo}
                          onChange={(e) => setCampo("vinculo", e.target.value)}
                          className={`${inputCls()} appearance-none`}
                        >
                          {vinculos.map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Asunto */}
                    <div>
                      <label htmlFor="sqr-asunto" className={labelCls}>
                        Asunto <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sqr-asunto"
                        type="text"
                        value={form.asunto}
                        onChange={(e) => setCampo("asunto", e.target.value)}
                        aria-invalid={!!errores.asunto}
                        placeholder="Resume tu solicitud en una frase"
                        className={inputCls(!!errores.asunto)}
                      />
                      {errores.asunto && <p className={errorCls}>{errores.asunto}</p>}
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="sqr-msg" className={labelCls}>
                        Descripción <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="sqr-msg"
                        rows={4}
                        value={form.mensaje}
                        onChange={(e) => setCampo("mensaje", e.target.value)}
                        aria-invalid={!!errores.mensaje}
                        placeholder="Cuéntanos con el mayor detalle posible: fechas, sede, empresa cliente, personas involucradas…"
                        className={`${inputCls(!!errores.mensaje)} resize-none`}
                      />
                      {errores.mensaje && <p className={errorCls}>{errores.mensaje}</p>}
                    </div>

                    {/* Consentimiento */}
                    <div>
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setCampo("consent", e.target.checked)}
                          aria-invalid={!!errores.consent}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue"
                        />
                        <span className="font-[var(--font-body)] text-[12.5px] text-text-secondary leading-snug">
                          Autorizo el tratamiento de mis datos personales conforme
                          a la{" "}
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
                      {errores.consent && <p className={errorCls}>{errores.consent}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Radicar solicitud
                      <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                  </form>
                ))}

              {/* --- Seguimiento --- */}
              {modo === "seguimiento" && (
                <form onSubmit={handleSeguimiento} className="flex flex-col gap-[18px]">
                  <p className="font-[var(--font-body)] text-sm text-text-secondary">
                    Ingresa el número de radicado que recibiste y tu documento
                    para consultar el estado de tu SQR.
                  </p>
                  <div>
                    <label htmlFor="seg-radicado" className={labelCls}>
                      Número de radicado
                    </label>
                    <input
                      id="seg-radicado"
                      type="text"
                      value={radicado}
                      onChange={(e) => setRadicado(e.target.value)}
                      placeholder="Ej. SQR-2026-00123"
                      className={inputCls()}
                    />
                  </div>
                  <div>
                    <label htmlFor="seg-doc" className={labelCls}>
                      Número de documento
                    </label>
                    <input
                      id="seg-doc"
                      type="text"
                      inputMode="numeric"
                      value={docSeguimiento}
                      onChange={(e) => setDocSeguimiento(e.target.value)}
                      placeholder="Sin puntos ni comas"
                      className={inputCls()}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-[15px] font-semibold py-[15px] rounded-full shadow-[0_8px_20px_-6px_rgba(0,122,254,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Consultar estado
                    <span className="material-symbols-outlined text-lg">search</span>
                  </button>
                  <p className="font-[var(--font-body)] text-xs text-text-muted text-center">
                    ¿Aún no tienes radicado?{" "}
                    <button
                      type="button"
                      onClick={() => setModo("radicar")}
                      className="text-brand-blue font-semibold"
                    >
                      Radica tu SQR
                    </button>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Preguntas frecuentes (dropdowns, abajo) ---------- */}
      <section
        ref={contenidoRef}
        className="scroll-mt-24 py-14 md:py-20 bg-white"
      >
        <div className="max-w-[860px] mx-auto px-4 md:px-6">
          <div className="text-center mb-9">
            <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue mb-3 block">
              Antes de radicar
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-brand-navy tracking-[-0.02em]">
              Preguntas frecuentes
            </h2>
            <p className="font-[var(--font-body)] text-sm text-text-secondary mt-3 max-w-lg mx-auto">
              Muchas dudas del trabajador misional ya tienen respuesta aquí.
              Busca la tuya antes de radicar una solicitud.
            </p>
          </div>

          {/* Buscador */}
          <div className="relative mb-5">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar pregunta…"
              aria-label="Buscar pregunta frecuente"
              className="w-full bg-surface rounded-full pl-12 pr-4 py-3.5 font-[var(--font-body)] text-sm text-text-primary border border-border focus-visible:outline-brand-blue"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`font-[var(--font-ui)] text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  cat === c
                    ? "bg-brand-blue text-white"
                    : "bg-surface text-text-secondary hover:bg-brand-blue/[0.06] hover:text-brand-blue"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Lista */}
          <div className="flex flex-col gap-3">
            {filtered.length === 0 && (
              <p className="text-center text-text-muted py-12 font-[var(--font-body)]">
                No encontramos preguntas para «{query}».
              </p>
            )}
            {filtered.map((f) => {
              const open = openId === f.id;
              return (
                <div
                  key={f.id}
                  className="bg-white rounded-2xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(open ? null : f.id)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4"
                  >
                    <span className="font-[var(--font-display)] text-base font-bold text-brand-navy">
                      {f.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-brand-blue shrink-0 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 md:px-6 pb-5 -mt-1">
                      <p className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA final → sube al formulario */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-brand-navy mb-2">
              ¿No encuentras tu respuesta?
            </h2>
            <p className="font-[var(--font-body)] text-sm text-text-secondary max-w-md mx-auto mb-6">
              Radica tu solicitud, queja, reclamo o sugerencia y nuestro equipo
              te responderá en un máximo de 15 días hábiles.
            </p>
            <a
              href="#top-sqr"
              onClick={(e) => {
                e.preventDefault();
                setModo("radicar");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-[var(--font-ui)] text-sm font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(0,122,254,0.39)] hover:-translate-y-0.5 transition-all"
            >
              <span className="material-symbols-outlined text-lg">edit_note</span>
              Radicar mi SQR
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
