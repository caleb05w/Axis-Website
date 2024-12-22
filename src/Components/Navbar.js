import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";

/* Icons */
// import { IoMenu } from "react-icons/iod5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("navbar is closed");
  };

  return (
    <div
      className={`lg:relative flex flex-col items-center mx-auto  fixed lg:w-full h-fit z-50 top-0  lg:bg-transparent w-[100%] lg:rounded-none rounded-[1rem] lg:shadow-none ease-in-out duration-200 fill-neutral-200
    ${isOpen ? "bg-my-light-gray shadow-lg" : "bg-none shadow-none"}`}
    >
      <div
        className={`flex lg:flex-row flex-col justify-between px-[5%] lg:py-[1%] bg-transparent w-full lg:w-full lg:my-none my-[1rem]
        `}
      >
        <div className="w-full flex flex-row justify-between">
          <h6 className=" flex flex-col justify-center">
            <a href="/">
              <b>
                <span className="text-my-blue">Axis</span> Consulting
              </b>
            </a>
          </h6>
          <button
            className=" w-fit block lg:hidden text-white text-2xl"
            onClick={toggleNavbar}
          >
            {isOpen ? "x" : <IoMenu className="w-[10] h-[10] text-3xl" />}
          </button>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:justify-end gap-[1rem] lg:gap-[2rem]  lg:w-fit w-full  ease-in-out duration-300  whitespace-nowrap
           ${isOpen ? "mt-2rem opacity-100" : "mt-[-25rem] opacity-0"}`}
        >
          <h6>
            <a href="/Resources">Resources</a>
          </h6>
          <h6>
            <a href="/about">Team</a>
          </h6>
          <h6>
            <a href="/Clients">Clients</a>
          </h6>
          <h6>
            <a href="/GetInvolved">Get Involved</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
