import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Menu, X, UserPlus, Globe, ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* ── Theme — default to dark ── */
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    // Default to dark if no preference saved
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)
  const toggleLang = () => i18n.changeLanguage(isAr ? 'en' : 'ar')

  const navLinks = [
    { label: t('nav.home'), href: '/#' },
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.ourWork'), href: '/#ourwork' },
    { label: t('nav.clients'), href: '/#clients' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  return (
    <>
      {/* ════════════════ DESKTOP — Floating Centered Pill ════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 hidden lg:flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled
              ? 'mt-0 w-full max-w-full rounded-none px-8 py-2.5 bg-black/90 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/5'
              : 'mt-5 max-w-5xl rounded-full px-6 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10'
          }`}
        >
          {/* Logo */}
          <a href="/#" className="flex-shrink-0 mr-3">
            <img src={logo} alt="Spider Agency" className="h-9 w-9 transition-transform duration-300 hover:scale-110" />
          </a>

          {/* Center links */}
          <ul className="flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-3 py-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-[#1abc9c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-1.5 ml-3">
            <a
              href="/joinUs"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#125e51] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#125e51]/25 hover:bg-[#0f4d43] hover:shadow-[#125e51]/40 hover:scale-105 transition-all duration-300"
            >
              <UserPlus size={13} />
              {t('nav.joinUs')}
            </a>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex h-8 items-center gap-1 rounded-full px-2.5 text-[11px] font-bold tracking-wider text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Globe size={13} />
              {isAr ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:text-amber-400 hover:bg-white/10 transition-all duration-300"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ════════════════ MOBILE — Top Bar ════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex lg:hidden items-center justify-between px-3 sm:px-4 py-2 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-2xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <a href="/#" className="flex-shrink-0">
          <img src={logo} alt="Spider Agency" className="h-10 w-10" />
        </a>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex h-10 items-center gap-1 rounded-full px-3 text-xs font-bold tracking-wider text-white/80 hover:text-white active:bg-white/10 transition-all duration-300"
          >
            <Globe size={15} />
            {isAr ? 'EN' : 'AR'}
          </button>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-amber-400 active:bg-white/10 transition-all duration-300"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 active:bg-white/20 transition-all duration-300"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />
      <aside
        className={`fixed top-0 z-50 h-full w-72 bg-gray-950 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isAr ? 'left-0' : 'right-0'
        } ${
          open
            ? 'translate-x-0'
            : isAr ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/10">
          <img src={logo} alt="Spider" className="h-10 w-10" />
          <button onClick={close} aria-label="Close menu" className="text-gray-400 hover:text-[#1abc9c]">
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 min-h-[48px] text-base font-medium text-gray-200 hover:bg-[#125e51]/20 hover:text-[#1abc9c] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="/joinUs"
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-full bg-[#125e51] px-5 py-3.5 min-h-[48px] text-base font-semibold text-white shadow-lg hover:bg-[#0f4d43] transition-all duration-300"
            >
              <UserPlus size={16} />
              {t('nav.joinUs')}
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
