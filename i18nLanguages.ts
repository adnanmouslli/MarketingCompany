import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

export const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

export const availableLanguages = Object.keys(resources);
