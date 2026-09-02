import { SQR_EMAIL, SQR_PLAZO, SQR_TELEFONO, SQR_TELEFONO_HREF } from "./contacto";

type Punto = {
  icono: string;
  titulo: string;
  cuerpo: React.ReactNode;
};

const puntos: Punto[] = [
  {
    icono: "schedule",
    titulo: "Plazo de respuesta",
    cuerpo: (
      <>Respondemos toda SQR en máximo {SQR_PLAZO} y de forma confidencial.</>
    ),
  },
  {
    icono: "forum",
    titulo: "Dónde radicarla",
    cuerpo: (
      <>
        En el formulario de esta página, al correo{" "}
        <a href={`mailto:${SQR_EMAIL}`} className="text-brand-blue font-medium">
          {SQR_EMAIL}
        </a>{" "}
        o al{" "}
        <a href={SQR_TELEFONO_HREF} className="text-brand-blue font-medium">
          {SQR_TELEFONO}
        </a>
        .
      </>
    ),
  },
  {
    icono: "checklist",
    titulo: "Ten a la mano",
    cuerpo: (
      <>
        Tu documento de identidad, la ciudad o sede, la empresa donde estás en
        misión y las fechas del caso.
      </>
    ),
  },
  {
    icono: "manage_search",
    titulo: "Seguimiento",
    cuerpo: (
      <>
        Con tu número de radicado y tu documento consultas el estado en la
        pestaña «Hacer seguimiento».
      </>
    ),
  },
];

/**
 * Resumen en corto de la página, justo debajo del H1: lo esencial para quien
 * llega con afán (y para los motores de respuesta que citan la página).
 */
export default function ResumenSqr() {
  return (
    <div className="mt-8 md:mt-10 max-w-3xl mx-auto text-left rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted mb-4">
        En corto
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {puntos.map((punto) => (
          <li key={punto.titulo} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-brand-blue text-[15px]"
              >
                {punto.icono}
              </span>
            </span>
            <span>
              <span className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                {punto.titulo}.
              </span>{" "}
              <span className="font-[var(--font-body)] text-sm text-text-secondary leading-relaxed">
                {punto.cuerpo}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
