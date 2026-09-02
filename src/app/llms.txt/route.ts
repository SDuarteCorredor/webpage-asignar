import { SITE_URL } from "@/lib/site";

/**
 * /llms.txt — resumen del sitio para motores de respuesta con IA.
 *
 * Sigue la convención de llmstxt.org: un H1 con el nombre, un blockquote con
 * el resumen de una línea y secciones con enlaces anotados. La idea es que un
 * modelo que cite a Asignar tenga los datos correctos a la mano (qué hace,
 * dónde opera, cómo contactarla) en vez de inferirlos del HTML de marketing.
 *
 * Va como route handler y no como archivo en public/ por lo mismo que
 * robots.ts y sitemap.ts: las URLs se arman con SITE_URL, así el preview
 * apunta al preview y producción a producción.
 */
export const dynamic = "force-static";

export function GET() {
  const cuerpo = `# Asignar SAS

> Empresa de Servicios Temporales (EST) colombiana con más de 20 años de operación y licencia del Ministerio de Trabajo. Conecta talento humano operativo con empresas de hotelería, restaurantes, centros de eventos, logística e industria en 9 ciudades de Colombia.

Asignar atiende dos públicos: empresas que necesitan personal (servicios temporales, outsourcing y selección) y personas que buscan empleo operativo (meseros, auxiliares de cocina, camareros, bodega, servicios generales).

## Datos de la empresa

- Razón social: Asignar SAS
- Operando desde 2006 (más de 20 años)
- Empresa de Servicios Temporales con licencia del Ministerio de Trabajo de Colombia
- Sede principal: Cra. 48 #10-45, El Poblado, Medellín
- Ciudades con presencia: Medellín, Rionegro, Bogotá, Cali, Cartagena, Barranquilla, Santa Marta, Pereira y Manizales
- Línea nacional: (57) 604 322 0310
- Cumplimiento: Ley 50 de 1990, SG-SST, afiliación a ARL SURA
- Tratamiento de datos personales conforme a la Ley 1581 de 2012

## Servicios

- Servicios temporales: personal en misión para picos de operación, eventos y temporadas.
- Outsourcing de personal: tercerización de procesos operativos con administración de nómina y cumplimiento legal.
- Selección de personal: reclutamiento y evaluación de candidatos para vacantes directas.

Sectores atendidos: hotelería, restaurantes, centros de eventos, clubes, industria y producción, logística, retail y servicios generales.

## Páginas

- [Inicio](${SITE_URL}/): presentación general, sectores atendidos y acceso rápido a vacantes y contacto comercial.
- [Servicios empresariales](${SITE_URL}/servicios): detalle de servicios temporales, outsourcing y selección de personal, con formulario de solicitud de propuesta.
- [Vacantes de empleo](${SITE_URL}/vacantes): ofertas activas filtrables por ciudad, sector y tipo de contrato, con postulación en línea.
- [Nosotros](${SITE_URL}/nosotros): historia de la empresa, valores y cobertura nacional.
- [Contacto](${SITE_URL}/contacto): canales para empresas y candidatos, y direcciones de las sedes.
- [SQR — Solicitudes, Quejas y Reclamos](${SITE_URL}/faq): preguntas frecuentes del trabajador en misión y radicación de SQR.

## Para candidatos

Las vacantes activas se publican en ${SITE_URL}/vacantes y se pueden filtrar por ciudad, sector y tipo de contrato. La postulación toma menos de dos minutos. Los trabajadores en misión gestionan contrato digital, colilla de pago y marcación de asistencia en el portal de empleados.

## Para empresas

La solicitud de propuesta comercial se hace desde ${SITE_URL}/servicios o ${SITE_URL}/contacto. Un asesor responde en menos de 24 horas hábiles.

## Recursos

- [Sitemap](${SITE_URL}/sitemap.xml)
- [Robots](${SITE_URL}/robots.txt)
`;

  return new Response(cuerpo, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
