import React from 'react'
import blabn from "../../assets/blabn.jpg"
import kop from "../../assets/kop.jpg"
import rox from "../../assets/rox.jpg"
import pr from "../../assets/pr.jpg"

export default function Clients() {
  return (
<>
<section className='w-[80%] mx-auto py-10'> 
  <div className="flex flex-wrap items-center">
    <div  className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='rounded-2xl w-full  '   src={blabn} alt="" />
</div>
    </div>

    <div  className='w-1/2 md:w-1/3 lg:w-3/12  '>



<div className="client p-2  ">
<img className='  rounded-2xl w-full  '   src={rox} alt="" />
</div>




    </div>

    <div to="/clients/elkoptan" className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={kop} alt="" />
</div>
    </div>

    <div  className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={pr} alt="" />
</div>
    </div>
  </div>
   </section>
</>
  )
}
