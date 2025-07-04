import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const clientData = {
  blabn: {
    name: 'Blabn',
    description: 'Blabn is a leading marketing agency specializing in digital campaigns and creative solutions.',
    videos: [
      'https://res.cloudinary.com/dp2kkgobw/video/upload/v1751577486/Colored_Vid_efvsmt.mp4',
      'https://res.cloudinary.com/dp2kkgobw/video/upload/v1751582736/0704_siebek.mp4',
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1751577435/video01_i1nuhw.mp4",
      "https://res.cloudinary.com/dp2kkgobw/video/upload/v1751577435/video01_i1nuhw.mp4"

    ],
    photos: [
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651894/WhatsApp_Image_2025-07-04_at_02.15.33_53df3ab5_zrmjjj.jpg',
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651871/WhatsApp_Image_2025-07-04_at_02.14.14_d75540e3_t68zz8.jpg',
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.05_82ef6ad9_ojubgm.jpg',
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_674c1d9b_qnkblt.jpg",
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_674c1d9b_qnkblt.jpg",
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_9e5a168b_jknsad.jpg"
    ],
    campaigns: [
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651894/WhatsApp_Image_2025-07-04_at_02.15.33_53df3ab5_zrmjjj.jpg',
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651871/WhatsApp_Image_2025-07-04_at_02.14.14_d75540e3_t68zz8.jpg',
      'https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.05_82ef6ad9_ojubgm.jpg',
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_674c1d9b_qnkblt.jpg",
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_674c1d9b_qnkblt.jpg",
      "https://res.cloudinary.com/dp2kkgobw/image/upload/v1751651851/WhatsApp_Image_2025-07-04_at_02.09.04_9e5a168b_jknsad.jpg"
    ],
  },
  rox: {
    name: 'rox',
    description: 'rox is a global leader in automotive manufacturing and innovation.',
    videos: [
      'https://res.cloudinary.com/demo/video/upload/v1611111113/sample3.mp4'
    ],
    photos: [
      'https://res.cloudinary.com/demo/image/upload/v1611111114/sample4.jpg'
    ],
    campaigns: [
      { name: 'rox Summer Drive', url: 'https://cloudinary.com/rox1', image: 'https://res.cloudinary.com/demo/image/upload/v1611111118/rox1.jpg' },
      { name: 'rox Eco Campaign', url: 'https://cloudinary.com/rox2', image: 'https://res.cloudinary.com/demo/image/upload/v1611111119/rox2.jpg' }
    ],
  },
  elkoptan: {
    name: 'Elkoptan',
    description: 'Elkoptan provides top-tier electrical solutions for businesses and homes.',
    videos: [],
    photos: [
      'https://res.cloudinary.com/demo/image/upload/v1611111115/sample5.jpg'
    ],
    campaigns: [
      { name: 'Elkoptan Safety Awareness', url: 'https://cloudinary.com/elkoptan1', image: 'https://res.cloudinary.com/demo/image/upload/v1611111120/elkoptan1.jpg' }
    ],
  },
}

export default function ClientDetail() {
  const { clientId } = useParams();
  const client = clientData[clientId];

  // Modal state
  const [modal, setModal] = useState({ open: false, type: null, index: 0 });

  if (!client) return <div className="p-8">Client not found.</div>;

  // Modal content
  const openModal = (type, index) => setModal({ open: true, type, index });
  const closeModal = () => setModal({ open: false, type: null, index: 0 });
  const nextItem = () => {
    let arr = [];
    if (modal.type === 'photo') arr = client.photos;
    else if (modal.type === 'video') arr = client.videos;
    else if (modal.type === 'campaign') arr = client.campaigns;
    setModal(m => ({ ...m, index: (m.index + 1) % arr.length }));
  };
  const prevItem = () => {
    let arr = [];
    if (modal.type === 'photo') arr = client.photos;
    else if (modal.type === 'video') arr = client.videos;
    else if (modal.type === 'campaign') arr = client.campaigns;
    setModal(m => ({ ...m, index: (m.index - 1 + arr.length) % arr.length }));
  };

  return (
    <div className="w-[95%] max-w-6xl mx-auto py-10">
      <section className="mb-10 bg-white rounded-xl shadow p-6 mt-14">
        <h2 className="text-2xl font-bold mb-3 text-main">Description</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{client.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Videos</h2>
        {client.videos.length === 0 ? (
          <p className="text-gray-500">No videos available.</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center min-h-[200px]">
            {client.videos.map((video, i) => (
              <div
                key={i}
                className="w-full sm:w-[320px] md:w-[400px] rounded-lg shadow-lg transition-transform hover:scale-105 bg-black cursor-pointer mb-4"
                style={{ aspectRatio: '16/9', maxWidth: '100%' }}
                onClick={() => openModal('video', i)}
              >
                <video
                  src={video}
                  className="w-full h-[250px] object-cover rounded-lg"
                  controls
                  preload="metadata"
                  onError={e => { e.target.poster = ''; e.target.parentNode.innerHTML = '<div class=\'text-white text-center py-8\'>Video failed to load</div>'; }}
                  style={{ background: '#000' }}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Photos</h2>
        {client.photos.length === 0 ? (
          <p className="text-gray-500">No photos available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {client.photos.map((photo, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openModal('photo', i)}
              >
                <img
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Social Media Campaigns</h2>
        {client.campaigns.length === 0 ? (
          <p className="text-gray-500">No campaigns available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {client.campaigns.map((campaign, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openModal('campaign', i)}
              >
                <img
                  src={typeof campaign === 'string' ? campaign : campaign.image}
                  alt={`Campaign ${i + 1}`}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal for photo/video/campaign */}
      {modal.open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-2xl md:text-3xl font-bold hover:scale-125 transition-transform z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            
            {/* Previous button */}
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold hover:scale-125 transition-transform z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={prevItem}
              aria-label="Previous"
            >
              ‹
            </button>
            
            {/* Content */}
            <div className="w-full h-full flex items-center justify-center">
              {modal.type === 'photo' ? (
                <img
                  src={client.photos[modal.index]}
                  alt={`Photo ${modal.index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  style={{ maxHeight: '90vh', maxWidth: '90vw' }}
                />
              ) : modal.type === 'campaign' ? (
                <img
                  src={typeof client.campaigns[modal.index] === 'string' ? client.campaigns[modal.index] : client.campaigns[modal.index].image}
                  alt={`Campaign ${modal.index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  style={{ maxHeight: '90vh', maxWidth: '90vw' }}
                />
              ) : (
                <video
                  src={client.videos[modal.index]}
                  controls
                  autoPlay
                  className="max-h-full max-w-full rounded-lg bg-black"
                  style={{ maxHeight: '90vh', maxWidth: '90vw', aspectRatio: '16/9' }}
                />
              )}
            </div>
            
            {/* Next button */}
            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold hover:scale-125 transition-transform z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={nextItem}
              aria-label="Next"
            >
              ›
            </button>
            
            {/* Mobile swipe indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              Swipe to navigate
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 