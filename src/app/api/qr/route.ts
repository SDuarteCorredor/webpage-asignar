import QRCode from "qrcode";
import { SITE_URL } from "@/lib/site";

/**
 * QR de una vacante, en SVG.
 *
 *   /api/qr?v=<id>  →  código que apunta a  <mismo dominio>/vacantes?v=<id>
 *
 * Se genera en el servidor a propósito: la librería pesa bastante y no tiene
 * sentido mandarla al navegador para dibujar una imagen que además conviene
 * cachear. El SVG escala sin pixelarse, que importa si alguien lo imprime en
 * un volante o una valla.
 *
 * El QR apunta al **dominio desde el que se pidió**, no a `SITE_URL`. Así el
 * código que aparece en el preview de Vercel abre el preview, y el de
 * producción abre producción — que es lo que uno espera al escanearlo desde
 * el celular estando en esa misma página. `SITE_URL` queda de respaldo.
 *
 * Solo se acepta el id de la vacante, no texto libre: si no, sería un
 * generador de QR abierto con el dominio de Asignar de por medio.
 */

/* Depende del dominio de la petición, así que no se puede prerenderizar. */
export const dynamic = "force-dynamic";

/** Dominio desde el que llegó la petición, detrás del proxy de Vercel. */
function origenDe(request: Request): string {
  const h = request.headers;
  const host = h.get("x-forwarded-host") || h.get("host");
  if (!host) return SITE_URL;
  const proto = h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function GET(request: Request) {
  const id = (new URL(request.url).searchParams.get("v") ?? "").trim();

  // Los ids salen de una columna del Sheet, así que se acota a lo que puede
  // viajar en una URL sin escapes.
  if (!id || !/^[A-Za-z0-9._-]{1,40}$/.test(id)) {
    return new Response("Falta el parámetro v o no es un id válido", {
      status: 400,
    });
  }

  const destino = `${origenDe(request)}/vacantes?v=${encodeURIComponent(id)}`;

  const svg = await QRCode.toString(destino, {
    type: "svg",
    margin: 1,
    // Nivel M: tolera hasta un 15% de daño. Suficiente para impresión y no
    // agranda tanto la retícula como para que deje de leerse en pantalla.
    errorCorrectionLevel: "M",
    color: { dark: "#001233", light: "#FFFFFF" },
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      // Una hora y no un día: mientras se decide el dominio definitivo, un QR
      // cacheado de más seguiría apuntando al anterior.
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      Vary: "Host",
    },
  });
}
