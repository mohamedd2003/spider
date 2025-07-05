import React from 'react'
import blabn from "../../assets/blabn.jpg"
import kop from "../../assets/kop.jpg"
import rox from "../../assets/rox.jpg"
import pr from "../../assets/pr.jpg"
import baic from "../../assets/logoWithBg/baic.jpg"
import canon from "../../assets/logoWithBg/canon.jpg"
import healthy from "../../assets/logoWithBg/healthy.jpg"
import hyp from "../../assets/logoWithBg/hyp.jpg"
import pubg from "../../assets/logoWithBg/pubg.jpg"
import tie from "../../assets/logoWithBg/tie.jpg"
import x from "../../assets/logoWithBg/x.jpg"
import hgo from "../../assets/logoWithBg/baic.jpg"

export default function Clients() {
  return (
<>
<section className='w-[80%] mx-auto py-10'> 
  <div className="flex flex-wrap items-center">
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='rounded-2xl w-full  '   src={blabn} alt="" />
</div>
    </div>

    <div  className='w-3/12 lg:w-2/12  '>



<div className="client p-2  ">
<img className='  rounded-2xl w-full  '   src={rox} alt="" />
</div>




    </div>

    <div to="/clients/elkoptan" className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={kop} alt="" />
</div>
    </div>

    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={pr} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={baic} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={canon} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={healthy} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={hyp} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={pubg} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={tie} alt="" />
</div>
    </div>
    <div  className='w-3/12 lg:w-2/12 '>
<div className="client p-2  ">
<img className='  rounded-2xl w-full '  src={x} alt="" />
</div>
    </div>
  
  </div>
   </section>
</>
  )
}
