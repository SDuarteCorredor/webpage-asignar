import HeroSection from "@/components/home/HeroSection";
import VacantesPreview from "@/components/home/VacantesPreview";
import DOCASection from "@/components/home/DOCASection";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import B2BSection from "@/components/home/B2BSection";
import SectoresSection from "@/components/home/SectoresSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VacantesPreview />
      <DOCASection />
      <StatsSection />
      <ClientLogos />
      <B2BSection />
      <SectoresSection />
      <TestimonialsSection />
    </>
  );
}
