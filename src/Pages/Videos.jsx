import React from "react";
import ReactPlayer from "react-player";


const clients = [
  {
    name: "BIAC",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757510714/BIAC_Promo_tsn1ez.mp4",
      
    ],
  },
  {
    name: "Healthy Corner",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757511354/boom_meat_kxlfxs.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757511642/C0315_vl0pct.mp4",
    ],
  },
];

export default function Videos() {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white">
      {/* Main Title */}
      <div className="w-[95%] mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-main mb-6 tracking-wide">
          Our Videos
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light">
          Explore our creative projects, ads, and reels for top brands.
        </p>
      </div>

      {/* Clients Loop */}
      <div className="space-y-24">
        {clients.map((client, index) => (
          <div key={index} className="w-[95%] mx-auto">
            {/* Brand Name */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 uppercase">
                {client.name}
              </h2>
              <div className="w-24 h-1 bg-main mx-auto mt-3 rounded-full shadow-md"></div>
            </div>

            {/* Videos Grid */}
            <div className="flex flex-wrap -mx-2">
              {client.videos.map((video, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2 px-2 mb-4 flex justify-center"
                >
                 <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-[500px] hover:shadow-2xl transition-shadow">
  <video
    src={video}
    controls
      className="w-full max-h-[300px] object-contain"
  />
</div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
