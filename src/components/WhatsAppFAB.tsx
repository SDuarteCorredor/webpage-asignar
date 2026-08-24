"use client";

import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_NUMERO } from "@/lib/site";

/**
 * Botón flotante de WhatsApp.
 *
 * Apunta a la línea de WhatsApp Business que después atiende el chatbot, así
 * que el mensaje va precargado según la página desde la que se escribe: no es
 * lo mismo un candidato mirando vacantes que una empresa en /servicios, y ese
 * primer mensaje es justo lo que el bot va a usar para enrutar la conversación.
 *
 * Va montado una sola vez en el layout raíz. Si algún día no hay número
 * configurado, no se renderiza nada en vez de dejar un enlace roto.
 */

/* El texto que el usuario ve ya escrito al abrir WhatsApp. En primera persona
   y en el idioma del visitante: lo va a enviar él, no nosotros. */
function mensajeDe(pathname: string): string {
  if (pathname.startsWith("/vacantes")) {
    return "Hola, vi una vacante en su página web y quiero postularme.";
  }
  if (pathname.startsWith("/servicios") || pathname.startsWith("/nosotros")) {
    return "Hola, necesito personal para mi empresa y quiero una propuesta.";
  }
  if (pathname.startsWith("/faq")) {
    return "Hola, necesito ayuda con una solicitud, queja o reclamo (SQR).";
  }
  return "Hola, quiero más información sobre los servicios de Asignar.";
}

export default function WhatsAppFAB() {
  const pathname = usePathname();

  if (!WHATSAPP_NUMERO) return null;

  const abrirWhatsApp = () => {
    trackEvent("whatsapp_click", { origen: pathname });
    const url =
      `https://wa.me/${WHATSAPP_NUMERO}` +
      `?text=${encodeURIComponent(mensajeDe(pathname))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={abrirWhatsApp}
      aria-label="Escríbenos por WhatsApp"
      /* z-30: por debajo del menú móvil (z-40), del navbar (z-50) y del
         overlay de vacante (z-100), que deben poder taparlo. El bottom con
         env() lo levanta sobre la barra de gestos del iPhone. */
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30
                 flex h-14 w-14 items-center justify-center rounded-full
                 bg-whatsapp text-white
                 shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)]
                 transition-transform hover:-translate-y-0.5 active:translate-y-0
                 motion-reduce:transition-none motion-reduce:hover:translate-y-0
                 print:hidden"
      style={{
        transitionDuration: "var(--duration-base)",
        transitionTimingFunction: "var(--ease-spring)",
      }}
    >
      {/* SVG inline a propósito: los Material Symbols vienen de una hoja
          externa y este botón no puede depender de que cargue. */}
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    </button>
  );
}
