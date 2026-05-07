import { Reveal } from "./Reveal";

const anchors = [
  "Notaría Pública 45",
  "Notaría Pública 273",
  "Hospital · Bajío",
  "Doña Tota",
  "Bento",
  "Comunidad Residencial",
  "Job Tracker BI",
  "Laura Zanuna",
];

export function ClientsStrip() {
  return (
    <section className="py-[var(--spacing-block)] rule-top rule-bottom">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-center mb-10">
            Operaciones reales, en producción
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            {anchors.map((name) => (
              <li
                key={name}
                className="font-display text-lg md:text-xl text-mute hover:text-ink transition-colors duration-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
