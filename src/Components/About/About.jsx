import React from 'react'
import aboutImg from "../../assets/About.jpg"
export default function About() {
  return (
    <section >
  {/* <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6  text-white lg:px-8 lato">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div class="max-w-lg md:max-w-none">
          <h2 class="text-2xl font-semibold  sm:text-3xl">
         Spider is a bold and creative marketing agency that crafts strategic campaigns to deliver impactful results.
          </h2>

          <p class="mt-4 ">
          We specialize in digital advertising, content creation, and brand storytelling—helping businesses grow with insightful, data-driven solutions that stick like a web.
          </p>
        </div>
      </div>

      <div>
        <img
          src={aboutImg}
          className="rounded-2xl"
          alt=""
        />
      </div>
    </div>
  </div> */}
  <section className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center lato">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
         <span className='text-red-500'>Spider</span> is a bold and creative marketing agency that crafts strategic campaigns to deliver impactful results.
      </h2>

      <p className="hidden text-white md:mt-4 md:block">
             We specialize in digital advertising, content creation, and brand storytelling—helping businesses grow with insightful, data-driven solutions that stick like a web.

      </p>

    
    </div>
  </div>

  <img
    alt=""
    src={aboutImg}
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
</section>
  )
}
