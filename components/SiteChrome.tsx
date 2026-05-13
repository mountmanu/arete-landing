"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { NavBlack } from "./black/NavBlack";
import { FooterBlack } from "./black/FooterBlack";

/**
 * Conditional chrome:
 *  - /black/* renders the luxury Nav + Footer wrapped in a flex-column div
 *    that carries data-theme="black" so all the CSS custom-property overrides
 *    cascade into every descendant. The wrapper also paints the onyx
 *    background, since `body` is server-rendered and cannot change palette
 *    per route.
 *  - Everything else renders the canonical Areté chrome inline so the body's
 *    own flex layout stays in charge.
 *
 * Keeping a single client wrapper avoids parallel routes complexity and lets
 * each sub-experience own its palette, typography, and voice without
 * duplicating the rest of the marketing site.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBlack = pathname?.startsWith("/black") ?? false;

  if (isBlack) {
    return (
      <div
        data-theme="black"
        className="flex-1 flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]"
      >
        <NavBlack />
        <main className="flex-1">{children}</main>
        <FooterBlack />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
