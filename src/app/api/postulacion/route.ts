import { NextResponse } from "next/server";

/**
 * Recibe una postulación (incluida la hoja de vida) y la reenvía al flujo de
 * n8n, que resuelve a qué reclutador enrutarla y sube el archivo a Drive.
 *
 * Por qué pasa por aquí y no directo del navegador a n8n:
 *  · La URL del webhook queda del lado del servidor (no se expone ni se puede
 *    inundar desde afuera con la URL a la vista).
 *  · El correo del reclutador nunca llega al cliente: solo se envía el
 *    `vacanteId` y n8n lo busca en el Sheet con sus propias credenciales.
 *
 * Configuración: N8N_POSTULACION_WEBHOOK (variable de servidor).
 * Si no está definida, responde 503 y el formulario cae automáticamente al
 * envío por correo, que es como funciona hoy.
 */

const MAX_ARCHIVO_BYTES = 5 * 1024 * 1024; // 5 MB
const TIPOS_PERMITIDOS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: Request) {
  const webhook = process.env.N8N_POSTULACION_WEBHOOK;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, motivo: "webhook_no_configurado" },
      { status: 503 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, motivo: "form_invalido" }, { status: 400 });
  }

  // Campos mínimos para poder contactar al candidato.
  const requeridos = ["vacanteId", "nombre", "documento", "telefono"];
  const faltantes = requeridos.filter((c) => !String(form.get(c) ?? "").trim());
  if (faltantes.length) {
    return NextResponse.json(
      { ok: false, motivo: "campos_faltantes", campos: faltantes },
      { status: 400 }
    );
  }

  const archivo = form.get("hojaVida");
  if (archivo instanceof File && archivo.size > 0) {
    if (archivo.size > MAX_ARCHIVO_BYTES) {
      return NextResponse.json(
        { ok: false, motivo: "archivo_muy_grande" },
        { status: 413 }
      );
    }
    if (archivo.type && !TIPOS_PERMITIDOS.includes(archivo.type)) {
      return NextResponse.json(
        { ok: false, motivo: "tipo_no_permitido" },
        { status: 415 }
      );
    }
  }

  try {
    const res = await fetch(webhook, { method: "POST", body: form });
    if (!res.ok) throw new Error(`n8n respondió ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[postulacion] No se pudo enviar a n8n:", error);
    return NextResponse.json({ ok: false, motivo: "n8n_no_disponible" }, { status: 502 });
  }
}
