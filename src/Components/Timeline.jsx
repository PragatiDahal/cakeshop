import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../images/USAlogo1.png";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex justify-center py-8 pt-10">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-2xl font-bold"
        >
          Timeline of our progress
        </h1>
      </div>

      <div className="w-full h-full md:w-[1440px] md:h-[837px] relative bg-white overflow-hidden">
        <div className="w-[7px] h-[705px] left-[688px] top-[9px] absolute bg-red-200 bg-opacity-60" />
        <div className="w-[268px] h-2 left-[423px] top-[83px] absolute bg-red-200 bg-opacity-60" />
        <div className="w-[268px] h-2 left-[695px] top-[208px] absolute bg-red-200 bg-opacity-60" />
        <div className="w-[268px] h-2 left-[427px] top-[317px] absolute bg-red-200 bg-opacity-60" />
        <div className="w-[268px] h-2 left-[423px] top-[638px] absolute bg-red-200 bg-opacity-60" />
        <div className="w-[268px] h-2 left-[691px] top-[505px] absolute bg-red-200 bg-opacity-60" />
        <img
          className="w-[126px] h-[126px] left-[297px] top-[28px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[301px] top-[254px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[297px] top-[575px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[929px] top-[148px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[937px] top-[423px] absolute rounded-full"
          src={logo}
        />
        <div className="w-[73px] h-[34px] left-[494px] top-[37px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          2015
        </div>
        <div className="w-[73px] h-[34px] left-[743px] top-[165px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          2017
        </div>
        <div className="w-[73px] h-[34px] left-[494px] top-[274px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          2019
        </div>
        <div className="w-[95px] h-[34px] left-[494px] top-[585px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          Today
        </div>
        <div className="w-[73px] h-[34px] left-[750px] top-[439px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          2021
        </div>
        <div className="w-[185px] h-[37px] left-[438px] top-[111px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          USA cake shop
        </div>
        <div className="w-[185px] h-[37px] left-[710px] top-[231px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          2nd location
        </div>
        <div className="w-[227px] h-[72px] left-[702px] top-[513px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          Best cake shop of Butwal.
        </div>
        <div className="w-[272px] h-36 left-[423px] top-[662px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          Most popular and renowned cake shop with best customer services.
        </div>
        <div className="w-[185px] h-[37px] left-[452px] top-[350px] absolute text-yellow-900 text-2xl font-semibold font-poppins">
          3rd location
        </div>
      </div>
    </>
  );
};

export default Timeline;
