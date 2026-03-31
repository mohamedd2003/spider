import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ReactPlayer from "react-player";

import campImg1 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (7).jpeg";
import campImg2 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.49 PM (8).jpeg";
import campImg3 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM.jpeg";
import campImg4 from "../assets/images/WhatsApp Image 2026-03-31 at 3.08.50 PM (1).jpeg";

const media = [
  { type: "image", src: campImg1 },
  { type: "image", src: campImg2 },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: campImg3 },
  { type: "image", src: campImg4 },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
];

export default function Campaigns() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useTranslation();

  const imageItems = media.filter((m) => m.type === "image");
  const slides = imageItems.map((m) => ({ src: m.src }));

  return (
    <section className="min-h-screen bg-white dark:bg-black">
      {/* Hero header */}
      <div className="pt-28 sm:pt-36 pb-12 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t('campaigns.title')}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
          {t('campaigns.subtitle')}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {media.map((item, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl group">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Campaign ${index + 1}`}
                  className="w-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-105"
                  onClick={() => {
                    const imgIndex = imageItems.indexOf(item);
                    setLightboxIndex(imgIndex);
                    setLightboxOpen(true);
                  }}
                />
              ) : (
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  <ReactPlayer
                    url={item.src}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
