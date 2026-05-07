import Link from "next/link";
import { featuredCases } from "@/lib/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";

export function CasesPreview() {
  return (
    <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6">Casos en producción</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Resultados, no demos.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/casos"
              className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
            >
              Ver los 7 casos →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredCases.map((caseStudy, idx) => (
            <Reveal key={caseStudy.slug} delay={idx * 0.08} className="h-full">
              <CaseStudyCard caseStudy={caseStudy} size="feature" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
