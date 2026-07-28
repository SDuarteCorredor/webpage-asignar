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
