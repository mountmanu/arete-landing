import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { waLink, WA_MESSAGES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Platiquemos de tu negocio. Media hora, sin costo, y te contesto yo.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-12 md:pt-16">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Contacto</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Media hora para saber si te puedo ayudar.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[var(--text-body-lg)] text-ink leading-relaxed">
              Cuéntame qué se te está complicando en el negocio y a qué te
              dedicas. La primera plática no cuesta.
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
                    href="mailto:manuel@lincesistemas.com"
                    className="font-display text-3xl link-underline text-ink"
                  >
                    manuel@lincesistemas.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.175}>
                <div>
                  <p className="eyebrow mb-4">WhatsApp directo</p>
                  <a
                    href={waLink(WA_MESSAGES.es.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-3xl link-underline text-ink"
                  >
                    +52 834 196 3524
                  </a>
                  <p className="mt-3 text-[var(--text-body)] text-mute leading-relaxed">
                    Es la vía más rápida. Escribes y te contesto yo.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-12 border-t border-line">
                  <p className="eyebrow mb-4">Dónde estoy</p>
                  <p className="font-display text-xl">
                    LINCE Sistemas
                  </p>
                  <p className="mt-3 text-[var(--text-body)] text-mute leading-relaxed">
                    Ciudad Victoria, Tamaulipas. Trabajo con negocios de todo
                    México, en persona o a distancia.
                    <br />
                    Atención de lunes a viernes
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-soft p-6 border-l-2 border-ink">
                  <p className="text-sm leading-relaxed text-ink">
                    Si tu giro no está en la lista, no importa. Escríbelo
                    en el mensaje; buena parte de lo que necesitas seguramente
                    ya lo construí para otro negocio.
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
