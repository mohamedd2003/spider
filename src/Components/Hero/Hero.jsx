import React from 'react'
import banner from '../../assets/banner.jpg' // Adjust the path as necessary

export default function Hero() {
  return (
      <section id='#' className={` lg:grid h-screen lg:place-content-center bg-[url(${banner})] bg-cover bg-center  bg-no-repeat `}>
<div className='bg-[rgba(0,0,0,0.5)] w-full h-full absolute inset-0'>
      {/* <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ">
    <div className="max-w-prose md:py-16 py-24">
     

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 lato">
      <span className='text-[#467b7b] text-[32px] font-extrabold'> Spider</span> is a results-driven marketing agency that crafts data-powered campaigns to boost your brand visibility
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a data-aos="fade-left"
        data-aos-duration="1000"

          className="inline-block rounded border border-[#467b7b] bg-[#467b7b] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#467b7b]"
          href="#services"
        >
          Get Started
        </a>

        <a data-aos="fade-right"
             data-aos-duration="1000"
          className="inline-block rounded border
           border-[#467b7b] px-5 py-3 font-medium
            text-white shadow-sm transition-colors  hover:text-white dark:border-gray-700 dark:text-gray-200 hover:bg-[#467b7b]"
          href="#About"
        >
          Learn More
        </a>
      </div>
    </div>
  </div> */}
  <div
  className="hero min-h-screen"

>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
     <h1 data-aos="fade" data-aos-duration="1000" className="text-4xl mb-5 font-bold text-gray-900 sm:text-5xl dark:text-white">
        Understand User Flow and
        <strong className="text-[#467b7b]"> Increase </strong>
       Conversions
      </h1>
   
      <a href="#services"  data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="500" className=" px-5 py-2 rounded-full hover:bg-white hover:text-[#467b7b] lato duration-200 text-white  bg-[#467b7b]  border-[#467b7b]">Get Started</a>
    </div>
  </div>
</div>
</div>
</section>
  )
}
