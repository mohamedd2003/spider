import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Set initial direction
const dir = i18n.language === "ar" ? "rtl" : "ltr";
document.documentElement.dir = dir;
document.documentElement.lang = i18n.language;

// Update direction on language change
i18n.on("languageChanged", (lng) => {
  const newDir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = newDir;
  document.documentElement.lang = lng;
});

export default i18n;
