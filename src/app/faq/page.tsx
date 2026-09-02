import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";
import { PREGUNTAS_SCHEMA, respuestaEnTexto } from "@/components/faq/preguntas";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "SQR — Solicitudes, Quejas y Reclamos",
  description:
    "Radica y haz seguimiento a tu Solicitud, Queja, Reclamo o Sugerencia (SQR) en Asignar SAS. Respuesta en máximo 15 días hábiles. Incluye guía del trabajador misional.",
};

/**
 * Schema FAQPage. Se arma aquí (server component) para que quede en el HTML
 * servido: `FaqClient` es "use client" y los crawlers no ejecutan su JS.
 * Los datos salen de la misma fuente que pinta el acordeón, así que no hay
 * contenido duplicado ni riesgo de que el schema se desincronice.
 *
 * Solo entran las preguntas marcadas `enSchema !== false`: respuesta completa,
 * autocontenida y no promocional (guía de Google para FAQPage).
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Preguntas frecuentes del trabajador en misión — Asignar SAS",
  inLanguage: "es-CO",
  mainEntity: PREGUNTAS_SCHEMA.map((pregunta) => ({
    "@type": "Question",
    name: pregunta.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: respuestaEnTexto(pregunta),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD: `JSON.stringify` + escape de "<" para no romper el HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FaqClient />
    </>
  );
}
