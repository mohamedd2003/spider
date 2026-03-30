import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ scrolled }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      className={`flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-xs font-bold tracking-wider backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 hover:border-[#1abc9c]/50 hover:text-[#1abc9c] dark:hover:text-[#1abc9c]'
          : 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#1abc9c]/50 hover:text-[#1abc9c]'
      }`}
    >
      <i className="fa-solid fa-globe fa-xs" />
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
