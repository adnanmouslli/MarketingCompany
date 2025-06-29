import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

export const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
  });

// ضبط اتجاه الصفحة تلقائياً عند تحميل الصفحة (في المتصفح فقط)
if (typeof window !== "undefined") {
  const currentLang = localStorage.getItem("i18nextLng") || "en";
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
}

export default i18n;
