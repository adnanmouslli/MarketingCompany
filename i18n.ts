import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

export const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

// اجلب اللغة المحفوظة أو اضبط "ar" كلغة افتراضية
const savedLang = typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : null;
const fallbackLang = savedLang === "ar" || savedLang === "en" ? savedLang : "ar";

// اضبط اتجاه الصفحة واحفظ اللغة الافتراضية إذا لم تكن موجودة
if (typeof window !== "undefined") {
  document.documentElement.dir = fallbackLang === "ar" ? "rtl" : "ltr";
  if (!savedLang) {
    localStorage.setItem("i18nextLng", fallbackLang);
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: fallbackLang, 
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
  });

// دالة تغيير اللغة لاحقًا
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("i18nextLng", lng);
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

export default i18n;
