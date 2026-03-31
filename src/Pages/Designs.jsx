import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import design1 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (2).jpeg";
import design2 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (3).jpeg";
import design3 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (4).jpeg";
import design4 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (5).jpeg";
import design5 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (6).jpeg";
import design6 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (7).jpeg";
import design7 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (8).jpeg";
import design8 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.51 PM.jpeg";

const images = [design1, design2, design3, design4, design5, design6, design7, design8];

export default function Designs() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useTranslation();

  const slides = images.map((src) => ({ src }));

  return (
    <section className="min-h-screen bg-white dark:bg-black">
      {/* Hero header */}
      <div className="pt-28 sm:pt-36 pb-12 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t('designs.title')}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
          {t('designs.subtitle')}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src={src}
                alt={`Design ${index + 1}`}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
