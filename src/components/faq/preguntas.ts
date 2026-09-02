/**
 * Fuente única de las preguntas frecuentes de /faq.
 *
 * La consumen dos lados:
 *  - `src/app/faq/page.tsx` (server) → schema JSON-LD FAQPage en el HTML servido.
 *  - `src/components/FaqClient.tsx` (client) → acordeón visible.
 *
 * Por eso la respuesta se guarda en bloques y no en un string con saltos de
 * línea: el acordeón la pinta como listas/tablas reales (mejor para lectores
 * de pantalla y para motores de respuesta) y el schema la aplana a texto.
 */

export type BloqueRespuesta =
  | { tipo: "texto"; texto: string }
  | { tipo: "lista"; ordenada?: boolean; items: string[] }
  | { tipo: "tabla"; encabezados: string[]; filas: string[][] }
  | { tipo: "aviso"; texto: string };

export type Pregunta = {
  cat: string;
  q: string;
  bloques: BloqueRespuesta[];
  /**
   * `false` = no entra al schema FAQPage. Solo van preguntas cuya respuesta es
   * completa y autocontenida (guía de Google para FAQPage).
   */
  enSchema?: boolean;
  /** Por qué se excluyó del schema. Documental. */
  motivoExclusion?: string;
};

export const CATEGORIAS_FAQ = [
  "Vinculación",
  "Nómina y pagos",
  "Seguridad Social",
  "Terminaciones",
  "Marcación",
  "SST",
] as const;

/** Permite enlazar a una categoría desde otras páginas: /faq#nomina */
export const SLUG_A_CATEGORIA: Record<string, string> = {
  vinculacion: "Vinculación",
  nomina: "Nómina y pagos",
  "seguridad-social": "Seguridad Social",
  terminaciones: "Terminaciones",
  marcacion: "Marcación",
  sst: "SST",
};

