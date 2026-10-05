import { Hero } from "@/components/Hero";
import { ClientsStrip } from "@/components/ClientsStrip";
import { VerticalsGrid } from "@/components/VerticalsGrid";
import { CasesPreview } from "@/components/CasesPreview";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <VerticalsGrid />
      <CasesPreview />
      <ContactCTA />
    </>
  );
}
