"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const content = {
  es: {
    eyebrow: "Quién está detrás",
    p1: "Llevo años construyendo software para negocios mexicanos — notarías, hospitales, restaurantes, comunidades, firmas profesionales. Lo aprendido en cada proyecto vive en un núcleo común: el siguiente cliente lo recibe ya armado.",
    p2: "Cuando me contratas no empiezas de cero. Recibes el resultado de seis sistemas en producción, ajustado a cómo tu equipo ya trabaja. Eso es lo que significa componer en lugar de revender.",
    p3: "Trabajo directamente con cada cliente. Sin intermediarios, sin scope creep, sin promesas que no se cumplen. Si lo que necesitas no encaja con esto, te lo digo en la primera llamada.",
    cta1: "Hablemos 30 minutos",
    linkedin: "LinkedIn →",
    credential: "Fundador y director técnico · Areté Soluciones",
    stack: "TypeScript · Python · Rust · PostgreSQL · Claude API · YOLOv8",
    based: "Ciudad Victoria, Tamaulipas · Atiendo clientes en México, LATAM y EE. UU.",
    figcaption: "Manuel Flores · Fundador",
  },
  en: {
    eyebrow: "Who's behind this",
    p1: "I've spent years building software for Mexican businesses — law firms, hospitals, restaurants, communities, professional services. Everything I learn on each project lives in a shared nucleus: the next client receives it ready.",
    p2: "When you hire me, you don't start from zero. You receive the output of six production systems, adapted to how your team already works. That's what composing means — not reselling.",
    p3: "I work directly with every client. No middlemen, no scope creep, no promises left unkept. If what you need doesn't fit how I work, I'll tell you on the first call.",
    cta1: "Let's talk 30 minutes",
    linkedin: "LinkedIn →",
    credential: "Founder & Technical Director · Areté Soluciones",
    stack: "TypeScript · Python · Rust · PostgreSQL · Claude API · YOLOv8",
    based: "Ciudad Victoria, Tamaulipas, Mexico · Serving clients in Mexico, LATAM and the U.S.",
    figcaption: "Manuel Flores · Founder",
  },
};

export function Founder() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow mb-6">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Manuel Flores.
              </h2>
            </Reveal>

            <div className="mt-8 prose-editorial">
              <Reveal delay={0.1}>
                <p>{t.p1}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  {lang === "es" ? (
                    <>
                      Cuando me contratas no empiezas de cero. Recibes el
                      resultado de seis sistemas en producción, ajustado a cómo
                      tu equipo ya trabaja. Eso es lo que significa{" "}
                      <em>componer</em> en lugar de revender.
                    </>
                  ) : (
                    t.p2
                  )}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>{t.p3}</p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contacto" className="btn-primary">
                  {t.cta1}
                </Link>
                <a
                  href="https://www.linkedin.com/in/manuel-flores-90653060/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
                >
                  {t.linkedin}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 pt-8 border-t border-line">
                <p className="text-[var(--text-caption)] text-ink tracking-[0.04em] uppercase font-medium">
                  {t.credential}
                </p>
                <p className="mt-2 text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
                  {t.stack}
                </p>
                <p className="mt-2 text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
                  {t.based}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <figure className="relative">
                <div className="relative aspect-[3/4] w-full max-w-[520px] mx-auto overflow-hidden bg-paper">
                  <Image
                    src="/images/manuel.jpg"
                    alt="Manuel Flores, fundador de Areté Soluciones"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <figcaption className="mt-5 text-center text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
                  {t.figcaption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
