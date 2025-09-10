import React from 'react'
import CurvedLoop from '../../../reactbits/CurvedLoop/CurvedLoop';
export default function About() {
  return (
    <section >

  <section  id='About' className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center lato">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl  ltr:sm:text-left ">
      <h2 className="text-xl font-bold text-white md:text-3xl">
         <span className='text-[#125e51]'>Spider</span> Marketing Agency Founded in 2019.
      </h2>

     
          
<ul className=" font-thin text-white   text-[14px] md:text-[17px]  ">
  <li  data-aos-duration="1000" data-aos="fade-right" className='mt-3 '  >
    
We specialize in full-service marketing, offering a wide range of services including content creation, photography, video editing, and commercial production

</li>
<li  data-aos-duration="1000" data-aos-delay="350" data-aos="fade-left" className='mt-3'>
What sets us apart is our unique ability to blend creative content with strategic marketing, producing visually powerful campaigns that not only look great but also deliver real results.
,
</li>
<li  data-aos-duration="1000" data-aos-delay="400" data-aos="fade-right" className='mt-3'>
Our strength lies in creating trending content and captivating visuals that resonate with modern audiences. Through a seamless fusion of marketing expertise and visual storytelling
</li>
<li  data-aos-duration="1000" data-aos-delay="550" data-aos="fade-right" className='mt-3'>
we bring brands to life in ways that are bold, engaging, and unforgettable.
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
