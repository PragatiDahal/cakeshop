import React from "react";
import logo from "../images/USAlogo1.png";
import Timeline from "./Timeline"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
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
          Our Story
        </h1>
      </div>

      <div
        className="max-w-[1200px] mx-auto bg-white rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden hover:bg-red-100"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="md:flex md:flex-wrap">
          <div className="md:w-1/2">
            <img
              className="w-full object-contain h-48 md:h-auto md:w-full"
              src={logo}
              alt=""
            />
          </div>
          <div className="md:w-1/2 p-4">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Sweeten your day with a slice of happiness from USA Cake!
            </a>
            <p className="mt-2 text-slate-500">
              Welcome to USA Cake, where every slice tells a story! As the proud
              owner of this delightful cake shop, let me take you on a journey
              from our humble beginnings to where we are today. Established in
              2015 with a passion for baking and a dream to spread joy through
              delicious treats, USA Cake started as a small bakery tucked away
              in a cozy corner of the city. With just a handful of recipes
              passed down through generations and a commitment to quality, we
              set out to make our mark in the world of desserts.
            </p>
            <br />
            <p className="mt-2 text-slate-500">
              In the early days, it was just me and a small team of dedicated
              bakers working tirelessly to perfect our craft. We poured our
              hearts into every cake, pastry, and confection, ensuring that each
              bite was a moment of pure bliss for our customers. As word spread
              about our delectable creations, demand began to soar. We knew it
              was time to expand, and in 2017, we opened our first branch in a
              bustling shopping district. This marked the beginning of our
              journey towards becoming a household name in the world of cakes
            </p>
            <br />
            <p className="mt-2 text-slate-500">
            Today, USA Cake boasts several branches across the city, each serving up a
            tempting array of sweets to satisfy every craving. From elegant
            wedding cakes to whimsical birthday creations, we've become the
            go-to destination for anyone with a sweet tooth.
            </p>
          </div>
        </div>
      </div>
    
    <section>
        <Timeline/>
    </section>

    </>
  );
};

export default About;
