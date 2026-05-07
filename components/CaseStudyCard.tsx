import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({
  caseStudy,
  size = "default",
}: {
  caseStudy: CaseStudy;
  size?: "default" | "feature";
}) {
  const isFeature = size === "feature";

  return (
    <Link
      href={`/casos/${caseStudy.slug}`}
      className={`group relative block bg-paper border border-line hover:border-ink transition-all duration-500 ${
        isFeature ? "p-8 md:p-12" : "p-8"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="eyebrow">{caseStudy.verticalLabel}</span>
        <span className="text-[var(--text-caption)] text-mute">
          {caseStudy.year}
        </span>
      </div>

      <h3
        className="text-balance"
        style={{
          fontSize: isFeature ? "var(--text-display-md)" : "1.5rem",
          lineHeight: 1.15,
        }}
      >
        {caseStudy.client}
      </h3>

      <p
        className={`${isFeature ? "mt-6" : "mt-4"} text-ink leading-relaxed ${
          isFeature ? "text-[var(--text-body-lg)]" : "text-[var(--text-body)]"
        }`}
      >
        {caseStudy.tagline}
      </p>

      {isFeature && (
        <div className="mt-10 grid grid-cols-3 gap-6 pt-8 rule-top">
          {caseStudy.impact.map((i) => (
            <div key={i.metric}>
              <div className="font-display text-2xl text-ink">
                {i.metric}
              </div>
              <div className="mt-1 text-xs text-mute leading-snug">
                {i.detail}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center gap-2 text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium opacity-50 group-hover:opacity-100 group-hover:gap-4 transition-all duration-500">
        Leer caso
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
