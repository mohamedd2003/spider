import React from 'react'
import aboutImg from "../../assets/About.jpg"
export default function About() {
  return (
    <section >
 
  <section   className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center lato">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-xl font-bold text-white md:text-3xl">
         <span className='text-[#125e51]'>Spider</span> Marketing Agency Established in 2018.
      </h2>

     
          
<ul className=" font-thin text-white   text-[14px] md:text-[17px]  ">
  <li  data-aos-duration="1000" data-aos="fade-right" className='mt-3 fo'  >We focus on delivering high-quality, unique content that earns client trust.
</li>
<li  data-aos-duration="1000" data-aos-delay="350" data-aos="fade-left" className='mt-3'>Our team of experts crafts impactful messages, builds strong brand identities,
</li>
<li  data-aos-duration="1000" data-aos-delay="400" data-aos="fade-right" className='mt-3'>Develops effective strategies to reach your target audience.
</li>
<li  data-aos-duration="1000" data-aos-delay="550" data-aos="fade-right" className='mt-3'>We start every project with in-depth market research to ensure your brand stands out in a competitive landscape.
</li>

</ul>


   

    
    </div>
  </div>

  <img
  data-aos-duration="1000" data-aos="fade-left"
    alt="about us image"
    src="https://res.cloudinary.com/dp2kkgobw/image/upload/v1751580564/IMG_8634_cmnjsj.webp"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
</section>
  )
}
