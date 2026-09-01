import { SITE_URL } from "@/lib/site";

/**
 * Datos estructurados (JSON-LD) del sitio.
 *
 * El tipo es `EmploymentAgency` y no `LocalBusiness` a secas porque es el
 * subtipo exacto de Schema.org para una agencia de empleo / empresa de
 * servicios temporales. Entre más específico el tipo, mejor lo entienden
 * buscadores y motores de respuesta.
 *
 * Solo se declaran campos que se pueden respaldar con datos reales del sitio.
 * Inventar horarios o un NIT para "completar" el schema sería publicar datos
 * falsos de la empresa, y Google penaliza el marcado que no corresponde con lo
 * que ve en la página.
 *
 * PENDIENTE de confirmación del negocio, ya con el hueco listo para llenar:
 *  · `taxID`  → el NIT.
 *  · `openingHoursSpecification` → horarios de atención.
 *  · Las direcciones exactas de Barranquilla, Santa Marta, Pereira y
 *    Manizales, que hoy figuran solo por ciudad.
 */

/** Id estable del nodo de la organización, para poder referenciarlo desde
 *  otros schemas sin repetir todo el objeto. */
export const ORG_ID = `${SITE_URL}/#organizacion`;

const TELEFONO = "+576043220310";

/** Ciudades con presencia. Coincide con las sedes listadas en /contacto y
 *  /nosotros — si cambia una, cambian las tres. */
const CIUDADES = [
  "Medellín",
  "Rionegro",
  "Bogotá",
  "Cali",
  "Cartagena",
  "Barranquilla",
  "Santa Marta",
  "Pereira",
  "Manizales",
];

export const organizacionSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": ORG_ID,
  name: "Asignar SAS",
  alternateName: "Asignar Servicios Temporales",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-asignar.svg`,
  image: `${SITE_URL}/logo-asignar.svg`,
  description:
    "Empresa de Servicios Temporales colombiana con más de 20 años de operación. Servicios temporales, outsourcing y selección de personal para hotelería, restaurantes, centros de eventos, logística e industria.",
  foundingDate: "2006",
  telephone: TELEFONO,
  email: "comercialbog@asignar.com.co",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra. 48 #10-45, El Poblado",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  areaServed: CIUDADES.map((ciudad) => ({
    "@type": "City",
    name: ciudad,
  })),
  knowsLanguage: "es-CO",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: TELEFONO,
      email: "comercialbog@asignar.com.co",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "sqr@asignar.com.co",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },
  ],
  sameAs: [
    "https://www.instagram.com/asignar_sas",
    "https://www.linkedin.com/company/asignar-sas",
    "https://www.facebook.com/asignartemporal",
  ],
};

export const sitioWebSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#sitio`,
  url: SITE_URL,
  name: "Asignar SAS",
  inLanguage: "es-CO",
  publisher: { "@id": ORG_ID },
};

/**
 * Serializa un objeto a JSON-LD listo para inyectar en un `<script>`.
 * Escapa `<` a su equivalente unicode para que un texto con HTML adentro no
 * pueda cerrar la etiqueta ni inyectar marcado (el patrón que recomienda la
 * guía de JSON-LD de Next.js).
 */
export function aJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
