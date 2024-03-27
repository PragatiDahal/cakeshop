import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Graduation = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
   <div className="flex justify-center py-8 pt-10">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> GRADUATION CAKES</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 md:px-10 pt-5 pb-10 justify-center items-center">

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="w-full h-full rounded-2xl" src="https://i.pinimg.com/564x/ad/f3/df/adf3df7e21b3771e78eda8ea5d11a1ad.jpg" alt="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Chocolate cake : Rs.500</p>
  </div>

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/55/6e/53/556e53c372f09ab8a59ee0096c4ddf29.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Black Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/9e/1c/23/9e1c2306ad24b545c028ee38f2498368.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">White Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/8d/e9/29/8de929b326601282a5ac07877a211fa5.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Fruit toppings cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/e4/e9/60/e4e96029da07cfd9e3282c63b56f63fd.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Pineapple cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/70/56/d4/7056d463fff77d29a02f48c2ea03ed04.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Heartshape cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/59/6f/98/596f98d854c204a01ad47f0c9a6dd087.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/41/e7/5a/41e75a9cb18f431a62eae69eeb572a67.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>  
    
    </section>
   </>
  )
}

export default Graduation