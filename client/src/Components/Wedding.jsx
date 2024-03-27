import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Wedding = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
   <div className="flex justify-center py-8 pt-10">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> WEDDING CAKES</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 md:px-10 pt-5 pb-10 justify-center items-center">

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/c4/24/d6/c424d67be53b1215e2c5f0884f9839c4.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Black Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/98/a1/1c/98a11c40e3f763725504c72134458a8c.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">White Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/ba/29/16/ba2916754bda453dd6c946461b95b02e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Fruit toppings cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/f9/86/f3/f986f3ba57a3ea27724b604881190367.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Red velvet cake : Rs.500</p>
    </div>

    
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/ab/32/fe/ab32febf1ca7113bc2dc15a08f1a6abf.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Pineapple cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/fa/37/74/fa3774b5d41b692a5113ec8d7a3aab9a.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Heartshape cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/c6/5f/f2/c65ff25535316f74cb8af0965e79801f.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/e4/71/7f/e4717f76f7afe41cf21cd16de9c1de16.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>  
    
    </section>
   </> 
  )
}

export default Wedding