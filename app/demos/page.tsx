import type { Metadata } from "next";
import { orderedCases } from "@/lib/case-studies";
import { ClientLogos } from "@/components/ClientLogo";
import { Reveal } from "@/components/Reveal";
import { waLink, WA_MESSAGES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "Entra a una copia de cada sistema con datos inventados y úsalo como si fueras el dueño. Nada de lo que ves es información de un cliente.",
};

export default function DemosPage() {
  const withDemo = orderedCases.filter((c) => c.demo);
  const pending = orderedCases.filter((c) => !c.demo);

  return (
    <>
      <section className="py-[var(--spacing-section)] pt-12 md:pt-16">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Demos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Úsalos tú mismo, como si fueras el dueño.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              Cada demo es una copia del sistema real con datos inventados:
              clientes, cobros y expedientes que no existen. Entras con un
              usuario de prueba y tocas todo. Nada de lo que ves es información
              de un cliente mío.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] rule-top">
        <div className="container-editorial">
          {withDemo.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {withDemo.map((c, idx) => (
                <Reveal key={c.slug} delay={idx * 0.06} className="h-full">
                  <div className="h-full flex flex-col bg-paper border border-line p-8">
                    <ClientLogos ids={c.clients} height={52} mono={false} />
                    <p className="mt-6 font-display text-2xl leading-tight text-balance">
                      {c.title}
                    </p>
                    <p className="mt-3 text-[var(--text-body)] text-ink leading-relaxed">
                      {c.demo?.note ?? c.tagline}
                    </p>
                    <div className="mt-auto pt-8">
                      <a
                        href={c.demo!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium hover:opacity-85 transition"
                      >
                        Entrar al demo
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {pending.length > 0 && (
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-6">
                  {withDemo.length > 0 ? "En preparación" : "Los estoy preparando"}
                </p>
                <ul className="divide-y divide-line border-y border-line">
                  {pending.map((c) => (
                    <li
                      key={c.slug}
                      className="flex flex-wrap items-center justify-between gap-4 py-5"
                    >
                      <ClientLogos ids={c.clients} height={36} />
                      <span className="text-[var(--text-caption)] text-mute uppercase tracking-[0.04em]">
                        Próximamente
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-[var(--text-body)] text-ink leading-relaxed">
                  Mientras tanto te lo enseño en vivo, en media hora y sin
                  costo.{" "}
                  <a
                    href={waLink(WA_MESSAGES.es.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-medium"
                  >
                    Escríbeme por WhatsApp
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
