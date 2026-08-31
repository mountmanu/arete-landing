import { Hero } from "@/components/Hero";
import { ClientsStrip } from "@/components/ClientsStrip";
import { TechStackStrip } from "@/components/TechStackStrip";
import { Founder } from "@/components/Founder";
import { Principios } from "@/components/Principios";
import { Architecture } from "@/components/Architecture";
import { HowIWork } from "@/components/HowIWork";
import { VerticalsGrid } from "@/components/VerticalsGrid";
import { CasesPreview } from "@/components/CasesPreview";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <TechStackStrip />
      <Founder />
      <Principios />
      <Architecture />
      <HowIWork />
      <VerticalsGrid />
      <CasesPreview />
      <ContactCTA />
    </>
  );
}
