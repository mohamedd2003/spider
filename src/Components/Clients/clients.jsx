import React from 'react'
import baic from "../../assets/logoWithBg/baic.jpg"
import canon from "../../assets/logoWithBg/canon.jpg"
import healthy from "../../assets/logoWithBg/healthy.jpg"
import hgo from "../../assets/logoWithBg/hgo.jpg"
import hyp from "../../assets/logoWithBg/hyp.jpg"
import pr from "../../assets/logoWithBg/pr.jpg"
import pubg from "../../assets/logoWithBg/pubg.jpg"
import tie from "../../assets/logoWithBg/tie.jpg"
import x from "../../assets/logoWithBg/x.jpg"

const logos = [baic, canon, healthy, hgo, hyp, pr, pubg, tie, x]

export default function Clients() {
  return (
<>
<section className='w-[80%] mx-auto py-10'> 
  <div className="flex flex-wrap items-center justify-center">
    {logos.map((logo, i) => (
      <div key={i} className='w-3/12 lg:w-2/12'>
        <div className="client p-2">
          <img className='rounded-2xl w-full' src={logo} alt="" />
        </div>
      </div>
    ))}
  </div>
   </section>
</>
  )
}
