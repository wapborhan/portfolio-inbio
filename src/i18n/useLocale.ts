"use client";

import { useTranslation } from "react-i18next";

export const useLocale = (): [string, (locale: string) => void] => {
  const { i18n } = useTranslation();

  const setLocale = (locale: string) => {
    i18n.changeLanguage(locale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  };

  return [i18n.language || "en", setLocale];
};
