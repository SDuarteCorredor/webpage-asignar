/**
 * Eventos de conversión hacia el dataLayer de Google Tag Manager.
 *
 * En GTM cada nombre de evento se configura como disparador personalizado
 * ("Custom Event") con el mismo nombre que aparece en `ConversionEvent`.
 *
 * Es seguro llamarlo aunque GTM no haya cargado: el snippet crea
 * `window.dataLayer` antes de pedir el script, y si algo falla el push
 * simplemente no ocurre.
 */

export type ConversionEvent =
  /** Formulario de cotización (hero de /servicios y /contacto empresa). */
  | "solicitud_comercial"
  /** Postulación a una vacante desde /vacantes. */
  | "postulacion_enviada"
  /** Radicación de una SQR. */
  | "sqr_radicada"
  /** Consulta del estado de una SQR. */
  | "sqr_seguimiento";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function trackEvent(
  event: ConversionEvent,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
