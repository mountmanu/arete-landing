import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Engagement } from "@/components/Engagement";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Soy Manuel Díaz, fundador de Areté Soluciones. Construyo software AI-nativo para PyMEs mexicanas — un núcleo reusable y packs por industria.",
};

const methodology = [
  {
    step: "01",
    name: "Discovery",
    description:
      "Una semana contigo y tu equipo. Mapeamos el dominio, identificamos los flujos críticos y diagnosticamos qué piezas del núcleo aplican. Salimos con un plan ejecutable y una estimación.",
  },
  {
    step: "02",
    name: "Pack assembly",
    description:
      "Si tu industria ya tiene pack, lo ensamblamos. Si es nueva, definimos qué se construye una vez para reusarse muchas. Tú sabes qué pagas y qué recibe el siguiente cliente.",
  },
  {
    step: "03",
    name: "Deploy",
    description:
      "Desplegamos en producción entre cuatro y doce semanas. Operas desde el primer mes. Iteramos sobre uso real, no sobre demos.",
  },
  {
    step: "04",
    name: "Compounding",
    description:
      "El pack queda disponible para el siguiente cliente. Tu sistema sigue evolucionando con cada nueva capacidad que añadimos al núcleo.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Cómo trabajo</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-5xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Componer software, no revenderlo.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <figure className="relative">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-soft">
                    <Image
                      src="/images/manuel.jpg"
                      alt="Manuel Díaz, fundador de Areté Soluciones"
                      fill
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-5 text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
                    Manuel Díaz · Fundador de Areté Soluciones
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="prose-editorial">
                <Reveal>
                  <p>
                    <strong className="font-medium">
                      Areté Soluciones S.A. de C.V.
                    </strong>{" "}
                    es una firma mexicana de software AI-nativo. Operamos sobre
                    una idea simple: la consultoría tradicional vende horas y
                    empieza cada proyecto de cero. Nosotros construimos un
                    núcleo reusable y empacamos por industria, para que cada
                    proyecto componga valor sobre los anteriores.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p>
                    Esto no es una estrategia de pricing — es una arquitectura.
                    Auth, billing, RAG, agentes, MCP y observabilidad viven en
                    un núcleo común. Sobre él, packs verticales para notarías,
                    hospitales, restaurantes, comunidades y servicios
                    profesionales. Cuando entras como cliente, no escoges entre
                    &ldquo;off-the-shelf&rdquo; o &ldquo;custom&rdquo;: recibes
                    la madurez del núcleo y la profundidad del pack.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    El primer cliente de una industria co-financia la creación
                    del pack y se queda con un sistema hecho a la medida de su
                    operación. El segundo lo recibe en semanas. El tercero ya
                    entra a una plataforma madura. La promesa no es
                    &ldquo;haremos software para ti&rdquo; — es que{" "}
                    <em>la siguiente entrega siempre será mejor que la anterior</em>.
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
            <p className="eyebrow mb-6">Metodología</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mb-16 text-balance max-w-3xl"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Cuatro pasos del kickoff a producción.
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
              &ldquo;Construyo software para que las operaciones de mis
              clientes alcancen su mejor versión. Sin intermediarios, sin
              promesas que no se cumplen, sin cobrar dos veces el mismo
              aprendizaje.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 text-[var(--text-caption)] tracking-[0.04em] uppercase text-mute">
              — Manuel Díaz, fundador
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
              ¿Empezamos por una conversación?
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
