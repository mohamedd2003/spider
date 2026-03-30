import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import Slider from '../slider/slider'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight

  return (
    <section
      id="#"
      className="relative h-screen w-full overflow-hidden flex flex-col bg-black"
    >
      {/* ─── Background image ─── */}
      <div className="absolute inset-0">
        <img
          alt="Spider Agency hero"
          src="https://res.cloudinary.com/dp2kkgobw/image/upload/v1751580564/IMG_8634_cmnjsj.webp"
          className="h-full w-full object-cover object-[center_30%] sm:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#125e51]/25 blur-[120px]" />
        <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-[#1abc9c]/10 blur-[100px]" />
      </div>

      {/* ═══════ Main content ═══════ */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-20 sm:pt-28 pb-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8">
          <div
            className={`max-w-3xl ${isAr ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}
            dir={isAr ? 'rtl' : 'ltr'}
            style={isAr ? { fontFamily: '"Cairo", sans-serif' } : undefined}
          >

            {/* Accent pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-[#125e51]/40 bg-[#125e51]/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-[#1abc9c] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#1abc9c] uppercase">
                Spider Agency — Est. 2019
              </span>
            </motion.div>

            {/* Fluid headline — capped at 3.8rem on xl+ */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: 'clamp(1.6rem, 5vw + 0.5rem, 3.8rem)' }}
            >
              <span>{t('hero.title1')}</span>{' '}
              <span className="text-[#1abc9c]">{t('hero.title2')}</span>
              <br />
              <span>{t('hero.title3')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-3 sm:mt-4 max-w-xl text-[13px] sm:text-base md:text-lg text-gray-300 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="mt-5 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#125e51] px-5 py-3 min-h-[48px] sm:px-8 sm:py-3.5 text-sm md:text-base font-bold text-white shadow-xl shadow-[#125e51]/30 transition-all duration-300 hover:shadow-[#125e51]/50 hover:scale-105"
              >
                <span className="relative z-10">{t('hero.getStarted')}</span>
                <ArrowIcon size={16} className="relative z-10 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="/#ourwork"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 min-h-[48px] sm:px-7 sm:py-3.5 text-sm md:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <Play size={14} fill="white" />
                {t('ourWork.title')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════ Bottom — Client Logos Marquee (all screens) ═══════ */}
      <div className="relative z-10 flex-shrink-0 pb-5 sm:pb-8">
        {/* Divider */}
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8 mb-3 sm:mb-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="text-[0.6rem] sm:text-xs font-semibold tracking-widest text-gray-500 uppercase whitespace-nowrap">
              {t('hero.trustedBy')}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </div>
        {/* Marquee with edge fades */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-black/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-black/90 to-transparent" />
          <Slider />
        </div>
      </div>
    </section>
  )
}
