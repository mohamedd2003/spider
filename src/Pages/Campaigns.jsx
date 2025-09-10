import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ReactPlayer from "react-player";

const campaigns = [
  {
    name: "Blabn",
    media: [
      { type: "image", src: "https://picsum.photos/600/400?random=1" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600/400?random=1" },
    ],
  },
  {
    name: "Infinix",
    media: [
      { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
      { type: "image", src: "https://via.placeholder.com/900x600?text=Infinix+Image+1" },
      { type: "image", src: "https://via.placeholder.com/600x600?text=Infinix+Image+2" },
    ],
  },
];

export default function Campaigns() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  const openLightbox = (images, index) => {
    setLightboxSlides(images.map((m) => ({ src: m.src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-green-50 to-white">
      {/* Main Title */}
      <div className="w-[90%] mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-main mb-6 tracking-wide">
          Campaigns
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light">
          Discover our marketing and advertising campaigns.
        </p>
      </div>

      {/* Campaigns Loop */}
      <div className="space-y-24">
        {campaigns.map((campaign, campaignIndex) => (
          <div key={campaignIndex} className="w-[90%] mx-auto">
            {/* Client Name */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 uppercase">
                {campaign.name}
              </h2>
              <div className="w-24 h-1 bg-main mx-auto mt-3 rounded-full shadow-md"></div>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {campaign.media.map((item, index) => (
                <div key={index} className="relative group cursor-pointer">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
                      onClick={() =>
                        openLightbox(
                          campaign.media.filter((m) => m.type === "image"),
                          campaign.media.filter((m) => m.type === "image").indexOf(item)
                        )
                      }
                    />
                  ) : (
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
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
        ))}
      </div>

      {/* Lightbox for Images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}
