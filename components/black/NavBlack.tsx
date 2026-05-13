"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoBlack } from "./LogoBlack";

const links = [
  { href: "/black/cumplimiento", label: "Cumplimiento" },
  { href: "/black/boveda", label: "Bóveda" },
  { href: "/black/casos", label: "Casos" },
  { href: "/black/contacto", label: "Contacto" },
];

export function NavBlack() {
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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-paper)]/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link
          href="/black"
          aria-label="Areté Black — Inicio"
          className="flex items-center"
        >
          <LogoBlack className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-ink hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/black/contacto" className="btn-primary">
            Solicitar acceso
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
            className={`block w-6 h-px bg-[var(--color-ink)] transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--color-ink)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--color-ink)] transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-paper)] border-t border-line">
          <nav className="container-editorial flex flex-col py-6 gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display text-ink hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/black/contacto"
              onClick={() => setOpen(false)}
              className="btn-primary self-start mt-2"
            >
              Solicitar acceso
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
