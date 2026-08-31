"use client";

import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const stack = [
  "TypeScript",
  "Rust",
  "Python",
  "Next.js",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Claude API",
  "OpenAI API",
  "YOLOv8",
  "ONNX Runtime",
  "pgvector",
  "Docker",
  "AWS",
  "Vercel",
  "Railway",
  "Stripe MX",
  "WhatsApp Business API",
  "CFDI 4.0",
];

const label = {
  es: "Stack en producción",
  en: "Production stack",
};

export function TechStackStrip() {
  const { lang } = useLang();

  return (
    <section className="py-[var(--spacing-block)] rule-top rule-bottom">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-center mb-10">{label[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {stack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1.5 border border-line text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-mute hover:text-ink hover:border-ink transition-colors duration-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
