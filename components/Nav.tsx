"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoFull } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLang } from "@/contexts/LangContext";
import { waLink, WA_MESSAGES } from "@/lib/config";
import { caseStudies } from "@/lib/case-studies";

const staticLinks = [
  { href: "/nosotros", es: "Cómo trabajo", en: "How I work" },
  { href: "/verticales", es: "Industrias", en: "Industries" },
  { href: "/casos", es: "Casos", en: "Cases" },
  ...(caseStudies.some((c) => c.demo)
    ? [{ href: "/demos", es: "Demos", en: "Demos" }]
    : []),
  { href: "/contacto", es: "Contacto", en: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link href="/" aria-label="LINCE — Inicio" className="flex items-center">
          <LogoFull className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {staticLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="nav-link text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-ink/70 hover:text-ink aria-[current=page]:text-ink transition-colors duration-300"
            >
              {lang === "en" ? link.en : link.es}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            className="flex items-center gap-1 text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
          >
            <span className={lang === "es" ? "text-ink" : "text-mute"}>ES</span>
            <span className="text-mute">·</span>
            <span className={lang === "en" ? "text-ink" : "text-mute"}>EN</span>
          </button>
          <a
            href={waLink(WA_MESSAGES[lang].nav)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            {lang === "en" ? "WhatsApp" : "Hablemos"}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <nav className="container-editorial flex flex-col py-6 gap-5">
            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}
            <a
              href={waLink(WA_MESSAGES[lang].nav)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary self-start mt-2"
            >
              <WhatsAppIcon />
              {lang === "en" ? "WhatsApp" : "Hablemos"}
            </a>
            <button
              type="button"
              onClick={toggleLang}
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
              className="self-start flex items-center gap-1 text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium"
            >
              <span className={lang === "es" ? "text-ink" : "text-mute"}>ES</span>
              <span className="text-mute">·</span>
              <span className={lang === "en" ? "text-ink" : "text-mute"}>EN</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
