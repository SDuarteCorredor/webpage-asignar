"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

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

export default function FaqClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Todas");
  const [openId, setOpenId] = useState<number | null>(null);
  const contenidoRef = useRef<HTMLElement>(null);

  // Si llegamos con un hash (#nomina, #sst…), preselecciona la categoría
  // y baja hasta el listado.
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

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.1em] text-brand-gold mb-3 block">
            Trabajador misional
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-white leading-tight">
            Preguntas frecuentes
          </h1>
          <p className="font-[var(--font-body)] text-base md:text-lg text-white/80 max-w-2xl mt-3">
            Todo lo que necesitas saber sobre tu vinculación, pagos, seguridad
            social y más. Si no encuentras tu respuesta, radica tu PQR.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section
        ref={contenidoRef}
        className="scroll-mt-24 py-12 md:py-16 bg-surface min-h-[60vh]"
      >
        <div className="max-w-[860px] mx-auto px-4 md:px-6">
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
              className="w-full bg-white rounded-full pl-12 pr-4 py-3.5 font-[var(--font-body)] text-sm text-text-primary card-elevated focus-visible:outline-brand-blue"
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
                    : "bg-white text-text-secondary hover:bg-brand-blue/[0.06] hover:text-brand-blue"
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
                  className="bg-white rounded-2xl card-elevated overflow-hidden"
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

          {/* CTA PQR */}
          <div className="mt-12 bg-brand-gradient rounded-2xl p-8 text-center text-white">
            <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-bold mb-2">
              ¿No encuentras tu respuesta?
            </h2>
            <p className="font-[var(--font-body)] text-sm text-white/80 max-w-md mx-auto mb-6">
              Radica tu petición, queja, reclamo o sugerencia (PQR) y nuestro
              equipo te responderá.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:sqr@asignar.com.co?subject=PQR%20-%20Trabajador%20misional"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-[var(--font-ui)] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-surface transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Radicar PQR
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-[var(--font-ui)] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
