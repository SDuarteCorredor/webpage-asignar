/**
 * Autenticación con Google mediante cuenta de servicio.
 *
 * Se usa en vez de una API key porque la organización tiene bloqueada la
 * creación de claves de API. Ventaja adicional: la cuenta de servicio sí es
 * una identidad, así que el Sheet se comparte **solo con ella** en vez de
 * quedar accesible para cualquiera con el enlace.
 *
 * Variables de entorno (de servidor, sin NEXT_PUBLIC_):
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL — el `client_email` del JSON
 *   GOOGLE_SERVICE_ACCOUNT_KEY   — el `private_key` del JSON, completo
 *
 * El flujo es el estándar de Google para servidor a servidor: se firma un JWT
 * con la llave privada y se cambia por un token de acceso. No hay usuario ni
 * pantalla de consentimiento de por medio.
 */

import { createSign } from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
/** Solo lectura: la cuenta de servicio no debe poder escribir en el Sheet. */
const SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";

/** El token dura una hora; se reusa mientras siga vigente. */
let cache: { token: string; expiraEn: number } | null = null;

function base64url(valor: Buffer | string): string {
  return Buffer.from(valor)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** True si hay credenciales de cuenta de servicio configuradas. */
export function hayCuentaDeServicio(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  );
}

/**
 * Devuelve un token de acceso, o `null` si no hay credenciales configuradas.
 * Solo debe llamarse desde el servidor.
 */
export async function tokenDeCuentaDeServicio(): Promise<string | null> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const claveCruda = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!email || !claveCruda) return null;

  const ahora = Math.floor(Date.now() / 1000);
  // Margen de un minuto para no usar un token a punto de vencer.
  if (cache && cache.expiraEn > ahora + 60) return cache.token;

  // Al pegar la llave en un panel de variables de entorno los saltos de línea
  // suelen quedar como "\n" literales; el firmador necesita saltos reales.
  const clave = claveCruda.replace(/\\n/g, "\n");

  const encabezado = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const cuerpo = base64url(
    JSON.stringify({
      iss: email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: ahora,
      exp: ahora + 3600,
    })
  );
  const firma = createSign("RSA-SHA256")
    .update(`${encabezado}.${cuerpo}`)
    .sign(clave);
  const jwt = `${encabezado}.${cuerpo}.${base64url(firma)}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Google rechazó las credenciales (${res.status})`);
  }

  const data = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };
  cache = { token: data.access_token, expiraEn: ahora + data.expires_in };
  return data.access_token;
}
