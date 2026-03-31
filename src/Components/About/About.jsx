import React from 'react'
import { useTranslation } from 'react-i18next'
import CurvedLoop from '../../../reactbits/CurvedLoop/CurvedLoop';
import aboutImg from '../../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (5).jpeg'
export default function About() {
  const { t } = useTranslation()
  return (
    <section >

  <section  id='About' className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center lato">
  <div className="px-5 py-8 sm:p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl ltr:sm:text-left">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white md:text-3xl">
         <span className='text-[#125e51]'>{t('about.spider')}</span> {t('about.heading')}
      </h2>

     
          
<ul className="font-thin text-gray-700 dark:text-white text-[13px] sm:text-[14px] md:text-[17px] break-words">
  <li className='mt-3 '  >
    
{t('about.p1')}

</li>
<li className='mt-3'>
{t('about.p2')}
</li>
<li className='mt-3'>
{t('about.p3')}
</li>
<li className='mt-3'>
{t('about.p4')}
</li>

</ul>


   

    
    </div>
  </div>

  <img
    alt="about us image"
    src={aboutImg}
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>


</section>
  )
}
