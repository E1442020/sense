import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources: any = {
  en: {
    translation: {
      home: "Home",
    },
  },

  ar: {
    translation: {
      home: "الرئيسية",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  detection: {
    caches: ["localStorage", "cookie"],
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
