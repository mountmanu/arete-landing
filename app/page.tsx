import { Hero } from "@/components/Hero";
import { ClientsStrip } from "@/components/ClientsStrip";
import { Founder } from "@/components/Founder";
import { Principios } from "@/components/Principios";
import { Architecture } from "@/components/Architecture";
import { VerticalsGrid } from "@/components/VerticalsGrid";
import { CasesPreview } from "@/components/CasesPreview";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <Founder />
      <Principios />
      <Architecture />
      <VerticalsGrid />
      <CasesPreview />
      <ContactCTA />
    </>
  );
}
