import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Clients from '../../Components/Clients/clients'
import Contact from '../../Components/Contact/contact'
import OurWork from '../../Components/OurWork'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay ensures the DOM is rendered
      }
    }
  }, [location]);
  return (
   <>
<Hero/>

<h2 id='about' className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl raleway pt-16 text-gray-900 dark:text-white'>{t('about.sectionTitle')}</h2>
<About/>
<h2 id='clients' className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl raleway pt-16 text-gray-900 dark:text-white'>{t('clients.sectionTitle')}</h2>
<Clients/>
<h2 id='services' className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl raleway pt-16 text-gray-900 dark:text-white'>{t('services.sectionTitle')}</h2>
<Services/>
<OurWork/>




<h2 id='contact' className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl raleway pt-16 text-gray-900 dark:text-white'>{t('contact.sectionTitle')}</h2>

             <Contact/>
   </>
  )
}
