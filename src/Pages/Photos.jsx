import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const clients = [
  {
    name: "BLABN",
    photos: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/500/500?random=2",
      "https://picsum.photos/700/500?random=3",
      "https://picsum.photos/400/600?random=4",
    ],
  },
  {
    name: "INFNIX",
    photos: [
      "https://picsum.photos/600/500?random=5",
      "https://picsum.photos/500/700?random=6",
      "https://picsum.photos/800/600?random=7",
      "https://picsum.photos/500/500?random=8",
    ],
  },
];

export default function Photos() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (photos, index) => {
    const slides = photos.map((src) => ({ src }));
    setLightboxSlides(slides);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-pink-50 to-white">
      {/* Main Title */}
      <div className="w-[90%] mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-gray-900 mb-6 tracking-wide">
          Photo Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto">
          Explore our creative photography work across different brands and campaigns.
        </p>
      </div>

      {/* Clients Loop */}
      <div className="space-y-28">
        {clients.map((client, clientIndex) => (
          <div key={clientIndex} className="w-[90%] mx-auto">
            {/* Brand Title */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 uppercase tracking-wide">
                {client.name}
              </h2>
              <div className="w-28 h-1 bg-main mx-auto mt-3 rounded-full shadow-md"></div>
            </div>

            {/* Gallery with Flex/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {client.photos.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                  onClick={() => openLightbox(client.photos, index)}
                >
                  <img
                    src={src}
                    alt={`${client.name} ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        slides={lightboxSlides}
        open={lightboxOpen}
        index={lightboxIndex}
        close={() => setLightboxOpen(false)}
      />
    </section>
  );
}
