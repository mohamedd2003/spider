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
  const [openFolder, setOpenFolder] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);

  const handleFolderClick = (clientIndex) => {
    setOpenFolder(openFolder === clientIndex ? null : clientIndex);
    setSelectedVideo(null);
  };

  const handleVideoClick = (clientIndex, videoIndex) => {
    setVideoLoading(true);
    setSelectedVideo({ clientIndex, videoIndex });
    // Auto-scroll to top when video is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFolders = () => {
    setSelectedVideo(null);
    setOpenFolder(null);
    setVideoLoading(false);
  };

  const handleVideoLoaded = () => {
    setVideoLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#125e51] mb-4">
          Video Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our creative video projects organized by client folders
        </p>
      </div>

      {/* Back Button - Only show when viewing videos */}
      {(openFolder !== null || selectedVideo) && (
        <div className="mb-6">
          <button
            onClick={handleBackToFolders}
            className="flex items-center space-x-2 px-4 py-2 bg-[#125e51] text-white rounded-lg hover:bg-[#0f4d43] transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Folders</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {selectedVideo ? (
          /* Video Player View */
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 md:p-6 bg-[#125e51] text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                {clients[selectedVideo.clientIndex].name} - Video {selectedVideo.videoIndex + 1}
              </h2>
            </div>
            <div className="p-4 md:p-8">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                {videoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#125e51] mx-auto mb-4"></div>
                      <p className="text-lg">Loading video...</p>
                    </div>
                  </div>
                )}
                
                <video
                  key={`${selectedVideo.clientIndex}-${selectedVideo.videoIndex}`}
                  className="w-full h-full object-contain bg-black"
                  controls
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                  onLoadedData={handleVideoLoaded}
                  onCanPlay={handleVideoLoaded}
                  onError={(e) => {
                    console.error('Video error:', e);
                    setVideoLoading(false);
                  }}
                  style={{ backgroundColor: '#000' }}
                >
                  <source 
                    src={clients[selectedVideo.clientIndex].videos[selectedVideo.videoIndex]} 
                    type="video/mp4" 
                  />
                  <p className="text-white p-4">
                    Your browser does not support the video tag. 
                    <a 
                      href={clients[selectedVideo.clientIndex].videos[selectedVideo.videoIndex]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#125e51] underline ml-2"
                    >
                      Download video instead
                    </a>
                  </p>
                </video>
              </div>
              
              {/* Other videos from same client */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  More from {clients[selectedVideo.clientIndex].name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {clients[selectedVideo.clientIndex].videos.map((video, videoIndex) => (
                    <div
                      key={videoIndex}
                      onClick={() => handleVideoClick(selectedVideo.clientIndex, videoIndex)}
                      className={`relative aspect-video bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                        selectedVideo.videoIndex === videoIndex ? 'ring-4 ring-[#125e51]' : ''
                      }`}
                    >
                      {/* Thumbnail using video first frame */}
                      <video
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        poster=""
                      >
                        <source src={`${video}#t=0.1`} type="video/mp4" />
                      </video>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
                          <i className="fas fa-play text-[#125e51] text-lg"></i>
                        </div>
                      </div>
                      
                      {/* Video number */}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {videoIndex + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : openFolder !== null ? (
          /* Folder Contents View */
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 md:p-6 bg-[#125e51] text-white flex items-center space-x-4">
              <div className="text-4xl">
                <i className="fas fa-folder-open"></i>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{clients[openFolder].name}</h2>
                <p className="text-blue-200">{clients[openFolder].videos.length} videos</p>
              </div>
            </div>
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {clients[openFolder].videos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    onClick={() => handleVideoClick(openFolder, videoIndex)}
                    className="group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      {/* Video thumbnail */}
                      <video
                        className="w-full h-full object-cover opacity-90"
                        muted
                        playsInline
                        preload="metadata"
                        poster=""
                      >
                        <source src={`${video}#t=0.1`} type="video/mp4" />
                      </video>
                      
                      {/* Fallback image placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#125e51]/20 to-blue-500/20 flex items-center justify-center">
                        <i className="fas fa-video text-4xl text-gray-500 opacity-30"></i>
                      </div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#125e51] text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform">
                          <i className="fas fa-play text-xl"></i>
                        </div>
                      </div>
                      
                      {/* Video number badge */}
                      <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        #{videoIndex + 1}
                      </div>
                      
                      {/* Duration or status */}
                      <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        HD
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                        {clients[openFolder].name} Project {videoIndex + 1}
                      </h3>
                      <p className="text-gray-600 text-sm flex items-center space-x-1">
                        <i className="fas fa-play-circle text-xs"></i>
                        <span>Click to watch</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Folders View */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
            {clients.map((client, clientIndex) => (
              <div
                key={clientIndex}
                onClick={() => handleFolderClick(clientIndex)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-4 md:p-6"
              >
                <div className="text-center">
                  {/* Folder Icon */}
                  <div className="text-6xl md:text-8xl text-[#125e51] mb-4 group-hover:text-[#0f4d43] transition-colors">
                    <i className="fas fa-folder"></i>
                  </div>
                  
                  {/* Client Name */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 truncate">
                    {client.name}
                  </h3>
                  
                  {/* Video Count */}
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <i className="fas fa-video text-sm"></i>
                    <span className="text-sm">
                      {client.videos.length} {client.videos.length === 1 ? 'video' : 'videos'}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-[#125e51] text-sm font-semibold">
                      Click to open
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats - Only show on main folder view */}
      {!selectedVideo && openFolder === null && (
        <div className="mt-12 md:mt-16 bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#125e51] mb-2">
                {clients.length}
              </h4>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Clients</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#125e51] mb-2">
                {clients.reduce((total, client) => total + client.videos.length, 0)}
              </h4>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Videos</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#125e51] mb-2">100%</h4>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Quality</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#125e51] mb-2">24/7</h4>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Support</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
