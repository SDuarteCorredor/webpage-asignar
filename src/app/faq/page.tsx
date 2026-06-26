import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Guía del trabajador misional de Asignar SAS: contrato digital, fechas de pago, seguridad social, terminaciones, marcación y SST. Radica tu PQR.",
};

export default function FaqPage() {
  return <FaqClient />;
}
