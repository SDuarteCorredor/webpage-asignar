import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "SQR — Solicitudes, Quejas y Reclamos",
  description:
    "Radica y haz seguimiento a tu Solicitud, Queja, Reclamo o Sugerencia (SQR) en Asignar SAS. Respuesta en máximo 15 días hábiles. Incluye guía del trabajador misional.",
};

export default function FaqPage() {
  return <FaqClient />;
}
