import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Birthday = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
   <>
   <div className="flex justify-center py-8 pt-10">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> ALL BIRTHDAY CAKES</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 md:px-10 pt-5 pb-10 justify-center items-center">

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="w-full h-full rounded-2xl" src="https://i.pinimg.com/564x/7f/fe/a6/7ffea6391c75a6d2c501d79381ec4aed.jpg" alt="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Chocolate cake : Rs.500</p>
  </div>

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/0b/f1/3e/0bf13e8d7354188473577e3334e19512.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Black Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/7c/e5/2b/7ce52b0e24371260e7cede4979059539.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">White Forest cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/736x/4c/98/dd/4c98dd70b3897641e90699a1b1036aef.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Fruit toppings cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/8f/bd/19/8fbd198b1f5d545bd84965fddaf5cde6.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Red velvet cake : Rs.500</p>
    </div>

    
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/1b/60/2c/1b602c8b9e1bbfe00c335312ea35f369.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Pineapple cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/60/f8/80/60f880a1f0dcc56f6e103ac21aa1348c.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Heartshape cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/736x/b8/0e/dc/b80edc0ec53ba4ae6b8d9361e69c7f9c.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </div>

      

    </section>
   </> 
  )
}

export default Birthday