import React from 'react';
import { Video, Camera, Palette, Megaphone } from 'lucide-react';

export default function OurWork() {
  return (
    <section id="ourwork" className="py-20 px-4  relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-4xl md:text-6xl lg:text-7xl raleway font-bold text-white mb-4 drop-shadow-lg">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Videos Card */}
          <a href="/videos" className="group block rounded-2xl  shadow-xl p-8 bg-white backdrop-blur-md border-2 border-main/30 hover:border-main transition-all duration-300 text-center 
          cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <Video className="w-12 h-12 mb-4 drop-shadow-lg text-main" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-main transition-colors raleway">Videos</h3>
              <p className="text-black group-hover:text-main">Creative video projects, ads, and reels.</p>
            </div>
            <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />
          </a>
          {/* Photos Card */}
          <a href="/photos" className="group block rounded-2xl shadow-xl p-8 bg-white backdrop-blur-md border-2 border-main/30 hover:border-main transition-all duration-300 text-center cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <Camera className="w-12 h-12 mb-4 drop-shadow-lg text-main" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-main transition-colors raleway">Photos</h3>
              <p className="text-black group-hover:text-main">Photography for brands, products, and events.</p>
            </div>
            <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />
          </a>
          {/* Designs Card */}
          <a href="/designs" className="group block rounded-2xl shadow-xl p-8 bg-white backdrop-blur-md border-2 border-main/30 hover:border-main transition-all duration-300 text-center cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <Palette className="w-12 h-12 mb-4 drop-shadow-lg text-main" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-main transition-colors raleway">Designs</h3>
              <p className="text-black group-hover:text-main">Branding, graphics, and creative design work.</p>
            </div>
            <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />
          </a>
          {/* Campaigns Card */}
          <a href="/campaigns" className="group block rounded-2xl shadow-xl p-8 bg-white backdrop-blur-md border-2 border-main/30 hover:border-main transition-all duration-300 text-center cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <Megaphone className="w-12 h-12 mb-4 drop-shadow-lg text-main" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-main transition-colors raleway">Campaigns</h3>
              <p className="text-black group-hover:text-main">Marketing and advertising campaigns.</p>
            </div>
            <div className="absolute inset-0 bg-main/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />
          </a>
        </div>
      </div>
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-main/30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#125e51]/30 rounded-full blur-3xl z-0" />
    </section>
  );
} 