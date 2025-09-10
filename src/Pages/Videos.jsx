import React from "react";


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
              <h2 className="text-4xl md:text-5xl font-light italic text-gray-900 uppercase">
                {client.name}
              </h2>
              <div className="w-24 h-1 bg-main mx-auto mt-3 rounded-full shadow-md"></div>
            </div>

            {/* Videos Grid */}
            <div className="flex flex-wrap mx-2">
              {client.videos.map((video, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2  mb-4 flex justify-center"
                >
                 <div className=" shadow-lg rounded-xl overflow-hidden w-full max-w-[500px] hover:shadow-2xl transition-shadow">
  <video
    src={video}
    controls
    playsInline
      className="w-full max-h-[300px] object-cover"
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
