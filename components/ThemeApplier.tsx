"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Aplica data-theme="black" al <html> cuando la ruta empieza con /black.
 * Esto hace que TODO en la página (Nav, Footer, secciones) herede
 * automáticamente los tokens luxury definidos en globals.css.
 *
 * Renderizado una sola vez en el root layout. No renderiza markup.
 */
export function ThemeApplier() {
  const pathname = usePathname();

  useEffect(() => {
    const isBlack = pathname?.startsWith("/black") ?? false;
    if (isBlack) {
      document.documentElement.setAttribute("data-theme", "black");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [pathname]);

  return null;
}
