import type { BloqueRespuesta } from "./preguntas";

const parrafoCls =
  "font-[var(--font-body)] text-sm text-text-secondary leading-relaxed";

/**
 * Pinta la respuesta de una pregunta frecuente a partir de sus bloques.
 * Los pasos, requisitos y plazos salen como listas y tablas reales para que
 * se lean bien con lector de pantalla y se extraigan bien en buscadores.
 */
export default function RespuestaFaq({
  bloques,
}: {
  bloques: BloqueRespuesta[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {bloques.map((bloque, i) => {
        switch (bloque.tipo) {
          case "texto":
            return (
              <p key={i} className={parrafoCls}>
                {bloque.texto}
              </p>
            );

          case "lista": {
            const Lista = bloque.ordenada ? "ol" : "ul";
            return (
              <Lista
                key={i}
                className={`${parrafoCls} flex flex-col gap-1.5 pl-6 ${
                  bloque.ordenada ? "list-decimal" : "list-disc"
                } marker:text-brand-blue marker:font-semibold`}
              >
                {bloque.items.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </Lista>
            );
          }

          case "tabla":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[280px] border-collapse overflow-hidden rounded-xl border border-border text-left">
                  <thead className="bg-surface">
                    <tr>
                      {bloque.encabezados.map((encabezado) => (
                        <th
                          key={encabezado}
                          scope="col"
                          className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted px-4 py-2.5"
                        >
                          {encabezado}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bloque.filas.map((fila) => (
                      <tr key={fila[0]} className="border-t border-border">
                        <th
                          scope="row"
                          className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy px-4 py-3 text-left align-top"
                        >
                          {fila[0]}
                        </th>
                        {fila.slice(1).map((celda) => (
                          <td
                            key={celda}
                            className="font-[var(--font-body)] text-sm text-text-secondary px-4 py-3 align-top"
                          >
                            {celda}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "aviso":
            return (
              <p
                key={i}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 font-[var(--font-body)] text-sm font-medium text-brand-navy leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-brand-blue text-[18px] leading-[1.4]"
                >
                  warning
                </span>
                {bloque.texto}
              </p>
            );
        }
      })}
    </div>
  );
}
