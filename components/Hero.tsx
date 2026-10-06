"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const content = {
  es: {
    eyebrow: "Sistemas a la medida para negocios que ya funcionan",
    h1: "Un sistema hecho para tu negocio,",
    h1em: "no tu negocio adaptado a un sistema.",
    body: "Soy Manuel. Construyo la herramienta que tu negocio necesita para dejar de depender de hojas de cálculo, chats y memoria. Y me quedo después, para que siga funcionando.",
    cta1: "Ver lo que he hecho",
    cta2: "Platicar 30 minutos",
  },
  en: {
    eyebrow: "Custom systems for businesses that already work",
    h1: "A system built around your business,",
    h1em: "not your business bent around a system.",
    body: "I'm Manuel. I build the tool your business needs to stop running on spreadsheets, chats and memory. And I stay afterwards, so it keeps working.",
    cta1: "See my work",
    cta2: "Talk for 30 minutes",
  },
};

export function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-10 md:pt-14 pb-16 md:pb-20 relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
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
          <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-pretty text-ink leading-relaxed">
            {t.body}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
      </div>
    </section>
  );
}
