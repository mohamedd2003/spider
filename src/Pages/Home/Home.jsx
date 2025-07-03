import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Clients from '../../Components/Clients/clients'
import Contact from '../../Components/Contact/contact'
import OurWork from '../../Components/OurWork'

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
<OurWork/>

<h2 id='clients'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Clients</h2>
<Clients/>

<h2 id='contact'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Contact</h2>

             <Contact/>
   </>
  )
}
