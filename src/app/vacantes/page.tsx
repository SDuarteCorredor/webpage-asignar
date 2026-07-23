import type { Metadata } from "next";
import VacantesClient from "@/components/vacantes/VacantesClient";

export const metadata: Metadata = {
  title: "Vacantes de empleo",
  description:
    "Vacantes activas en hotelería, restaurantes, logística e industria en Colombia. Filtra por ciudad, sector y tipo de contrato, y postúlate en menos de 2 minutos con Asignar SAS.",
};

export default function VacantesPage() {
  return <VacantesClient />;
}
