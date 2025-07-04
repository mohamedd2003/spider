import React from 'react'
// import banner from '../../assets/banner.jpg' // No longer needed

export default function Hero() {
  return (
    <section id='#' className="relative h-[50vh] md:h-[50vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
         <img
  
  alt="about us image"
  src="https://res.cloudinary.com/dp2kkgobw/image/upload/v1751664529/new_fvaumb.jpg"
  className="h-full w-full  bg-cover bg-no-repeat "
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 h-[50vh] md:h-[50vh] lg:h-[100vh]" >
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-[50vh] md:h-[50vh] lg:h-[100vh]">
        <div className="hero-content text-neutral-content text-center flex flex-col items-center justify-center h-full">
          <div className="max-w-md">
            <h1   className="text-2xl mb-5 font-bold  md:text-4xl text-white ">
              Understand User Flow and
              <strong className="text-[#125e51]"> Increase </strong>
              Conversions
            </h1>
            <a href="#services"     
              className=" px-3 py-2 md:px-5  rounded-full hover:bg-white hover:text-[#125e51] raleway duration-200
              text-white  bg-[#125e51]  border-[#125e51]">Get Started</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
