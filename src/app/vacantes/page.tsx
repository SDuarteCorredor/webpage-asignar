import type { Metadata } from "next";
import VacantesClient from "@/components/vacantes/VacantesClient";
import { getVacantes } from "@/lib/vacantes";

export const metadata: Metadata = {
  title: "Vacantes de empleo",
  description:
    "Vacantes activas en hotelería, restaurantes, logística e industria en Colombia. Filtra por ciudad, sector y tipo de contrato, y postúlate en menos de 2 minutos con Asignar SAS.",
};

/* Se regenera cada 5 minutos: al registrar una vacante en el Sheet aparece
   en el sitio sin necesidad de desplegar. */
export const revalidate = 300;

export default async function VacantesPage() {
  // La lectura del Sheet ocurre solo en el servidor.
  const { vacantes } = await getVacantes();
  return <VacantesClient vacantes={vacantes} />;
}
