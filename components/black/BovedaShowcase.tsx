import Link from "next/link";
import { Reveal } from "../Reveal";

const features = [
  "Certificado digital de procedencia por cada pieza adquirida",
  "Registro de inscripción láser de laboratorio (GIA / IGI / HRD) cuando la pieza la trae",
  "Tasación anual actualizada con reporte editorial firmado",
  "Recompra preferente garantizada por la casa al titular",
  "Cadena de servicios y mantenimientos con registro fotográfico",
];

export function BovedaShowcase() {
  return (
    <section className="py-[var(--spacing-section)] bg-soft border-t border-b border-line">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-gold mb-6">Módulo opcional</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Bóveda.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[var(--text-body-lg)] font-display italic text-gold leading-relaxed">
                Una experiencia digital, con su marca, para los clientes que
                más valor representan.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[var(--text-body)] leading-relaxed text-ink/85">
                Sus clientes top no descargan una app de Areté. Descargan
                <em className="text-gold not-italic"> «Berger · Mi Bóveda» </em>
                — o el nombre de su casa — y reciben en ella el certificado
                digital, la inscripción láser, la tasación anual y el derecho
                de recompra preferente. La firma controla la experiencia. La
                tecnología la entregamos nosotros, en blanco.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/black/boveda" className="btn-primary">
                  Conocer Bóveda
                </Link>
                <Link
                  href="/black/contacto"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-gold"
                >
                  Solicitar demostración →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="bg-[var(--color-paper-pure)] border border-line p-10 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className="accent-rule" />
                  <span className="eyebrow text-gold">
                    White-label · HNW
                  </span>
                </div>
                <p
                  className="font-display text-ink"
                  style={{ fontSize: "var(--text-display-md)", lineHeight: 1.1 }}
                >
                  Lo que reciben sus clientes top.
                </p>
                <ul className="mt-10 space-y-px bg-line">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="bg-[var(--color-paper-pure)] p-5 flex gap-4 items-start"
                    >
                      <span className="font-display text-gold mt-0.5 tabular-nums text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[var(--text-body)] leading-relaxed text-ink/90">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-line">
                  <p className="text-[var(--text-caption)] text-mute leading-relaxed">
                    Disponible como add-on al pack base. Aumenta la
                    suscripción mensual por sucursal en un tramo
                    correspondiente al volumen de clientes top elegibles.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
