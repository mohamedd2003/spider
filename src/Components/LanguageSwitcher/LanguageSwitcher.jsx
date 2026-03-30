import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      className="btn btn-ghost btn-sm text-white border border-white/30 hover:bg-white/10 rounded-full px-3 py-1 text-sm font-semibold tracking-wide transition-all duration-300"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
