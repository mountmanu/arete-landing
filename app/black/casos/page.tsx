import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactCTABlack } from "@/components/black/ContactCTABlack";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Areté Black inaugura su pack con cuentas ancla en 2026–2027. Mientras tanto, conozca los siete casos en producción del grupo Areté Soluciones.",
};

export default function CasosBlackPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Casos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Una vertical nueva. Una operación con historia.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
              Areté Black inaugura su pack con cuentas ancla en 2026–2027. La
              tecnología, sin embargo, no es nueva: opera ya en cinco
              industrias hermanas dentro del grupo Areté Soluciones, con
              siete sistemas en producción.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] bg-soft border-t border-b border-line">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-gold mb-6">Mientras tanto</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance"
                  style={{ fontSize: "var(--text-display-lg)" }}
                >
                  La madurez que reciben las casas ancla.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 prose-editorial">
              <Reveal delay={0.1}>
                <p>
                  Notaría Pública 45 y 273 procesan escrituras con el mismo
                  núcleo de bitácora auditable que ahora vigila operaciones
                  bajo umbral LFPIORPI. Un hospital privado del Bajío
                  recupera más de 11 % de margen filtrado con el mismo motor
                  de detección de fugas que conciliará operaciones contra
                  Avisos al SPPLD.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Doña Tota y Bento operan con paneles multi-sucursal que
                  reemplazan a ocho reportes manuales — la misma arquitectura
                  que mostrará a su consejo el estado de cumplimiento
                  consolidado de su grupo.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-6 mt-8">
                  <Link
                    href="/casos"
                    className="btn-primary"
                  >
                    Ver los siete casos del grupo
                  </Link>
                  <Link
                    href="/black/contacto"
                    className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-gold"
                  >
                    Aplicar como caso ancla →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Caso ancla</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance max-w-3xl"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Buscamos una primera casa que co-financie la vertical.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
              El primer cliente de cada nueva vertical Areté co-financia la
              creación del pack. Recibe un sistema a su medida con
              condiciones de design partner, exclusividad por sub-segmento
              durante el primer año, y derechos editoriales sobre el caso de
              estudio. Si su firma considera tomar este rol, hablemos.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTABlack />
    </>
  );
}
