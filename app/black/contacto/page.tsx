import type { Metadata } from "next";
import { ContactFormBlack } from "@/components/black/ContactFormBlack";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solicitar acceso",
  description:
    "Areté Black opera por solicitud. Cuéntenos sobre su casa: si califica para una conversación, le confirmamos en menos de 48 horas.",
};

export default function ContactoBlackPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Solicitar acceso</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Hablemos en privado.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
              Por la naturaleza del producto y de nuestros clientes,
              evaluamos cada solicitud caso por caso. Si su firma califica
              para una conversación, le confirmamos en menos de 48 horas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactFormBlack />
              </Reveal>
            </div>

            <aside className="lg:col-span-5 lg:pl-8 space-y-12">
              <Reveal delay={0.1}>
                <div>
                  <p className="eyebrow text-gold mb-3">Le responde</p>
                  <p
                    className="font-display"
                    style={{ fontSize: "var(--text-display-md)" }}
                  >
                    Manuel Flores
                  </p>
                  <p className="mt-2 text-mute">
                    Fundador · Areté Soluciones S.A. de C.V.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <p className="eyebrow text-gold mb-4">Correo directo</p>
                  <a
                    href="mailto:volismfa@gmail.com"
                    className="font-display text-3xl link-underline text-ink hover:text-gold transition-colors"
                  >
                    volismfa@gmail.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-12 border-t border-line">
                  <p className="eyebrow text-gold mb-4">
                    Lo que pasa después
                  </p>
                  <ol className="space-y-5">
                    <Step
                      number="01"
                      title="Revisión interna"
                      body="Evaluamos su solicitud frente a nuestros criterios de cliente: perfil, geografía, exposición regulatoria."
                    />
                    <Step
                      number="02"
                      title="Confirmación en 48 h"
                      body="Si calificamos para conversar, le proponemos tres horarios. Si no es el momento, se lo decimos también."
                    />
                    <Step
                      number="03"
                      title="Dictamen escrito"
                      body="Tras la conversación inicial, entregamos un dictamen breve con plan de implementación o recomendaciones, sin costo."
                    />
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-soft p-6 border-l-2 border-gold">
                  <p className="text-sm leading-relaxed text-ink/85">
                    <strong className="font-medium text-gold">
                      Confidencialidad:
                    </strong>{" "}
                    Esta solicitud llega directamente al fundador. Sus datos
                    no entran a CRM, no se comparten con terceros, no se
                    utilizan para marketing.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <li className="grid grid-cols-[auto,1fr] gap-5">
      <span className="font-display text-gold text-lg tabular-nums">
        {number}
      </span>
      <div>
        <p className="font-display text-xl text-ink">{title}</p>
        <p className="mt-2 text-[var(--text-body)] text-mute leading-relaxed">
          {body}
        </p>
      </div>
    </li>
  );
}
