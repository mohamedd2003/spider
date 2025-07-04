import React from 'react'
// import banner from '../../assets/banner.jpg' // No longer needed

export default function Hero() {
  return (
    <section id='#' className="relative h-[50vh] md:h-[50vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
         <img
  
  alt="about us image"
  src="https://res.cloudinary.com/dp2kkgobw/image/upload/v1751580564/IMG_8634_cmnjsj.webp"
  className="h-full w-full  bg-cover bg-no-repeat "
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 h-[50vh] md:h-[50vh] lg:h-[100vh]" >
      {/* Content */}
      <div className="relative flex flex-wrap  items-center justify-start    w-full h-[50vh] md:h-[50vh] lg:h-[100vh]">
        <div className="ml-6">
       
            <h1   className="text-3xl mb-5 font-bold  md:text-9xl text-white ">SPIDER <br />AGENCY </h1>
            <h6 className='md:text-2xl text-[10px]  mb-5 font-semibold  text-white'>Digital marketing services, visual content creation, media production services</h6>
            
   
        </div>
      </div>
      </div>
    </section>
  )
}
