import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import bnTranslation from "./bn.json";

const savedLocale =
  (typeof window !== "undefined" && localStorage.getItem("locale")) || "en";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      bn: { translation: bnTranslation },
    },
    lng: savedLocale,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18next;
