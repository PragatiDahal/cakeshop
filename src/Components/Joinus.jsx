import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Joinus = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
   <>
  <div className="flex justify-center items-center pt-12 mt-10  px-12 h-[120px]" data-aos="fade-up" data-aos-duration="2000">
    <div className="text-center">
        <div className="text-3xl font-bold italic text-[#733D26] font-poppins">
            Are you on this List?
        </div>
        <div className="text-base font-bold italic text-[#733D26] font-poppins pt-5">
            Join us to get our exclusive and trending offers
        </div>
    </div>
    </div>

 
 <div className="flex justify-center items-center  pt-5 mx-auto h-[150px]" data-aos="fade-up" data-aos-duration="2000">
    <input type="text" className="flex items-center w-[450px] h-[45px] bg-white border-2 border-[#733D26] rounded-xl mx-5 px-4" placeholder="Enter your email here">
        
    </input>
    <button className="bg-[#733D26] hover:bg-red-800 w-[150px] h-[45px] rounded-xl text-white text-base font-bold font-poppins py-2">
    Join US
    </button>
 </div>
   </>
  )
}

export default Joinus