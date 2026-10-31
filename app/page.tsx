"use client";

import CitizenServicesSection from "@/components/CitizenServicesSection";
import DistrictStatsSection from "@/components/DistrictStatsSection";
import FinalHelpSection from "@/components/FinalHelpSection";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import LivelihoodProjectsSection from "@/components/LivelihoodProjectsSection";
import MissionSection from "@/components/MissionSection";
import NewsTicker from "@/components/NewsTicker";
import ProgramPortalsSection from "@/components/ProgramPortalsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TransparencySection from "@/components/TransparencySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <LeadershipSection />
      <DistrictStatsSection />
      <TransparencySection />
      <CitizenServicesSection />
      <SuccessStoriesSection />
      <LivelihoodProjectsSection />
      <MissionSection />
      <ProgramPortalsSection />
      <FinalHelpSection />
    </>
  );
}
