import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TLDRSection from "@/components/home/TLDRSection";
import VacantesPreview from "@/components/home/VacantesPreview";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import BeneficiosSection from "@/components/home/BeneficiosSection";
import DOCASection from "@/components/home/DOCASection";
import ProcesoSeleccion from "@/components/home/ProcesoSeleccion";
import SGSSTSection from "@/components/home/SGSSTSection";
import B2BSection from "@/components/home/B2BSection";
import SectoresSection from "@/components/home/SectoresSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PoliticasSostenibilidad from "@/components/home/PoliticasSostenibilidad";

/* El título y la descripción del home son los `default` del layout raíz; aquí
   solo se fija el canonical propio (ver la nota en src/app/layout.tsx). */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TLDRSection />
      <VacantesPreview />
      <StatsSection />
      <ClientLogos />
      <BeneficiosSection />
      <DOCASection />
      <ProcesoSeleccion />
      <SGSSTSection />
      <B2BSection />
      <SectoresSection />
      <TestimonialsSection />
      <PoliticasSostenibilidad />
    </>
  );
}
