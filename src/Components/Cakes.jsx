import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Link} from "react-router-dom"
 
const Cakes = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <div className="flex justify-center py-8 pt-10">
    <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> CAKES </h1>
  </div>
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 md:px-10 pt-5 pb-10 justify-center items-center">

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Chocolate">
    <img className="w-full h-full rounded-2xl" src="https://i.pinimg.com/564x/f1/bb/77/f1bb77eaff06699ca2405dbf352682ea.jpg" alt="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Chocolate cake : Rs.500</p>
    </Link>
  </div>

  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Blackforest">
  <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/57/b3/47/57b3476a6334405d40474424dc7bfb98.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Black Forest cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Whiteforest">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/77/20/82/772082e37096730f5c3a6f50ecc97bce.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">White Forest cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Fruittoppings">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/df/2a/f8/df2af821400f1a34c419357c4f6ddcf0.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Fruit toppings cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Redvelvet">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/33/c9/f7/33c9f7ecb35642043318a7c80c58c489.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Red velvet cake : Rs.500</p>
    </Link>
    </div>

    
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Pineapple">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/18/9a/b3/189ab398da994ec09486a667ddde1f09.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Pineapple cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Heartshape">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/15/b9/da/15b9daea8581a04dac3cf120caa5a26e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Heartshape cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Butterscotch">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/52/48/14/524814bcafad7dfa9c6b7ffcda4c7d0e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Butterscotch cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/ChocoTruffle">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/af/e8/a0/afe8a0ce6eaee8a7bb59e4fde73b951e.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Chocolate Truffle cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Almond">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/9b/5e/7e/9b5e7e4444c6f1099cc7d95fea09cd24.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Almond Coconut cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Makeuptheme">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/00/16/05/0016056d7157f0e1e2b0da4336f160fe.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Makeup Theme cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Strawberry"></Link>
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/e5/d6/c2/e5d6c28ce54d52ee0aa0ea60ae8b0f88.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Strawberry cake : Rs.500</p>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Oreocheese">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/736x/7e/85/6f/7e856f328480e27136b929903f421d12.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Oreo chesse cake : Rs.500</p>
    </Link>
    </div>
    
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Mini">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/31/b5/f3/31b5f3244fc22aa954dcc2134b8be91b.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Mini cakes : Rs.500</p>
    </Link>
    </div>
     
    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Blueberry">
    <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/4c/9a/32/4c9a32f09876c30d1dcf469e7f247dca.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">Buluberry cheese cake : Rs.500</p>
    </Link>
    </div>

    <div className="relative" data-aos="fade-up" data-aos-duration="2000">
    <Link to="/Kitkat">
     <img className="flex flex-wrap w-full h-full md:w-[420px] md:h-[420px] rounded-2xl" src="https://i.pinimg.com/564x/bd/2b/4c/bd2b4ca19dc450780a781d04f04e9e21.jpg" alt="" srcset="" />
    <p className="mt-2 px-2 text-center text-[#733D26] font-bold bg-white rounded-xl">kit-kat cake : Rs.500</p>
    </Link>
    </div>

</section>
</>
  )
}

export default Cakes