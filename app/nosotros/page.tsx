import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Engagement } from "@/components/Engagement";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Soy Manuel Flores. Construyo sistemas a la medida para negocios en México, los entrego funcionando y me quedo para que sigan funcionando.",
};

const methodology = [
  {
    step: "01",
    name: "Platicamos",
    description:
      "Una semana contigo y con tu gente. Veo cómo trabajan, qué duele y qué se repite. Sales con un plan claro y un precio.",
  },
  {
    step: "02",
    name: "Armamos",
    description:
      "Tomo lo que ya tengo construido y lo ajusto a tu operación. Sabes qué estás pagando y qué vas a recibir, sin letras chiquitas.",
  },
  {
    step: "03",
    name: "Lo usas",
    description:
      "En cuatro a doce semanas está funcionando en tu negocio. Lo afinamos sobre tu uso real, no sobre una presentación.",
  },
  {
    step: "04",
    name: "Me quedo",
    description:
      "Lo mantengo y lo hago crecer contigo. Cada mejora que construyo para otro negocio también puede servirte a ti.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-12 md:pt-16">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Cómo trabajo</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-5xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Lo construyo yo, lo entrego funcionando y me quedo.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <div className="prose-editorial">
                <Reveal>
                  <p>
                    Soy <strong className="font-medium">Manuel Flores</strong>.
                    Llevo años haciendo sistemas para negocios que no son
                    corporativos: notarías, un hospital, una cadena de comida,
                    un estacionamiento con autolavado, una consultora. Negocios donde el dueño
                    conoce su operación de memoria y necesita que la
                    herramienta se ajuste a esa operación, y no al revés.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p>
                    No empiezo de cero cada vez. Mucho de lo que un negocio
                    necesita ya lo construí para otro: cobranza que cuadra
                    sola, tableros que dicen la verdad, expedientes que no se
                    pierden. Lo adapto a tu forma de trabajar, y por eso tardo
                    semanas donde una agencia tarda meses.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Y no desaparezco cuando entrego. El sistema queda
                    funcionando, con alguien que lo conoce de arriba abajo y
                    que contesta el teléfono. Si tu negocio cambia,{" "}
                    <em>el sistema cambia contigo</em>.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Cómo es el proceso</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mb-16 text-balance max-w-3xl"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Cuatro pasos, sin sorpresas.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {methodology.map((m, idx) => (
              <Reveal key={m.step} delay={idx * 0.06}>
                <div className="bg-paper p-10 h-full">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-3xl text-mute tabular-nums">
                      {m.step}
                    </span>
                    <div>
                      <h3
                        className="font-display"
                        style={{ fontSize: "var(--text-display-md)" }}
                      >
                        {m.name}
                      </h3>
                      <p className="mt-4 text-[var(--text-body)] leading-relaxed text-ink">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Engagement />

      <section className="py-[var(--spacing-section)] rule-top">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-6">Nota del fundador</p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote
              className="font-display text-balance leading-snug text-ink"
              style={{ fontSize: "var(--text-display-md)" }}
            >
              &ldquo;Hago sistemas para que el negocio de mi cliente trabaje
              mejor, no para venderle tecnología. Sin intermediarios, sin
              promesas que no se cumplen y sin cobrar dos veces el mismo
              aprendizaje.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 text-[var(--text-caption)] tracking-[0.04em] uppercase text-mute">
              — Manuel Flores, fundador
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] bg-ink text-paper">
        <div className="container-narrow text-center">
          <Reveal>
            <h2
              className="text-balance text-paper"
              style={{ fontSize: "var(--text-display-xl)" }}
            >
              ¿Platicamos?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-paper text-ink uppercase tracking-[0.04em] text-sm font-medium hover:bg-paper/90 transition-colors"
            >
              Agendar 30 minutos
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
          </Reveal>
        </div>
      </section>

    </>
  );
}
