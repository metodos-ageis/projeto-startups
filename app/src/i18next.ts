import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { ptBR } from "./translations";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    lng: "pt-BR",
    debug: true,

    resources: {
      "pt-BR": ptBR,
    },

    interpolation: {
      escapeValue: false,
    },
  });
