import HeroSection from "@/components/home/HeroSection";
import VacantesPreview from "@/components/home/VacantesPreview";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import BeneficiosSection from "@/components/home/BeneficiosSection";
import DOCASection from "@/components/home/DOCASection";
import ProcesoSeleccion from "@/components/home/ProcesoSeleccion";
import SGSSTSection from "@/components/home/SGSSTSection";
import B2BSection from "@/components/home/B2BSection";
import SectoresSection from "@/components/home/SectoresSection";
import ConfianzaSectores from "@/components/home/ConfianzaSectores";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RespaldoStrip from "@/components/home/RespaldoStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VacantesPreview />
      <StatsSection />
      <ClientLogos />
      <BeneficiosSection />
      <DOCASection />
      <ProcesoSeleccion />
      <SGSSTSection />
      <B2BSection />
      <SectoresSection />
      <ConfianzaSectores />
      <TestimonialsSection />
      <RespaldoStrip />
    </>
  );
}
