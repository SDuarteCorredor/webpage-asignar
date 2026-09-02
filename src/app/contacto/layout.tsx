import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: "Contacto",
  description:
    "Solicita personal para tu empresa o postúlate a una vacante con Asignar SAS. Respuesta en menos de 24 horas hábiles. Presencia en 9 ciudades de Colombia.",
};

export default function ContactoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
