import { NextResponse } from "next/server";
import { getVacantes } from "@/lib/vacantes";

/**
 * Vacantes activas en JSON.
 *
 * Se resuelve en el servidor: la API key del Sheet nunca llega al navegador.
 * Devuelve solo columnas publicables — el correo del reclutador no se lee
 * (ver src/lib/vacantes.ts).
 *
 * Útil para n8n, el portal interno o cualquier otro consumidor.
 */
export const revalidate = 300;

export async function GET() {
  const { vacantes, fuente, motivo } = await getVacantes();
  return NextResponse.json(
    { total: vacantes.length, fuente, motivo, vacantes },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } }
  );
}
