"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoFull } from "./Logo";

const links = [
  { href: "/nosotros", label: "Cómo trabajo" },
  { href: "/verticales", label: "Industrias" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link href="/" aria-label="Areté — Inicio" className="flex items-center">
          <LogoFull className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium link-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary">
            Hablemos
          </Link>
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="btn-primary self-start mt-2"
            >
              Hablemos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
