import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tbi8mb8", "template_4x3hcez", form.current, {
        publicKey: 'zXDQtX0M6jFaqG_8a',
      })
      .then(
        () => {
          toast.success(t('contact.successMessage'), {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        },
        (error) => {
          console.log(error);
          toast.error(t('contact.errorMessage'), {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      );
  };

  const inputBase =
    'w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#125e51]/50 focus:border-[#125e51] transition-all duration-200';

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#125e51]/5 dark:bg-[#125e51]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1abc9c]/5 dark:bg-[#1abc9c]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Headline + Info ── */}
          <div className={isAr ? 'text-right' : ''}>
            <div>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold raleway text-[#125e51] leading-tight"
              >
                {t('contact.letsGetInTouch')}
                <br />
                {t('contact.letsGetInTouch2')}
              </h2>
              <p className="mt-5 text-gray-600 dark:text-gray-400 text-base max-w-md leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Contact cards */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+201095010007"
                className="flex items-center gap-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 hover:border-[#125e51]/50 dark:hover:border-[#125e51]/50 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#125e51]/10 text-[#125e51] group-hover:bg-[#125e51] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide font-semibold">{t('footer.callUs')}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white" dir="ltr">+20-109-501-0007</p>
                </div>
              </a>

              <a
                href="mailto:sspidermarketing@gmail.com"
                className="flex items-center gap-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 hover:border-[#125e51]/50 dark:hover:border-[#125e51]/50 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#125e51]/10 text-[#125e51] group-hover:bg-[#125e51] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">sspidermarketing@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right: Form Card ── */}
          <div>
            <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none">
              <form onSubmit={sendEmail} ref={form} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={inputBase}
                    placeholder={t('contact.name')}
                    required
                  />
                </div>

                {/* Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className={inputBase}
                      placeholder={t('contact.phone')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className={inputBase}
                      placeholder={t('contact.company')}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={inputBase}
                    placeholder={t('contact.email')}
                    required
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.budgetRange')}
                  </label>
                  <select
                    name="budget"
                    id="budget"
                    className={inputBase}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>{t('contact.selectBudget')}</option>
                    <option value="under 50k">{t('contact.under50k')}</option>
                    <option value="from 50k to 100k">{t('contact.50kTo100k')}</option>
                    <option value="Above 100k">{t('contact.above100k')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.messagePlaceholder')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={inputBase + ' resize-none'}
                    placeholder={t('contact.messagePlaceholder')}
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#125e51] px-6 py-3.5 min-h-[48px] text-sm font-bold text-white shadow-lg shadow-[#125e51]/20 hover:bg-[#0f4d43] hover:shadow-[#125e51]/40 hover:scale-[1.02] transition-all duration-300"
                >
                  {t('contact.sendMessage')}
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
