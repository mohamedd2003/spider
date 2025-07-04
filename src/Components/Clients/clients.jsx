import React from 'react'
import blabn from "../../assets/blabn.jpg"
import honda from "../../assets/download.png"
import kop from "../../assets/kop.jpg"
import rox from "../../assets/rox.jpg"
import { Link } from 'react-router-dom'

export default function Clients() {
  return (
<>
<section className='w-[80%] mx-auto py-10'> 
  <div className="flex flex-wrap items-center">
    <Link to="/clients/blabn" className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='rounded-2xl w-full  '   src={blabn} alt="" />
</div>
    </Link>
    <Link to="/clients/rox" className='w-1/2 md:w-1/3 lg:w-3/12  '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full  '   src={rox} alt="" />
</div>
    </Link>
    <Link to="/clients/elkoptan" className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={kop} alt="" />
</div>
    </Link>
    <Link to="/clients/honda" className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={honda} alt="" />
</div>
    </Link>
  </div>
   </section>
</>
  )
}
