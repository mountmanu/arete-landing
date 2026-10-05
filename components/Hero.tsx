"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const content = {
  es: {
    eyebrow: "Software AI-nativo para negocios mexicanos",
    h1: "Sistemas que operan tu negocio.",
    h1em: "Construido sobre lo que ya funciona.",
    body: "Seis sistemas en producción, un solo núcleo. Tu proyecto empieza donde terminó el anterior.",
    cta1: "Ver casos",
    cta2: "Agenda 30 minutos",
    stats: [
      { label: "Sistemas en producción", value: "6" },
      { label: "Industrias", value: "5" },
      { label: "Tiempo a producción", value: "4–12 sem" },
      { label: "Trato directo", value: "1 a 1" },
    ],
  },
  en: {
    eyebrow: "AI-native software for Mexican businesses",
    h1: "Systems that run your business.",
    h1em: "Built on what already works.",
    body: "Six systems in production, one shared core. Your project starts where the last one ended.",
    cta1: "See cases",
    cta2: "Book 30 minutes",
    stats: [
      { label: "Systems in production", value: "6" },
      { label: "Industries", value: "5" },
      { label: "Time to production", value: "4–12 wks" },
      { label: "Direct line", value: "1-on-1" },
    ],
  },
};

export function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-20 md:pt-32 pb-24 md:pb-32 relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-12 h-px bg-ink" />
            <span className="eyebrow">{t.eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-balance"
            style={{
              fontSize: "var(--text-display-2xl)",
              lineHeight: 1.02,
            }}
          >
            {t.h1}
            <br />
            <em className="not-italic font-display italic text-mute">
              {t.h1em}
            </em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-[var(--text-body-lg)] text-pretty text-ink leading-relaxed">
            {t.body}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/casos" className="btn-primary">
              {t.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/contacto" className="btn-secondary">
              {t.cta2}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 rule-top">
            {t.stats.map((stat) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="font-display text-ink"
        style={{ fontSize: "var(--text-display-md)", lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="mt-3 eyebrow">{label}</div>
    </div>
  );
}
