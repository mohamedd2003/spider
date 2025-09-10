import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const designs = [
  {
    client: "Blabn",
    images: [
      "https://images.unsplash.com/photo-1616401784845-1803bfa9a8c7?w=800",
      "https://images.unsplash.com/photo-1607082349566-187342bbaead?w=800",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    ],
  },
  {
    client: "Infinix",
    images: [
      "https://images.unsplash.com/photo-1626785774712-7c71d5dc8a9f?w=800",
      "https://images.unsplash.com/photo-1626785774845-fd93ffabcf0d?w=800",
      "https://images.unsplash.com/photo-1616628182504-dfbc1e3b2d63?w=800",
      "https://images.unsplash.com/photo-1616401785109-3739b4a1c2b0?w=800",
    ],
  },
];

export default function Designs() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  const openLightbox = (images, index) => {
    setLightboxSlides(images.map((src) => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-yellow-50 to-white">
      {/* Main Title */}
      <div className="w-[90%] mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-main mb-6 tracking-wide">
          Designs
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light">
          See our branding, graphics, and creative design work.
        </p>
      </div>

      {/* Designs Loop */}
      <div className="space-y-24">
        {designs.map((client, clientIndex) => (
          <div key={clientIndex} className="w-[90%] mx-auto">
            {/* Client Name */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 uppercase">
                {client.client}
              </h2>
              <div className="w-24 h-1 bg-main mx-auto mt-3 rounded-full shadow-md"></div>
            </div>

            {/* Gallery Flexbox */}
            <div className="flex flex-wrap justify-center gap-6">
              {client.images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(client.images, index)}
                  className="relative group cursor-pointer w-full sm:w-[48%] lg:w-[30%] h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <img
                    src={src}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                    View Design
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
        />
      )}
    </section>
  );
}
