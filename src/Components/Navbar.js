import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

// components
import Hyperlink from "../Components/Hyperlink";
/* Icons */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("navbar is closed");
  };

  return (
    <div
      className={` flex flex-col items-center mx-auto  fixed lg:w-full h-fit z-50 top-0  lg:bg-transparent w-[100%] lg:rounded-none rounded-[1rem] lg:shadow-none ease-in-out duration-200 fill-neutral-200
    ${isOpen ? "bg-my-light-gray shadow-lg" : "bg-none shadow-none"}`}
    >
      <div
        className={`flex lg:flex-row flex-col justify-between px-[5%] lg:py-[1%] bg-transparent w-full lg:w-full lg:my-none my-[1rem]
        `}
      >
        <div className="w-full flex flex-row justify-between" id="no-hover">
          <h6 className=" flex flex-col justify-center ">
            <a
              href="/"
              className="hover:text-my-blue text-white transition duration-300 ease-in-out"
            >
              <b>
                <span className="text-my-blue">Axis</span> Consulting
              </b>
            </a>
          </h6>
          <button
            className=" w-fit block lg:hidden text-white text-2xl bg-transparent"
            onClick={toggleNavbar}
          >
            {isOpen ? "x" : <IoMenu className="w-[10] h-[10] text-3xl" />}
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:justify-end gap-[1rem] lg:gap-[2rem]  lg:w-fit w-full  ease-in-out duration-300 lg:opacity-[100]  border-white whitespace-nowrap lg:mt-[0]
           ${isOpen ? "mt-2rem opacity-100" : "mt-[-25rem] opacity-0"}`}
        >
          <Hyperlink text="Resources" clickTo="/resources"></Hyperlink>
          <Hyperlink text="About" clickTo="/about"></Hyperlink>
          <Hyperlink text="Our Clients" clickTo="/Clients"></Hyperlink>
          <Hyperlink text="Get Involved" clickTo="GetInvolved"></Hyperlink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
