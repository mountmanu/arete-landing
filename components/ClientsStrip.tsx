"use client";

import { Reveal } from "./Reveal";
import { ClientLogo } from "./ClientLogo";
import { useLang } from "@/contexts/LangContext";
import type { ClientId } from "@/lib/clients";

const anchors: ClientId[] = [
  "notaria-45",
  "notaria-273",
  "hospital-la-salle",
  "dona-tota",
  "park-wash",
  "laura-zanuna",
];

const eyebrow = {
  es: "Ya trabajan con sistemas míos",
  en: "Already running on my systems",
};

export function ClientsStrip() {
  const { lang } = useLang();

  return (
    <section className="py-[var(--spacing-block)] rule-top rule-bottom">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-center mb-8">{eyebrow[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {anchors.map((id) => (
              <li key={id} className="flex items-center">
                <ClientLogo id={id} height={44} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
