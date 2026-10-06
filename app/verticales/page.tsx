import type { Metadata } from "next";
import Link from "next/link";
import { verticals } from "@/lib/verticals";
import { findCase } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/ClientLogo";

export const metadata: Metadata = {
  title: "Industrias",
  description:
    "Notarías, hospitales, restaurantes, estacionamientos y servicios profesionales: lo que ya construí en cada giro y lo que puedes esperar.",
};

export default function VerticalesPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-12 md:pt-16">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Industrias</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Giros donde ya trabajé y sé qué duele.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              No todos los negocios son iguales, y el software genérico lo
              ignora. Aquí está lo que ya construí en cada giro y lo que
              puedes esperar si el tuyo es uno de ellos.
            </p>
          </Reveal>
        </div>
      </section>

      {verticals.map((v, idx) => {
        const anchorCase = v.caseSlug ? findCase(v.caseSlug) : null;
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={v.slug}
            id={v.slug}
            className={`py-[var(--spacing-section)] scroll-mt-24 ${
              isAlt ? "bg-soft rule-top rule-bottom" : "rule-top"
            }`}
          >
            <div className="container-editorial">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <p className="eyebrow mb-4">
                      Giro {String(idx + 1).padStart(2, "0")}
                    </p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 style={{ fontSize: "var(--text-display-lg)" }}>
                      {v.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-6 text-[var(--text-body-lg)] font-display italic text-ink">
                      {v.promise}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p className="mt-8 text-[var(--text-body)] leading-relaxed text-ink">
                      {v.description}
                    </p>
                  </Reveal>
                  {anchorCase && (
                    <Reveal delay={0.2}>
                      <Link
                        href={`/casos/${anchorCase.slug}`}
                        className="inline-flex items-center gap-2 mt-8 link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
                      >
                        Ver el caso →
                      </Link>
                    </Reveal>
                  )}
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="eyebrow mb-6">Lo que incluye</p>
                  </Reveal>
                  <ul className="space-y-px bg-line">
                    {v.packIncludes.map((item, i) => (
                      <Reveal key={i} delay={0.15 + i * 0.04}>
                        <li className="bg-paper p-6 flex gap-5 items-start">
                          <span className="font-display text-mute mt-0.5 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[var(--text-body)] leading-relaxed text-ink">
                            {item}
                          </span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>

                  <Reveal delay={0.3}>
                    <div className="mt-8 pt-6 border-t border-line">
                      <p className="eyebrow mb-3">Ya lo usan</p>
                      <ClientLogos ids={v.anchorClients} height={44} gapClass="gap-x-6 gap-y-3" />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
