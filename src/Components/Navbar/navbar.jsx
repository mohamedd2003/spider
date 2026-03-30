import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  /* ——— Dark mode toggle ——— */
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

  /* ——— Navbar scroll effect ——— */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

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
      {/* ════════════════ NAVBAR ════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <a href="/#" className="flex-shrink-0">
            <img
              src={logo}
              alt="Spider Agency"
              className="h-10 w-10 md:h-14 md:w-14 transition-transform duration-300 hover:scale-110"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-white dark:text-gray-200 hover:text-[#125e51] dark:hover:text-[#1abc9c] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-[#125e51] dark:bg-[#1abc9c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </li>
            ))}

            {/* Join Us CTA */}
            <li className="ml-2">
              <a
                href="/joinUs"
                className="inline-flex items-center gap-2 rounded-full bg-[#125e51] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#125e51]/25 hover:bg-[#0f4d43] hover:shadow-[#125e51]/40 hover:scale-105 hover:gap-3 transition-all duration-300"
              >
                <i className="fa-solid fa-user-plus fa-sm" />
                {t('nav.joinUs')}
              </a>
            </li>

            {/* Language Switcher */}
            <li className="ml-1">
              <LanguageSwitcher />
            </li>

            {/* Dark Mode Toggle */}
            <li className="ml-1">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/10 transition-all duration-300"
              >
                {dark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile: controls row */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 dark:border-gray-600 dark:text-gray-300 transition-all duration-300"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 dark:border-gray-600 dark:text-gray-300 transition-all duration-300"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />
      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-500 ease-out lg:hidden rtl:right-auto rtl:left-0 ${
          open ? 'translate-x-0 rtl:translate-x-0' : 'translate-x-full rtl:-translate-x-full'
        }`}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-200 dark:border-gray-800">
          <img src={logo} alt="Spider" className="h-10 w-10" />
          <button onClick={close} aria-label="Close menu" className="text-gray-500 dark:text-gray-400 hover:text-[#125e51]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-[#125e51]/10 dark:hover:bg-[#125e51]/20 hover:text-[#125e51] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="/joinUs"
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-full bg-[#125e51] px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#0f4d43] transition-all duration-300"
            >
              <i className="fa-solid fa-user-plus fa-sm" />
              {t('nav.joinUs')}
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
