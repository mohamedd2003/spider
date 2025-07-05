import React from 'react'
import img1 from "../../assets/logo/1.png";
import img2 from "../../assets/logo/2.png";
import img3 from "../../assets/logo/3.png";
import img4 from "../../assets/logo/4.png";
import img5 from "../../assets/logo/5.png";
import img6 from "../../assets/logo/6.png";
import img7 from "../../assets/logo/7.png";
import img8 from "../../assets/logo/8.png";
import img9 from "../../assets/logo/9.png";
import img10 from "../../assets/logo/10.png";
export default function slider() {
  
  return (
    <>
    <section className="overflow-hidden w-full">
  <div className="animate-marquee whitespace-nowrap flex w-max">
    {[...Array(2)].flatMap(() =>
      [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, i) => (
        <img
          key={i + '-' + Math.random()}
          src={img}
          className="h-24 md:h-48 object-contain inline-block mx-4"
          alt={`logo${i + 1}`}
        />
      ))
    )}
  </div>
</section>

    </>
  )
}

/* Add this to your global CSS (e.g., index.css):
.animate-marquee {
  animation: marquee 30s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
*/
