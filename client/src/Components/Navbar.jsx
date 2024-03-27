import React from "react";
import logo from "../images/USAlogo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const occasions = [
    <Link to="/Birthday">Birthday</Link>,
    <Link to="/Wedding">Wedding</Link>,
    <Link to="/Graduation">Graduation</Link>,
    <Link to="/Theme">Theme</Link>,
  ];

  const handleOccasionSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setMenuOpen(false); // Close the menu after selecting an occasion
  };

  return (
    <>
      <nav className="flex justify-between bg-[#F4BBC9] px-10 h-16 text-white sticky top-0 z-20 font-poppins">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="title size-10 m-4 font-bold">
            <img
              className="w-[60px] h-[50px] left-[115px] top-[5px] absolute"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="w-[120px] h-[84px] left-[215px] top-[5px] absolute text-[#733D26] text-xl font-bold font-poppins">
            USA
            <br />
            CAKES
          </div>
          {/* for desktp view */}
          <div className="hidden md:flex space-x-2">
            <Link
              to="/Homepage"
              className="list-none w-[71px] h-[29px] left-[389px] top-[25px] absolute text-[#733D26] text-xl font-bold font-poppins"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/Cakes"
              className="list-none w-[71px] h-[29px] left-[537px] top-[25px] absolute text-[#733D26] text-xl font-bold font-poppins"
              onClick={closeMenu}
            >
              Cakes
            </Link>

            <div
              className="cursor-pointer w-[124px] h-[29px] left-[737px] top-[25px] absolute text-[#733D26] text-xl font-bold font-poppins"
              onClick={toggleMenu}
            >
              Occasions
            </div>

            {isMenuOpen && (
              <ul className="absolute left-[737px] top-[54px] bg-[#733D26] border border-[#381d12] rounded shadow-md">
                {occasions.map((occasion) => (
                  <li
                    key={occasion}
                    className="cursor-pointer relative  py-2 px-4 bg-[#733D26]  hover:bg-red-900"
                    onClick={() => handleOccasionSelect(occasion)}
                  >
                    {occasion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Closing div for hidden md:flex */}

          {/* for mobile view */}
          <div className="pt-5 md:hidden">
            <button
              className="text-[#733D26] focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-2 rounded-md w-full bg-red-400 pl-10 py-5 shadow-lg z-50">
            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/Cakes"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              Cakes
            </Link>

            <div
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={toggleMenu}
            >
              Occasions
            </div>

            {/* Render occasions dropdown unconditionally */}
            <ul className="md:hidden absolute left-[125px] top-[85px] bg-[#733D26] border border-[#381d12] rounded shadow-md ">
              {occasions.map((occasion) => (
                <li
                  key={occasion}
                  className="cursor-pointer py-2 px-4 hover:bg-red-900"
                  onClick={() => handleOccasionSelect(occasion)}
                >
                  {occasion}
                </li>
              ))}
            </ul>

            <Link
              to="/About"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="/AddCart"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              Cart
            </Link>

            <Link
              to="/Login"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
        )}

        <div className="hidden md:flex items-center pt-2 ">
          <a className="mr-6 text-[#733D26] dark:text-neutral-200">
            <Link to="/AddCart">
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#733D26"
                stroke="#733D26"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"> fill="#733D26" </style>{" "}
                  <g>
                    {" "}
                    <path
                      class="st0"
                      d="M486.998,140.232c-8.924-12.176-22.722-19.878-37.785-21.078l-311.616-24.68l-5.665-32.094 c-5.179-29.305-28.497-51.998-57.932-56.352l-5.662-0.845L34.65,0.185c-9.385-1.378-18.118,5.09-19.51,14.475 c-1.395,9.393,5.086,18.127,14.471,19.514v-0.008l39.357,5.834l0.009,0.026c14.788,2.164,26.526,13.586,29.131,28.324 l53.338,302.302c5.005,28.375,29.647,49.047,58.461,49.056h219.192c9.49,0,17.176-7.694,17.176-17.172 c0-9.486-7.686-17.18-17.176-17.18H209.906c-12.133,0.009-22.536-8.725-24.642-20.672l-7.461-42.299h244.342 c24.189,0,45.174-16.691,50.606-40.262l22.967-99.523C499.118,167.887,495.93,152.424,486.998,140.232z"
                    ></path>{" "}
                    <path
                      class="st0"
                      d="M223.012,438.122c-20.402,0-36.935,16.554-36.935,36.948c0,20.394,16.533,36.931,36.935,36.931 c20.401,0,36.944-16.537,36.944-36.931C259.955,454.676,243.413,438.122,223.012,438.122z"
                    ></path>{" "}
                    <path
                      class="st0"
                      d="M387.124,438.122c-20.406,0-36.935,16.554-36.935,36.948c0,20.394,16.529,36.931,36.935,36.931 c20.402,0,36.944-16.537,36.944-36.931C424.068,454.676,407.526,438.122,387.124,438.122z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="text-[#733D26] text-base font-bold font-poppins">
                CART
              </p>
            </Link>
          </a>

          <a className="mr-6 text-[#733D26] dark:text-neutral-200">
            <Link to="/Login">
              <svg
                className="w-[30px] h-[30px] top-[5px]"
                fill="#733D26"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>user-solid</title>{" "}
                  <path
                    d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"
                    class="clr-i-solid clr-i-solid-path-1"
                  ></path>
                  <circle
                    cx="18"
                    cy="10"
                    r="7"
                    class="clr-i-solid clr-i-solid-path-2"
                  ></circle>{" "}
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    fill-opacity="0"
                  ></rect>
                </g>
              </svg>
              <p className="text-[#733D26] text-base font-bold font-poppins">
                LOGIN
              </p>
            </Link>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
