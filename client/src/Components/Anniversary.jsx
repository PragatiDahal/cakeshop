import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Anniversary = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
   <div className="flex justify-center py-8 pt-10">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> ANNIVERSARY CAKES</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 md:px-10 pt-5 pb-10 justify-center items-center">

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="w-full h-full rounded-2xl" src="https://i.pinimg.com/564x/f1/bb/77/f1bb77eaff06699ca2405dbf352682ea.jpg" alt="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Chocolate cake : Rs.500</p>
  </div>

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/57/b3/47/57b3476a6334405d40474424dc7bfb98.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Black Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/77/20/82/772082e37096730f5c3a6f50ecc97bce.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">White Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/df/2a/f8/df2af821400f1a34c419357c4f6ddcf0.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Fruit toppings cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/33/c9/f7/33c9f7ecb35642043318a7c80c58c489.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Red velvet cake : Rs.500</p>
    </div>

    
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/18/9a/b3/189ab398da994ec09486a667ddde1f09.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Pineapple cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/15/b9/da/15b9daea8581a04dac3cf120caa5a26e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Heartshape cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/52/48/14/524814bcafad7dfa9c6b7ffcda4c7d0e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/52/48/14/524814bcafad7dfa9c6b7ffcda4c7d0e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>  
    
    </section>
   </> 
  )
}

export default Anniversary