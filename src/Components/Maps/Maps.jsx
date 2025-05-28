import React from 'react'

export default function Maps() {
  return (
    <>
    
    <div className="w-full h-full" >
  <div id="google-maps-display" className="w-full h-full">
 <iframe 
  className="w-full h-full"
  style={{ border: '0' }}
  frameBorder="0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.292924760406!2d31.7330257!3d30.2903131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fde372ab66e9%3A0xbb9b298d2c7e194f!2sSpider%20agency!5e0!3m2!1sen!2seg!4v1680000000000!5m2!1sen!2seg"
></iframe>
  </div>
  <style>
    {`#google-maps-display img { max-height: none; max-width: none !important; background: none !important; }`}
  </style>
</div>

    </>
  )
}
