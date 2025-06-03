import React from 'react'

export default function contact() {
  return (
//    <section className='w-[80%] mx-auto my-16 p-6 felx   justify-center  '>
//  <div className='bg-yellow-200  bg-'>

//      <label className="floating-label  ">
//   <span>Your Name</span>
//   <input type="text" placeholder="Spider Agency" className="input input-md mt-6  " />
// </label>
// <label className="floating-label ">
//   <span>Your Phone</span>
//   <input type="tel" placeholder="+20-109-501-0007" className="input input-md mt-6 " />
// </label>
// <label className="floating-label ">
//   <span>Your Email</span>
//   <input type="email" placeholder="Sspider@gmail.com" className="input input-md my-6 " />
// </label>
// <textarea className="textarea" placeholder="Message"></textarea>
//  </div>
//    </section>

<section  id='contact' className='py-10 w-[80%] mx-auto '> 

  <div className='flex flex-wrap '>
<div className='w-full md:w-1/2'>
<div className='flex items-center justify-center lg:mt-6'>
 <h2 id='About'  data-aos="fade-down"
             data-aos-duration="1000" 
             className='text-center text-5xl md:text-6xl lg:text-8xl raleway     text-main'>Let's get <br/> in touch</h2>
</div>
</div>
<div data-aos="fade-left" data-aos-duration="1000" className='w-full md:w-1/2'>
<div>


<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="floating_first_name"
      id="floating_first_name"
      className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
      placeholder=" "
      required
    />
    <label
      for="floating_first_name"
      className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >Name</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
        placeholder=" "
        required
      />
      <label
        for="floating_phone"
        className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Phone number </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_company"
        id="floating_company"
        className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
        placeholder=" "
        required
      />
      <label
        for="floating_company"
        className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Company (Ex. Spider)</label>
    </div>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-md text-main bg-transparent
       border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
      placeholder=" "
      required
    />
    <label
      for="floating_email"
      className="peer-focus:font-medium absolute 
      text-md text-gray-500 duration-300 transform -translate-y-6 
      scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >Email address</label>
  </div>
  
<textarea id="message" rows="4" className="block 
p-2.5 w-full text-md text-gray-500
  rounded-lg border border-gray-300  appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer
   mb-3 " placeholder="Write your Message here..."></textarea>


  <button
    type="submit"
    className="text-white bg-[#125e51] hover:bg-[#0f4d43] focus:ring-4 focus:outline-none focus:ring-[#125e51]/50 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
  >Send Message <i className="fa-solid fa-paper-plane ms-1 "></i></button>
</form>


</div>
</div>
  </div>
</section>
  )
}
