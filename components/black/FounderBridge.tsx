import Link from "next/link";
import { Reveal } from "../Reveal";

/**
 * FounderBridge — the credibility cross-sell back to Areté Soluciones.
 * Communicates that Areté Black is not a startup, it is the sixth vertical
 * of an operating firm with cases in production.
 */
export function FounderBridge() {
  return (
    <section className="py-[var(--spacing-section)] bg-soft border-t border-b border-line">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-gold mb-6">Continuidad operativa</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Una sexta vertical, no una nueva empresa.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="prose-editorial">
              <Reveal delay={0.1}>
                <p>
                  Areté Black opera bajo Areté Soluciones S.A. de C.V.,
                  empresa mexicana con siete sistemas en producción y cinco
                  industrias atendidas: notarías, hospitales, restaurantes,
                  comunidades y servicios profesionales.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  El núcleo técnico — identidad multi-tenant, facturación
                  CFDI, recuperación documental contextual, agentes
                  autónomos, observabilidad inmutable — es el mismo que ya
                  sostiene operaciones notariales con rigor jurídico diario
                  y operaciones hospitalarias con sensibilidad de datos
                  clínicos. La sexta vertical hereda esa madurez.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  No es un producto en busca de cliente. Es la consecuencia
                  natural de cinco años empacando dominios regulados.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-gold"
                >
                  Conocer el grupo Areté →
                </Link>
                <Link
                  href="/casos"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-ink/70"
                >
                  Ver los siete casos en producción →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
