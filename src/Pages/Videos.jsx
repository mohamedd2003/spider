import React, { useState } from "react";

const clients = [
  {
    name: "DMC ADS",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757514186/V1_%D8%A7%D9%84%D9%85%D8%B0%D8%A7%D9%83%D8%B1%D8%A9_1_wyib36.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757514754/El_So7ooR_1_tbc2er.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757514722/V2___%D8%A7%D9%84%D9%85%D8%B0%D8%A7%D9%83%D8%B1%D8%A9_%D9%85%D8%B1%D9%88%D8%A9_gkj4w5.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757514826/%D8%AE%D8%A7%D9%84%D9%88_%D9%88_%D8%A7%D9%84%D8%B3%D8%AD%D9%88%D8%B1_sv3ysn.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757514759/MAIN_Social_2_elvpy6.mp4"
    ],
  },

  {
    name: "Healthy Corner",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757511354/boom_meat_kxlfxs.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757511642/C0315_vl0pct.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757512156/healthy_sp_qu2bo1.mp4"
    ],
  },
  {
    name: "BIAC",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757510714/BIAC_Promo_tsn1ez.mp4",
      
    ],
  },
 
  {
    name: "Premier",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757512669/Me3margy_Podcast_Promo_ltv0dc.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757513179/Windoorex_Teaser_jib..._-_Manage_Asset_-_Assets_DAM_mgmhwl.mp4"
    ],
},
  {
    name: "Podcast Hr",
    videos: [
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1757515154/%D9%84%D9%88_%D8%AC%D8%A7%D9%84%D9%83_%D8%B9%D8%B1%D8%B6_phz7ss.mp4",
    ],
},
  
];

export default function Videos() {
  const [selectedClient, setSelectedClient] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#125e51] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center py-20 px-4">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[#125e51] via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
              VIDEO
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#125e51]"></div>
              <div className="w-3 h-3 bg-[#125e51] rounded-full animate-pulse"></div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-300 tracking-widest">PORTFOLIO</h2>
              <div className="w-3 h-3 bg-[#125e51] rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#125e51]"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting visual stories that captivate, inspire, and drive results for leading brands worldwide.
          </p>
        </div>

        {/* Client Navigation */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-full p-2 border border-gray-700">
            <div className="flex flex-wrap justify-center space-x-2">
              {clients.map((client, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedClient(index)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedClient === index
                      ? 'bg-[#125e51] text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {client.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Client Content */}
        <div className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Client Brand Section */}
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 tracking-tight">
                  {clients[selectedClient].name}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#125e51] to-blue-500 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-lg mt-6">
                {clients[selectedClient].videos.length} Creative Projects
              </p>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clients[selectedClient].videos.map((video, i) => (
                <div
                  key={i}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#125e51] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(18,94,81,0.3)]">
                    {/* Video Container */}
                    <div className="aspect-video relative overflow-hidden">
                      <video
                        src={video}
                        controls
                        playsInline
                        poster=""
                        onPlay={() => setPlayingVideo(`${selectedClient}-${i}`)}
                        onPause={() => setPlayingVideo(null)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#125e51]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <i className="fas fa-play text-white text-xl ml-1"></i>
                        </div>
                      </div>

                      {/* Video Number Badge */}
                      <div className="absolute top-4 left-4 bg-[#125e51]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        #{i + 1}
                      </div>

                      {/* Playing Indicator */}
                      {playingVideo === `${selectedClient}-${i}` && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          <i className="fas fa-circle text-xs mr-1"></i>
                          LIVE
                        </div>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {clients[selectedClient].name} Project {i + 1}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Creative video content showcasing brand excellence
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-2">
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">Video</span>
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">HD</span>
                        </div>
                        <button className="text-[#125e51] hover:text-white transition-colors duration-300">
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#125e51] via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-[#125e51] mb-2">{clients.length}</h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-[#125e51] mb-2">
                    {clients.reduce((total, client) => total + client.videos.length, 0)}
                  </h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Videos Created</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-[#125e51] mb-2">100%</h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Satisfaction Rate</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-[#125e51] mb-2">24/7</h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Creative Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
