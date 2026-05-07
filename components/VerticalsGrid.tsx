import Link from "next/link";
import { verticals } from "@/lib/verticals";
import { Reveal } from "./Reveal";

export function VerticalsGrid() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6">Industrias que entiendo</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Cinco industrias, un mismo método.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/verticales"
              className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
            >
              Ver detalle de cada pack →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rule-top rule-bottom">
          {verticals.map((vertical, idx) => (
            <Reveal key={vertical.slug} delay={idx * 0.05} className="h-full">
              <Link
                href={`/verticales#${vertical.slug}`}
                className="group block bg-paper p-8 md:p-10 h-full transition-colors hover:bg-soft"
              >
                <div className="text-mute font-display text-xl mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "var(--text-display-md)" }}
                >
                  {vertical.name}
                </h3>
                <p className="mt-4 text-mute leading-relaxed">
                  {vertical.promise}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-ink opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                  Ver pack
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="hidden lg:flex bg-paper p-10 items-center justify-center">
            <div className="text-center max-w-[200px]">
              <div className="text-mute font-display text-xl mb-3">06</div>
              <p className="text-sm text-mute leading-relaxed">
                ¿Tu industria no está aquí? Cada nueva la convertimos en pack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
