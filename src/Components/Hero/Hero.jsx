import React from 'react'
import banner from '../../assets/banner.jpg' // Adjust the path as necessary

export default function Hero() {
  return (
      <section id='#' className={` lg:grid h-screen lg:place-content-center bg-[url(${banner})] bg-cover bg-center  bg-no-repeat `}>
<div className='bg-[rgba(0,0,0,0.5)] w-full h-full absolute inset-0'>
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ">
    <div className="max-w-prose md:py-16 py-24">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Understand user flow and
        <strong className="text-red-600"> increase </strong>
        conversions
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 lato">
      Spider is a results-driven marketing agency that crafts data-powered campaigns to boost your brand visibility
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
          href="#services"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#services"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>
</section>
  )
}
