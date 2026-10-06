import type { Metadata } from "next";
import { orderedCases } from "@/lib/case-studies";
import { CasesGrid } from "@/components/CasesGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Seis negocios que ya operan con sistemas míos: notarías, un hospital, una cadena de comida, un fraccionamiento y consultoras.",
};

export default function CasosPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-12 md:pt-16">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Casos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Seis negocios, seis sistemas.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              En cada caso cuento qué estaba trabando al negocio, qué hicimos
              y qué cambió en el día a día. Sin inflar nada.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-editorial">
          <CasesGrid cases={orderedCases} />
        </div>
      </section>
    </>
  );
}
