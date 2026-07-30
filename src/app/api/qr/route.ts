import QRCode from "qrcode";
import { SITE_URL } from "@/lib/site";

/**
 * QR de una vacante, en SVG.
 *
 *   /api/qr?v=<id>  →  código que apunta a  <sitio>/vacantes?v=<id>
 *
 * Se genera en el servidor a propósito: la librería pesa bastante y no tiene
 * sentido mandarla al navegador para dibujar una imagen que además conviene
 * cachear. El SVG escala sin pixelarse, que importa si alguien lo imprime en
 * un volante o una valla.
 *
 * Solo se acepta el id de la vacante, no texto libre: si no, sería un
 * generador de QR abierto con el dominio de Asignar de por medio.
 */

export const revalidate = 86400;

export async function GET(request: Request) {
  const id = (new URL(request.url).searchParams.get("v") ?? "").trim();

  // Los ids salen de una columna del Sheet, así que se acota a lo que puede
  // viajar en una URL sin escapes.
  if (!id || !/^[A-Za-z0-9._-]{1,40}$/.test(id)) {
    return new Response("Falta el parámetro v o no es un id válido", {
      status: 400,
    });
  }

  const destino = `${SITE_URL}/vacantes?v=${encodeURIComponent(id)}`;

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
      "Cache-Control": "public, max-age=86400, s-maxage=86400, immutable",
    },
  });
}
