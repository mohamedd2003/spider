import React from 'react'
import blabn from "../../assets/blabn.jpg"
import elkoptan from "../../assets/elkoptan.png"

export default function Clients() {
  return (
<>
<section className='w-[80%] mx-auto py-10'> 
  <div className="flex flex-wrap items-center">
    <div className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className=' h-[200px] rounded-2xl border ' width={200}  src={blabn} alt="" />
</div>
    </div>
    <div className='w-1/2 md:w-1/3 lg:w-3/12  '>
<div className="client p-2  ">
<img className='  rounded-2xl border  w-full'   src={elkoptan} alt="" />
</div>
    </div>
    <div className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className=' h-[200px] rounded-2xl border '  src={blabn} alt="" />
</div>
    </div>
    <div className='w-1/2 md:w-1/3 lg:w-3/12 '>
<div className="client p-2  ">
<img className=' h-[200px] rounded-2xl border '  src={elkoptan} alt="" />
</div>
    </div>
  </div>
   </section>
</>
  )
}
