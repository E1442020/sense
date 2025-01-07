import i18n from "../../i18n";
import { useDirection } from "@mantine/core";

export default function useLanguage() {
  const { setDirection } = useDirection();

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";

    localStorage.setItem("language", nextLanguage || "en");
    i18n.changeLanguage(localStorage.getItem("language") || nextLanguage);
    setDirection(nextLanguage === "ar" ? "rtl" : "ltr");
  };
  return { toggleLanguage };
}
