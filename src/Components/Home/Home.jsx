import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Clients from '../Clients/clients'
import Contact from '../Contact/contact'
export default function Home() {
  return (
   <>
<Hero/>

<h2 id='About'  data-aos="fade-down"
             data-aos-duration="1000" 
             className='text-center text-4xl md:text-6xl lg:text-7xl  raleway pt-16   text-white'>About Us</h2>
<About/>
<h2 id='services'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway  pt-16   text-white'>Services</h2>
<Services/>
<h2 id='clients'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Clients</h2>
<Clients/>

<h2 id='contact'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Contact</h2>

             <Contact/>
   </>
  )
}
