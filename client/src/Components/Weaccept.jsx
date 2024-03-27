import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Weaccept = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center py-8 pt-10 mt-8">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-4xl font-bold"> We Accept</h1>
       </div>
    <section className="flex flex-wrap gap-8 md:gap-8 mt-6  pt-5 pb-10 justify-center items-center">

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
  <img className="w-full h-full md:w-[250px] md:h-[150px] px-5 py-5 md:px-2 md:py-2 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp" alt="" />
</div>

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
 
  <img className="w-full h-full md:w-[250px] md:h-[150px] px-5 py-5 md:px-2 md:py-2 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Khalti_Digital_Wallet_Logo.png.jpg/640px-Khalti_Digital_Wallet_Logo.png.jpg" alt="" />
  
</div>

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
 
  <img className="w-full h-full md:w-[250px] md:h-[150px] px-5 py-5 md:px-2 md:py-2 rounded-full " src="https://logowik.com/content/uploads/images/219_visa.jpg" alt="" />
 
  </div>
  <div className="relative" data-aos="fade-up" data-aos-duration="2000">
 
 <img className="w-full h-full md:w-[250px] md:h-[150px] px-5 py-5 md:px-2 md:py-2 rounded-full " src="https://play-lh.googleusercontent.com/-Dh97DQp7zHwg8X03-vqTz-IuziW7ce3sz5_TBOMEcDFAnToXKlkEQ3lprVHy2Qq44ms" alt="" />

 
</div>
</section>
</>
    // <>
    //  <div className="flex flex-row flex-wrap justify-center py-8 pt-10">
    //     <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-4xl font-bold"> We Accept</h1>
    //   </div>
    //   <img className="flex flex-row justify-center items-center mx-auto w-[250px] h-[150px]  bg-gray-400 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp"/>
    //   <img className="flex flex-row justify-center items-center mx-auto w-[250px] h-[150px]  bg-gray-400 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Khalti_Digital_Wallet_Logo.png.jpg/640px-Khalti_Digital_Wallet_Logo.png.jpg"/>
    //   <img className="flex flex-row justify-center items-center mx-auto w-[250px] h-[150px]  bg-gray-400 rounded-full " src="https://logowik.com/content/uploads/images/219_visa.jpg"/>
    // </>
  )
}

export default Weaccept