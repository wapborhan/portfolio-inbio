"use client";
import { useState, useEffect } from "react";
import i18n from "./i18n";

export function useLocale(): [string, (locale: string) => void] {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || i18n.language || "en";
    setLocale(saved);
    if (typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(saved);
    }
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
    if (typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(newLocale);
    }
  };

  return [locale, changeLocale];
}
