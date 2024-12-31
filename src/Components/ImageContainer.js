import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

function ImageContainer({ Header, Body, CTA, Image, clickTo, noArrow, CSS }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (noArrow) {
      setShow(false);
    }
  }, [noArrow]); // Runs only when `noArrow` changes

  return (
    <div
      // data-aos="fade-up"
      // data-aos-duration="1000"
      className={`group relative w-full h-fit rounded-[0.25rem] overflow-hidden ${CSS}`}
    >
      <div className="absolute flex flex-col gap-[1rem] text-left p-[2rem] pb-[3.5rem] group-hover:pb-[4rem] bottom-0 opacity-[100%] z-10 text-white transition-all duration-500 ease-in-out w-full">
        <h2>{Header}</h2>
        <p>{Body}</p>
        <a href={clickTo}>
          <div className="flex absolute bottom-0 group-hover:mb-[2rem] mb-[1rem] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-[650ms] ease-in-out hover:cursor-pointer hover:text-my-blue">
            <p className=" hover:text-my-blue text-my-light-blue transition-all duration-[650ms]">
              {CTA}{" "}
            </p>
            <div
              className={`flex-row items-center ml-[0.25rem] text-my-light-blue group-hover:text-my-blue transition-all duration-[650ms]
              ${show ? "flex" : "hidden"}`}
            >
              <MdArrowOutward />
            </div>
          </div>
        </a>
      </div>
      <div className=" gap-[1%] h-[20rem] lg:min-h-[40rem] rounded-[0.25rem] overflow-hidden object-cover w-[100%] ">
        <img
          className="w-[100%] lg:h-[40rem] filter brightness-[0.25] group-hover:brightness-[0.15] group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
          src={Image}
        ></img>
      </div>
    </div>
  );
}

export default ImageContainer;
