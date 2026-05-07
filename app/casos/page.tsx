import type { Metadata } from "next";
import { orderedCases } from "@/lib/case-studies";
import { CasesGrid } from "@/components/CasesGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Siete casos en producción a través de cinco verticales — notarial, hospital, restaurantes, comunidades y servicios profesionales.",
};

export default function CasosPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Portafolio</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Siete casos. Un mismo núcleo creciendo.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              Cada caso describe el problema operativo, la solución que armamos
              sobre el núcleo Areté, y los componentes que se quedaron
              disponibles para el siguiente cliente.
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
