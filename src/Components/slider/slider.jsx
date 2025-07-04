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
export default function slider({lineStyle}) {
  
  return (
    <>
    
    <section>
        <div className="   w-full ">
          <div className="flex items-center  animate-marquee ">
          <img src={img1}  className="h-32 md:h-48 object-contain inline" alt="logo01" />
<img src={img2}  className="h-32 md:h-48 object-contain inline" alt="logo02" />
<img src={img3}  className="h-32 md:h-48 object-contain inline" alt="logo03" />
<img src={img4}  className="h-32 md:h-48 object-contain inline" alt="logo04" />
<img src={img5}  className="h-32 md:h-48 object-contain inline" alt="logo05" />
<img src={img6}  className="h-32 md:h-48 object-contain inline" alt="logo06" />
<img src={img7}  className="h-32 md:h-48 object-contain inline" alt="logo07" />
<img src={img8}  className="h-32 md:h-48 object-contain inline" alt="logo08" />
<img src={img9}  className="h-32 md:h-48 object-contain inline" alt="logo09" />
<img src={img10} className="h-32 md:h-48 object-contain inline" alt="logo10" />

<img src={img1}  className="h-32 md:h-48 object-contain inline" alt="logo01" />
<img src={img2}  className="h-32 md:h-48 object-contain inline" alt="logo02" />
<img src={img3}  className="h-32 md:h-48 object-contain inline" alt="logo03" />
<img src={img4}  className="h-32 md:h-48 object-contain inline" alt="logo04" />
<img src={img5}  className="h-32 md:h-48 object-contain inline" alt="logo05" />
<img src={img6}  className="h-32 md:h-48 object-contain inline" alt="logo06" />
<img src={img7}  className="h-32 md:h-48 object-contain inline" alt="logo07" />
<img src={img8}  className="h-32 md:h-48 object-contain inline" alt="logo08" />
<img src={img9}  className="h-32 md:h-48 object-contain inline" alt="logo09" />
<img src={img10} className="h-32 md:h-48 object-contain inline" alt="logo10" />
          </div>
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
