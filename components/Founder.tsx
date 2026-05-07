import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section className="py-[var(--spacing-section)] bg-soft rule-top rule-bottom">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow mb-6">Quién está detrás</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Manuel Díaz.
              </h2>
            </Reveal>

            <div className="mt-8 prose-editorial">
              <Reveal delay={0.1}>
                <p>
                  Llevo años construyendo software para negocios mexicanos —
                  notarías, hospitales, restaurantes, comunidades, firmas
                  profesionales. Lo aprendido en cada proyecto vive en un
                  núcleo común: el siguiente cliente lo recibe ya armado.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Cuando me contratas no empiezas de cero. Recibes el
                  resultado de siete sistemas en producción, ajustado a cómo
                  tu equipo ya trabaja. Eso es lo que significa{" "}
                  <em>componer</em> en lugar de revender.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Trabajo directamente con cada cliente. Sin intermediarios,
                  sin scope creep, sin promesas que no se cumplen. Si lo que
                  necesitas no encaja con esto, te lo digo en la primera
                  llamada.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contacto" className="btn-primary">
                  Hablemos 30 minutos
                </Link>
                <Link
                  href="/nosotros"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
                >
                  Cómo trabajo →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <figure className="relative">
                <div className="relative aspect-[3/4] w-full max-w-[520px] mx-auto overflow-hidden bg-paper">
                  <Image
                    src="/images/manuel.jpg"
                    alt="Manuel Díaz, fundador de Areté Soluciones"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <figcaption className="mt-5 text-center text-[var(--text-caption)] text-mute tracking-[0.04em] uppercase">
                  Manuel Díaz · Fundador
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
