"use client";

import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const anchors = [
  "Notaría Pública 45",
  "Notaría Pública 273",
  "Hospital Victoria La Salle",
  "Doña Tota",
  "Estacionamiento + Car Wash",
  "Laura Zanuna",
];

const eyebrow = {
  es: "En producción",
  en: "In production",
};

export function ClientsStrip() {
  const { lang } = useLang();

  return (
    <section className="py-[var(--spacing-block)] rule-top rule-bottom">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-center mb-6">{eyebrow[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            {anchors.map((name) => (
              <li
                key={name}
                className="font-display text-lg md:text-xl text-mute hover:text-ink transition-colors duration-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
