import React from 'react'
// import banner from '../../assets/banner.jpg' // No longer needed

export default function Hero() {
  return (
    <section id='#' className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background for Mobile/Tablet */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        src="https://res.cloudinary.com/dp2kkgobw/video/upload/v1751582736/0704_siebek.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Video Background for Desktop/Large Screens */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        src="https://res.cloudinary.com/dp2kkgobw/video/upload/v1751577435/video01_i1nuhw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="hero-content text-neutral-content text-center flex flex-col items-center justify-center h-full">
          <div className="max-w-md">
            <h1 data-aos="fade" data-aos-duration="1000" className="text-2xl mb-5 font-bold  md:text-4xl text-white ">
              Understand User Flow and
              <strong className="text-[#125e51]"> Increase </strong>
              Conversions
            </h1>
            <a href="#services"  data-aos="fade-up" data-aos-duration="1000"  
              className=" px-3 py-2 md:px-5  rounded-full hover:bg-white hover:text-[#125e51] raleway duration-200
              text-white  bg-[#125e51]  border-[#125e51]">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}
