import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link} from 'react-router-dom';


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
   <section className="flex flex-wrap gap-8 md:gap-8 mt-10 bg-[#F4BBC9] pt-5 pb-10 justify-center items-center">

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
  <Link to="/Wedding">
  <img className="w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl transition ease-in-out delay-150 hover:scale-90 duration-1000" src="https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </Link>
  <div className="absolute inset-0 flex justify-center items-center top-[400px]">
    <div className="bg-[#733D26] text-white py-2 px-4 rounded-lg">
      <p className="text-center text-base font-bold">Wedding Cakes</p>
    </div>
  </div>
</div>

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
  <Link to="/Birthday">
  <img className="w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl transition ease-in-out delay-150 hover:scale-90 duration-1000" src="https://i.pinimg.com/564x/57/9a/a7/579aa7f912001123adeb145371d2b80a.jpg" alt="" />
  </Link>
  <div className="absolute inset-0 flex justify-center items-center top-[350px]  md:top-[400px]">
    <div className="bg-[#733D26] text-white py-2 px-4 rounded-lg">
      <p className="text-center text-base font-bold">Birthday Cakes</p>
    </div>
  </div>
</div>

<div className="relative" data-aos="fade-up" data-aos-duration="2000">
  <Link to="/Cakes">
  <img className="w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl transition ease-in-out delay-150 hover:scale-90 duration-1000" src="https://i.pinimg.com/564x/cc/a7/99/cca7996f0da339205b5b704666ba4ec0.jpg" alt="" />
  </Link>
  <div className="absolute inset-0 flex justify-center items-center top-[350px] md:top-[400px]">
    <div className="bg-[#733D26] text-white py-2 px-4 rounded-lg">
      <p className="text-center text-base font-bold">Mini Cakes</p>
    </div>
  </div>
</div>

</section>

    </>
  )
}

export default Main