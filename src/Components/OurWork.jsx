import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Video, Camera, Palette, Megaphone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    key: 'videos',
    href: '/videos',
    icon: Video,
    gradient: 'from-[#1abc9c]/20 via-[#125e51]/10 to-transparent',
    accent: '#1abc9c',
    span: 'lg:col-span-2 lg:row-span-2',        // large featured tile
  },
  {
    key: 'photos',
    href: '/photos',
    icon: Camera,
    gradient: 'from-[#1abc9c]/15 via-transparent to-[#125e51]/10',
    accent: '#1abc9c',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    key: 'designs',
    href: '/designs',
    icon: Palette,
    gradient: 'from-[#125e51]/15 via-transparent to-[#1abc9c]/10',
    accent: '#1abc9c',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    key: 'campaigns',
    href: '/campaigns',
    icon: Megaphone,
    gradient: 'from-[#1abc9c]/10 via-[#125e51]/15 to-transparent',
    accent: '#1abc9c',
    span: 'lg:col-span-2 lg:row-span-1',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurWork() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="ourwork"
      className="relative py-20 sm:py-28 px-4 overflow-hidden mesh-gradient-dark noise-bg"
    >
      {/* Ambient background shift on hover */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-linear-to-br ${categories[hovered].gradient} pointer-events-none z-0`}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-widest text-[#1abc9c] uppercase mb-3">
            {t('ourWork.title')}
          </span>
          <h2
            className="raleway font-extrabold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            {t('ourWork.title')}
          </h2>
          <div className="mx-auto mt-4 w-20 glow-line" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[180px] sm:auto-rows-[200px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.key}
                href={cat.href}
                variants={cardVariants}
                layoutId={`work-${cat.key}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                data-cursor-hover
                className={`
                  group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl
                  border border-white/[0.06] hover:border-[#1abc9c]/30
                  bg-white/[0.03] backdrop-blur-sm
                  transition-all duration-500 overflow-hidden
                  ${cat.span}
                `}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cat.accent}15, transparent 70%)`,
                  }}
                />

                {/* Top row: icon + arrow */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-[#1abc9c]/10 border border-[#1abc9c]/10 group-hover:bg-[#1abc9c]/20 group-hover:border-[#1abc9c]/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#1abc9c]" />
                  </div>
                  <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#1abc9c]" />
                  </div>
                </div>

                {/* Bottom: title */}
                <div className="relative z-10 mt-auto">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#1abc9c] transition-colors duration-300 raleway"
                    dir={isAr ? 'rtl' : 'ltr'}
                  >
                    {t(`ourWork.${cat.key}`)}
                  </h3>
                  {/* Subtle underline on hover */}
                  <div className="h-0.5 w-0 group-hover:w-12 bg-[#1abc9c] rounded transition-all duration-500 mt-2" />
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#1abc9c]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 