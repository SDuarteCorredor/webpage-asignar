/**
 * Configuración del sitio.
 *
 * SITE_URL debe apuntar al dominio donde vive el sitio. Se usa para el
 * `metadataBase` (que resuelve las imágenes de Open Graph a URLs absolutas),
 * el sitemap y el robots.txt.
 *
 * Mientras el sitio viva en el preview de Vercel, define
 * NEXT_PUBLIC_SITE_URL en el proyecto para que apunte allí; al pasar a
 * producción basta con cambiar esa variable.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.asignar.com.co"
).replace(/\/$/, "");

/** Contenedor de Google Tag Manager. Vacío = no se carga el script. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PMHJBNJC";

/**
 * WhatsApp Business al que apunta el botón flotante, en formato E.164 sin el
 * "+" (como lo exige wa.me). Es la línea que después atenderá el chatbot.
 *
 * Se deja configurable por entorno para poder apuntarlo a un número de
 * pruebas sin tocar código. Vacío = el botón no se muestra, que es lo que
 * queremos si algún día se cambia de línea y aún no hay reemplazo.
 */
export const WHATSAPP_NUMERO = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMERO || "573143348744"
).replace(/\D/g, "");
