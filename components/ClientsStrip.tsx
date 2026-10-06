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

/**
 * Franja de logos a color que avanza de izquierda a derecha sin fin.
 * La pista lleva dos copias de la lista; la animación recorre media pista,
 * así que cuando un logo sale por la derecha ya está entrando por la izquierda.
 */
export function ClientsStrip() {
  const { lang } = useLang();

  return (
    <section className="py-[var(--spacing-block)] rule-top rule-bottom">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-center mb-8">{eyebrow[lang]}</p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div
          className="marquee w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          role="list"
          aria-label={eyebrow[lang]}
        >
          <div className="marquee-track flex w-max items-center">
            {[0, 1].map((copy) =>
              anchors.map((id) => (
                <div
                  key={`${copy}-${id}`}
                  role={copy === 0 ? "listitem" : undefined}
                  aria-hidden={copy === 1}
                  className="flex items-center px-7 md:px-10"
                >
                  <ClientLogo id={id} height={52} mono={false} />
                </div>
              )),
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
