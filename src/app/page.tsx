import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TrainingPrograms from "@/components/sections/TrainingPrograms";
import IndustrySection from "@/components/sections/IndustrySection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FAQSection from "@/components/sections/FAQSection";
import CyberIncidentHelp from "@/components/sections/CyberIncidentHelp";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <TrainingPrograms />
      <TrainingPrograms />
      <ProcessSection />
      <CyberIncidentHelp />
      <TechStackSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
