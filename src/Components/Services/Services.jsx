import React from 'react'
import service1 from '../../assets/services.jpg'
import service2 from '../../assets/services2.jpg'
import { Link } from 'react-router-dom'
export default function Services() {
  return (
    <section  className='w-[80%] mx-auto my-10 text-white lato'>
<div className="flex flex-wrap ">
<Link    className='lg:w-4/12 xl:w-3/12 md:w-6/12  w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src={service2}
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Identity</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">Branding </p>
  </div>

</div>
</Link>
<Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src={service1}
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Reputation</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">PR</p>
  </div>

</div>
</Link>
<Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Research</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">Marketing Studies </p>
  </div>

</div>
</Link>
<Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Advertising</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">Digital Marketing </p>
  </div>

</div>
</Link>


  <Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
  <div>
    
    <img
      alt=""
      src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
    />

    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
      <strong class="font-medium"> Content</strong>

      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

      <p class="mt-0.5 opacity-50 sm:mt-0">Media Production </p>
    </div>
  
  </div>
  </Link>

  <Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src={service2}
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Accounts</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">Activations </p>
  </div>

</div>
</Link>
<Link   className='lg:w-4/12 xl:w-3/12 md:w-6/12 w-4/12 p-2'>
<div>
  
  <img
    alt=""
    src={service2}
    class="h-32 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong class="font-medium">Programming</strong>

    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-[#467b7b] "></span>

    <p class="mt-0.5 opacity-50 sm:mt-0">Web Development </p>
  </div>

</div>
</Link>
</div>
</section>
  )
}
