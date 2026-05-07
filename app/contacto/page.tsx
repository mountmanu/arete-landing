import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conversemos sobre tu industria. Areté Soluciones S.A. de C.V. — software AI-nativo para PyMEs mexicanas.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Contacto</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              30 minutos bastan para saber si encajamos.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              Cuéntame qué problema operativo tienes y de qué industria
              vienes. No cobro la primera conversación.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-5 lg:pl-8 space-y-12">
              <Reveal delay={0.1}>
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 overflow-hidden bg-soft shrink-0">
                    <Image
                      src="/images/manuel.jpg"
                      alt="Manuel Flores"
                      fill
                      sizes="80px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Te responde directamente</p>
                    <p className="font-display text-xl">Manuel Flores</p>
                    <p className="text-sm text-mute">Fundador</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <p className="eyebrow mb-4">Correo directo</p>
                  <a
                    href="mailto:hola@arete.mx"
                    className="font-display text-3xl link-underline text-ink"
                  >
                    hola@arete.mx
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-12 border-t border-line">
                  <p className="eyebrow mb-4">Razón social</p>
                  <p className="font-display text-xl">
                    Areté Soluciones S.A. de C.V.
                  </p>
                  <p className="mt-3 text-[var(--text-body)] text-mute leading-relaxed">
                    Operación remota desde México
                    <br />
                    Atención de lunes a viernes
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-soft p-6 border-l-2 border-ink">
                  <p className="text-sm leading-relaxed text-ink">
                    <strong className="font-medium">Tip:</strong> Si tu
                    industria no aparece en la lista, escríbelo en el
                    mensaje. Cada nueva industria es candidata a convertirse
                    en pack.
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
