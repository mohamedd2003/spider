import React from 'react'
import banner from '../../assets/banner.jpg' // Adjust the path as necessary

export default function Hero() {
  return (
      <section id='#' className={` lg:grid h-screen lg:place-content-center bg-[url(${banner})] bg-cover bg-center  bg-no-repeat `}>
<div className='bg-[rgba(0,0,0,0.5)] w-full h-full absolute inset-0'>
    
  <div
  className="hero min-h-screen"

>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
     <h1 data-aos="fade" data-aos-duration="1000" className="text-2xl mb-5 font-bold  md:text-4xl text-white ">
        Understand User Flow and
        <strong className="text-[#125e51]"> Increase </strong>
       Conversions
      </h1>
   
      <a href="#services"  data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="500" className=" px-3 py-2 md:px-5  rounded-full hover:bg-white hover:text-[#125e51] lato duration-200 text-white  bg-[#125e51]  border-[#125e51]">Get Started</a>
    </div>
  </div>
</div>
</div>
</section>
  )
}
