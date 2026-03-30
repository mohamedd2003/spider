import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from "../../assets/logo/1.png";
import img2 from "../../assets/logo/2.png";
import img3 from "../../assets/logo/3.png";
import img4 from "../../assets/logo/4.png";
import img5 from "../../assets/logo/5.png";
import img6 from "../../assets/logo/6.png";
import img7 from "../../assets/logo/7.png";
import img8 from "../../assets/logo/8.png";
import img9 from "../../assets/logo/9.png";
import img10 from "../../assets/logo/10.png";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Slider() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'

  return (
    <div className="overflow-hidden w-full" dir="ltr">
      <div
        className="flex w-max items-center py-3"
        style={{ animation: `${isRtl ? 'marquee-rtl' : 'marquee'} 35s linear infinite`, willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {[...Array(4)].map((_, set) =>
          logos.map((src, i) => (
            <img
              key={`${set}-${i}`}
              src={src}
              className="h-20 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain mx-6 sm:mx-8 md:mx-10 lg:mx-14 flex-shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              alt={`partner-${i + 1}`}
            />
          ))
        )}
      </div>
    </div>
  )
}
