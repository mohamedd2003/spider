import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photo1 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.48 PM (1).jpeg";
import photo2 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.48 PM.jpeg";
import photo3 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM.jpeg";
import photo4 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (1).jpeg";
import photo5 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (2).jpeg";
import photo6 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (3).jpeg";
import photo7 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (4).jpeg";
import photo8 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (6).jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

export default function Photos() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useTranslation();

  const slides = photos.map((src) => ({ src }));

  return (
    <section className="min-h-screen bg-white dark:bg-black">
      {/* Hero header */}
      <div className="pt-28 sm:pt-36 pb-12 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t('photos.title')}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
          {t('photos.subtitle')}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        slides={slides}
        open={lightboxOpen}
        index={lightboxIndex}
        close={() => setLightboxOpen(false)}
      />
    </section>
  );
}
