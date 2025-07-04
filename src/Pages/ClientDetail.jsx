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
  honda: {
    name: 'Honda',
    description: 'Honda is a global leader in automotive manufacturing and innovation.',
    videos: [
      'https://res.cloudinary.com/demo/video/upload/v1611111113/sample3.mp4'
    ],
    photos: [
      'https://res.cloudinary.com/demo/image/upload/v1611111114/sample4.jpg'
    ],
    campaigns: [
      { name: 'Honda Summer Drive', url: 'https://cloudinary.com/honda1', image: 'https://res.cloudinary.com/demo/image/upload/v1611111118/honda1.jpg' },
      { name: 'Honda Eco Campaign', url: 'https://cloudinary.com/honda2', image: 'https://res.cloudinary.com/demo/image/upload/v1611111119/honda2.jpg' }
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
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow">{client.name}</h1>
      <section className="mb-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3 text-main">Description</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{client.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Videos</h2>
        {client.videos.length === 0 ? (
          <p className="text-gray-500">No videos available.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {client.videos.map((video, i) => (
              <div
                key={i}
                className="w-full sm:w-[320px] md:w-[400px] rounded-lg shadow-lg transition-transform hover:scale-105 bg-black cursor-pointer"
                style={{ aspectRatio: '16/9' }}
                onClick={() => openModal('video', i)}
              >
                <video
                  src={video}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ pointerEvents: 'none' }}
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-2xl font-bold">▶</span>
                </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-125 transition-transform"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:scale-125 transition-transform"
            onClick={prevItem}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="max-w-full max-h-[80vh] flex items-center justify-center">
            {modal.type === 'photo' ? (
              <img
                src={client.photos[modal.index]}
                alt={`Photo ${modal.index + 1}`}
                className="rounded-xl shadow-2xl max-h-[80vh] max-w-[90vw] object-contain"
              />
            ) : modal.type === 'campaign' ? (
              <img
                src={typeof client.campaigns[modal.index] === 'string' ? client.campaigns[modal.index] : client.campaigns[modal.index].image}
                alt={`Campaign ${modal.index + 1}`}
                className="rounded-xl shadow-2xl max-h-[80vh] max-w-[90vw] object-contain"
              />
            ) : (
              <video
                src={client.videos[modal.index]}
                controls
                autoPlay
                className="rounded-xl shadow-2xl max-h-[80vh] max-w-[90vw] bg-black"
                style={{ aspectRatio: '16/9' }}
              />
            )}
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:scale-125 transition-transform"
            onClick={nextItem}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
} 