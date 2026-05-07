"use client";

import { useMemo, useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import type { VerticalSlug } from "@/lib/verticals";
import { CaseStudyCard } from "./CaseStudyCard";

type Filter = "all" | VerticalSlug;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "notarial", label: "Notarial" },
  { value: "hospital", label: "Hospital" },
  { value: "restaurant", label: "Restaurantes" },
  { value: "community", label: "Comunidades" },
  { value: "professional", label: "Profesional" },
];

export function CasesGrid({ cases }: { cases: CaseStudy[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return cases;
    return cases.filter((c) => c.vertical === filter);
  }, [cases, filter]);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>();
    map.set("all", cases.length);
    cases.forEach((c) => {
      map.set(c.vertical, (map.get(c.vertical) ?? 0) + 1);
    });
    return map;
  }, [cases]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-line">
        <span className="eyebrow mr-3">Filtrar:</span>
        {filters.map((f) => {
          const count = counts.get(f.value) ?? 0;
          const active = filter === f.value;
          if (count === 0 && f.value !== "all") return null;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium px-4 py-2 transition-all duration-200 ${
                active
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-soft"
              }`}
            >
              {f.label}
              <span className={`ml-2 ${active ? "opacity-60" : "opacity-50"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center py-20 text-mute">
          Aún no hay casos publicados en esta vertical.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      )}
    </>
  );
}
