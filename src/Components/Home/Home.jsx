import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Events from '../Events/Events'
export default function Home() {
  return (
   <>
<Hero/>

<h2 id='About' className='text-center text-7xl raleway pt-10 text-white'>About Us</h2>
<About/>
<h2 id='services' className='text-center text-7xl raleway pt-10 text-white'>Services</h2>
<Services/>
<h2 id='Events' className='text-center text-7xl raleway pt-10 text-white'>Events</h2>
<Events/>
   </>
  )
}
