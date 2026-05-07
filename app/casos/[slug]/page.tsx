import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  caseStudies,
  findCase,
  orderedCases,
} from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";
import { ReadingProgress } from "@/components/ReadingProgress";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findCase(slug);
  if (!c) return { title: "Caso no encontrado" };
  return {
    title: c.client,
    description: c.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = findCase(slug);
  if (!c) notFound();

  const idx = orderedCases.findIndex((x) => x.slug === slug);
  const prev = idx > 0 ? orderedCases[idx - 1] : null;
  const next = idx < orderedCases.length - 1 ? orderedCases[idx + 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.tagline,
    author: {
      "@type": "Organization",
      name: "Areté Soluciones S.A. de C.V.",
    },
    publisher: {
      "@type": "Organization",
      name: "Areté Soluciones S.A. de C.V.",
    },
    datePublished: `${c.year}-01-01`,
    inLanguage: "es-MX",
    about: { "@type": "Thing", name: c.client },
  };

  return (
    <article>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <header className="py-[var(--spacing-section)] pt-32 border-b border-line">
        <div className="container-editorial">
          <Reveal>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 eyebrow mb-12 hover:text-ink transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 7H1M1 7L7 1M1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Todos los casos
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="eyebrow">{c.verticalLabel}</span>
              <span className="w-px h-3 bg-line" />
              <span className="text-[var(--text-caption)] text-mute">
                {c.year}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display italic text-mute text-2xl mb-4">
              {c.client}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1
              className="text-balance max-w-5xl"
              style={{ fontSize: "var(--text-display-xl)" }}
            >
              {c.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              {c.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-12 text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
              Alcance · {c.scope}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-[var(--spacing-section)]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-6">El problema</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance mb-10"
              style={{ fontSize: "var(--text-display-md)" }}
            >
              ¿Qué bloqueaba a la operación?
            </h2>
          </Reveal>
          <div className="prose-editorial">
            {c.problem.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-6">La solución</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance mb-10"
              style={{ fontSize: "var(--text-display-md)" }}
            >
              Cómo lo armamos sobre el núcleo.
            </h2>
          </Reveal>
          <div className="prose-editorial mb-12">
            {c.solution.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 pt-10 border-t border-line">
              <p className="eyebrow mb-6">Lo que se añadió al núcleo</p>
              <ul className="space-y-3">
                {c.reuse.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[var(--text-body)] text-ink"
                  >
                    <span className="text-mute mt-1">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6 text-center">Impacto</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {c.impact.map((i, idx) => (
              <Reveal key={i.metric} delay={idx * 0.08}>
                <div className="text-center">
                  <div
                    className="font-display text-ink"
                    style={{ fontSize: "var(--text-display-lg)", lineHeight: 1 }}
                  >
                    {i.metric}
                  </div>
                  <div className="mt-4 text-[var(--text-body)] text-mute leading-relaxed max-w-[260px] mx-auto">
                    {i.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--spacing-block)]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-6">Stack</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="flex flex-wrap gap-2">
              {c.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 border border-line text-[var(--text-caption)] text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <nav className="py-16 border-t border-line">
        <div className="container-editorial flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {prev ? (
            <Link href={`/casos/${prev.slug}`} className="group max-w-sm">
              <p className="eyebrow mb-3">← Caso anterior</p>
              <p className="font-display text-xl group-hover:text-mute transition-colors">
                {prev.client}
              </p>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/casos/${next.slug}`}
              className="group max-w-sm md:text-right"
            >
              <p className="eyebrow mb-3">Caso siguiente →</p>
              <p className="font-display text-xl group-hover:text-mute transition-colors">
                {next.client}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </article>
  );
}
