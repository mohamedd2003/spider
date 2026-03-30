import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-main/80 to-[#0e2e2b] px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-main mb-4 drop-shadow-lg">{t('notFound.title')}</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('notFound.heading')}</h2>
        <p className="text-lg text-white/80 mb-8">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 min-h-[48px] rounded-full bg-white text-main font-bold shadow-md hover:bg-main hover:text-white border-2 border-main transition-all duration-200"
        >
          {t('notFound.returnHome')}
        </Link>
      </div>
    </section>
  );
} 