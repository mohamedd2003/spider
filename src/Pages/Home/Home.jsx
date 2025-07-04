import React, { useEffect } from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Clients from '../../Components/Clients/clients'
import Contact from '../../Components/Contact/contact'
import OurWork from '../../Components/OurWork'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay ensures the DOM is rendered
      }
    }
  }, [location]);
  return (
   <>
<Hero/>

<h2 id='about'  data-aos="fade-down"
             data-aos-duration="1000" 
             className='text-center text-4xl md:text-6xl lg:text-7xl  raleway pt-16   text-white'>About Us</h2>
<About/>
<h2 id='clients'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center
              text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Clients</h2>
<Clients/>
<h2 id='services'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway  pt-16   text-white'>Services</h2>
<Services/>
<OurWork/>




<h2 id='contact'  data-aos="fade-down"
             data-aos-duration="1000" className='text-center text-4xl md:text-6xl lg:text-7xl raleway pt-16   text-white'>Contact</h2>

             <Contact/>
   </>
  )
}