export const PREGUNTAS: Pregunta[] = [
  // ---------- Vinculación ----------
  {
    cat: "Vinculación",
    q: "¿Cómo firmo mi contrato digital paso a paso?",
    bloques: [
      {
        tipo: "lista",
        ordenada: true,
        items: [
          "Entra a www.asignar.com.co/_admin/usuario.php",
          "Tu usuario es tu número de cédula",
          "Tu contraseña inicial es tu número de cédula",
          "Ve a la sección «Contratos»",
          "Selecciona el contrato pendiente",
          "Crea o ingresa tu clave personal",
          "Haz clic en «Firmar»",
        ],
      },
      {
        tipo: "aviso",
        texto: "Sin la firma no recibirás pagos ni liquidaciones.",
      },
    ],
  },
  {
    cat: "Vinculación",
    q: "¿Qué pasa si no firmo el contrato a tiempo?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Sin la firma digital no podrás recibir pagos ni liquidaciones. Es el primer paso obligatorio. Si tienes problemas para firmar, contacta al área de vinculación antes de tu primer día de trabajo.",
      },
    ],
  },
  {
    cat: "Vinculación",
    q: "¿Qué documentos necesito para vincularme?",
    bloques: [
      { tipo: "texto", texto: "Para vincularte necesitas:" },
      {
        tipo: "lista",
        items: [
          "Cédula vigente",
          "Hoja de vida actualizada",
          "Certificado de estudios, si el cargo lo requiere",
          "Cuenta bancaria a tu nombre",
        ],
      },
      {
        tipo: "texto",
        texto:
          "El área de selección te indica si hay documentos adicionales según el cargo.",
      },
    ],
  },
  // ---------- Nómina y pagos ----------
  {
    cat: "Nómina y pagos",
    q: "¿Cuáles son las fechas de pago?",
    bloques: [
      {
        tipo: "texto",
        texto: "Depende de la empresa donde estés en misión:",
      },
      {
        tipo: "tabla",
        encabezados: ["Esquema", "Fechas de corte"],
        filas: [
          ["Esquema 1", "El 15 y el 30 de cada mes"],
          ["Esquema 2", "El 5 y el 20 de cada mes"],
        ],
      },
      {
        tipo: "texto",
        texto: "Tu coordinador de Asignar te indica cuál aplica para tu caso.",
      },
    ],
  },
  {
    cat: "Nómina y pagos",
    q: "¿Cuánto me pagan por turno en una liquidación?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "El valor oficial es de $16.446 por turno trabajado. Puede variar según el tipo de contrato y cargo — confirma con nómina si tienes dudas.",
      },
    ],
  },
  {
    cat: "Nómina y pagos",
    q: "¿Dónde veo mi colilla de pago?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Accede a la plataforma de Asignar con tu cédula. La colilla muestra el detalle de tu pago, deducciones y aportes. Si tienes problemas de acceso, contacta al área de nómina.",
      },
    ],
  },
  {
    cat: "Nómina y pagos",
    q: "¿Cuándo me pagan las prestaciones sociales?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Las prestaciones (prima, cesantías, intereses, vacaciones) se causan durante el tiempo que estás vinculado y se liquidan al terminar el contrato o en las fechas de ley. Nómina te da el detalle exacto.",
      },
    ],
  },
  // ---------- Seguridad Social ----------
  {
    cat: "Seguridad Social",
    q: "¿Cuándo tengo derecho a la seguridad social completa?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Para el aporte completo a EPS, pensión y ARL debes cumplir UNA de estas condiciones:",
      },
      {
        tipo: "lista",
        items: [
          "Haber trabajado 30 días continuos, o",
          "Que tus dos quincenas del mes sumen un SMLV o más",
        ],
      },
      {
        tipo: "texto",
        texto:
          "Si no cumples, el sistema hace un retiro y reingreso automático en afiliaciones.",
      },
    ],
  },
  {
    cat: "Seguridad Social",
    q: "¿Qué EPS puedo escoger?",
    // La respuesta no nombra las EPS: remite a lo que te muestran en la
    // vinculación, así que no es autocontenida para el schema.
    enSchema: false,
    motivoExclusion:
      "No es autocontenida: no nombra las EPS disponibles, remite al proceso de vinculación.",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Puedes escoger entre las EPS habilitadas por Asignar. Al momento de la vinculación te presentan las opciones disponibles en tu ciudad. Si ya tienes EPS activa puedes continuar si está en las opciones.",
      },
    ],
  },
  {
    cat: "Seguridad Social",
    q: "¿Qué pasa si tengo un accidente en el trabajo?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Repórtalo inmediatamente a tu supervisor en la empresa cliente y al área de SST de Asignar. La ARL cubre accidentes laborales. No esperes días para reportar — el tiempo es crítico para la cobertura.",
      },
    ],
  },
  // ---------- Terminaciones ----------
  {
    cat: "Terminaciones",
    q: "Me llegó una terminación de contrato y sigo trabajando. ¿Qué significa?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "No entres en pánico. Al final de cada mes, Asignar hace un proceso masivo de terminaciones y renovaciones que es completamente normal.",
      },
      {
        tipo: "texto",
        texto:
          "Esto NO significa que te quedaste sin trabajo. Si sigues activo en tu misión, tu contrato se renueva automáticamente.",
      },
    ],
  },
  {
    cat: "Terminaciones",
    q: "¿Cómo sé si mi contrato fue renovado?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Revisa la plataforma de Asignar con tu cédula — ahí aparecerá el nuevo contrato pendiente de firma. Debes firmarlo para completar el proceso.",
      },
    ],
  },
  {
    cat: "Terminaciones",
    q: "¿Cuánto me pagan cuando termina definitivamente mi contrato?",
    // El "cuánto" solo lo resuelve nómina caso por caso: la respuesta publicada
    // no cierra la pregunta por sí sola.
    enSchema: false,
    motivoExclusion:
      "No responde el «cuánto»: el monto es individual y lo calcula nómina, así que la respuesta no cierra la pregunta.",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Asignar liquida todas las prestaciones causadas: prima proporcional, cesantías con intereses y vacaciones proporcionales. El monto depende del tiempo trabajado y tu salario. Nómina hace el cálculo exacto.",
      },
    ],
  },
  // ---------- Marcación ----------
  {
    cat: "Marcación",
    q: "¿Cómo marco mi asistencia?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "La marcación se hace en el dispositivo electrónico disponible en las instalaciones del cliente, según la fecha del turno. Tienes dos formas:",
      },
      {
        tipo: "lista",
        items: [
          "Escanea el código QR con tu celular",
          "O ingresa al Módulo de Empleados con tu usuario y contraseña y selecciona «Marcar Asistencia» o «Ver Resumen de Asistencias»",
        ],
      },
      {
        tipo: "texto",
        texto:
          "Es indispensable habilitar la ubicación (GPS) y autorizar el acceso a la cámara del dispositivo móvil.",
      },
    ],
  },
  {
    cat: "Marcación",
    q: "¿Qué pasa si no marco mi asistencia?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "La marcación es fundamental para el pago. Si no marcas puede afectar tu nómina de ese período. Si tuviste un problema con el dispositivo, repórtalo el mismo día para que se haga el ajuste a tiempo.",
      },
    ],
  },
  // ---------- SST ----------
  {
    cat: "SST",
    q: "¿Tengo que hacer una inducción SST al entrar?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Sí. Antes de empezar la misión debes recibir la inducción de Seguridad y Salud en el Trabajo. Te explica los riesgos de tu cargo, el uso de EPP y qué hacer ante emergencias o accidentes.",
      },
    ],
  },
  {
    cat: "SST",
    q: "¿Para qué son las pausas activas?",
    bloques: [
      {
        tipo: "texto",
        texto:
          "Son descansos cortos y obligatorios que reducen el riesgo de lesiones musculares y mejoran la concentración. Son un beneficio para tu salud, no una pérdida de tiempo.",
      },
    ],
  },
];

/** Aplana los bloques a texto plano — lo que consume el schema FAQPage. */
export function respuestaEnTexto(pregunta: Pregunta): string {
  return pregunta.bloques
    .map((bloque) => {
      switch (bloque.tipo) {
        case "texto":
          return bloque.texto;
        case "aviso":
          return bloque.texto;
        case "lista":
          return bloque.items
            .map((item, i) => (bloque.ordenada ? `${i + 1}. ${item}` : `• ${item}`))
            .join("\n");
        case "tabla":
          return bloque.filas.map((fila) => fila.join(": ")).join("\n");
      }
    })
    .join("\n\n");
}

/** Texto de búsqueda del acordeón (pregunta + respuesta, en minúsculas). */
export function textoBuscable(pregunta: Pregunta): string {
  return `${pregunta.q}\n${respuestaEnTexto(pregunta)}`.toLowerCase();
}

/** Preguntas que califican para el schema FAQPage. */
export const PREGUNTAS_SCHEMA = PREGUNTAS.filter((p) => p.enSchema !== false);
