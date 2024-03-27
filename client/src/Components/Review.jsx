import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
  data-aos="zoom-in"
  data-aos-duration="2000"
  className="flex flex-col md:flex-row w-full md:max-w-[1200px]  bg-[#F4BBC9] rounded-3xl mx-auto mt-12 mb-10 justify-center items-center"
>
  <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
    <svg
      height="50px"
      width="50px"
      fill="#733D26"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M790 166h-41V83h-84v83H333V83h-83v83h-42q-34 0-58.5 24.5T125 250v582q0 34 24 58.5t59 24.5h582q35 0 59-24.5t24-58.5V250q0-35-24.5-59.5T790 166zm0 666H208V374h582v458zM291 457h208v208H291V457z"></path>
    </svg>
    <p className="text-xl text-[#733D26] font-bold px-4 font-poppins text-center">
      Preferred Time <br />Slot Selection
    </p>
  </div>

  <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
          <svg
            fill="#733D26"
            height="50px"
            width="50px"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <circle cx="24" cy="24" r="3"></circle>{" "}
                <circle cx="8" cy="24" r="3"></circle>{" "}
                <path d="M29.8,17.4l-4-5C25.6,12.1,25.3,12,25,12h-5V9c0-0.6-0.4-1-1-1H3C2.4,8,2,8.4,2,9v15c0,0.6,0.4,1,1,1h0.1 C3,24.7,3,24.3,3,24c0-2.8,2.2-5,5-5s5,2.2,5,5c0,0.3,0,0.7-0.1,1H19h0.1C19,24.7,19,24.3,19,24c0-2.8,2.2-5,5-5s5,2.2,5,5 c0,0.3,0,0.7-0.1,1H29c0.6,0,1-0.4,1-1v-6C30,17.8,29.9,17.6,29.8,17.4z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="text-xl text-[#733D26] font-bold px-12 font-poppins">
            Delivery in 10+ <br /> Cities
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 122.88 102.36"
            viewBox="0 0 122.88 102.36"
            width="50px"
            height="50px"
          >
            <path
              fill-rule="evenodd"
              d="M29.83,89.55V52.63h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.9c5.84,0.35,8.9,6.27,3.22,10.16 c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.4,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.64-0.01,13.92-1.47,17.77-7.5 l1.93-4.51l19.19-9.51c9.6-3.16,16.42,6.88,9.35,13.87c-13.9,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0 L29.83,89.55L29.83,89.55z M76.08,7.8c3.63-3.79,6.17-7.06,11.77-7.7c10.5-1.21,20.16,9.55,14.86,20.14 c-1.51,3.02-4.58,6.6-7.98,10.12c-3.73,3.86-7.86,7.65-10.76,10.52l-7.89,7.83l-6.52-6.28c-7.84-7.55-20.63-17.06-21.05-28.84 c-0.3-8.25,6.22-13.54,13.7-13.44C68.91,0.23,71.72,3.56,76.08,7.8L76.08,7.8L76.08,7.8z M0,49.08h24.83v44.18H0V49.08L0,49.08z"
              clip-rule="evenodd"
              fill="#733d26"
              class="color000 svgShape"
            ></path>
          </svg>
          <p className="text-xl text-[#733D26] font-bold px-12 font-poppins">
            500+ People <br /> Trust Us
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
          <svg
            version="1.0"
            height="50px"
            weight="50px"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#733d26"
            stroke="#733d26"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  fill="#733d26"
                  d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
                ></path>{" "}
                <path
                  fill="#733d26"
                  d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="text-xl text-[#733D26] font-bold px-12 font-poppins">
            1000+ Pincodes <br />
            Serviced Till Date
          </p>
        </div>
        </div>

    </>
  );
};

export default Review;
