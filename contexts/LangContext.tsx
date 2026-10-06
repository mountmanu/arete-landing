"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "es" | "en";

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "es",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lince-lang") as Lang | null;
      if (stored === "en" || stored === "es") setLang(stored);
    } catch {
      // localStorage unavailable — stay on default
    }
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    try {
      localStorage.setItem("lince-lang", next);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
