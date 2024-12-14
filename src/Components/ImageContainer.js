import React from "react";
import { MdArrowOutward } from "react-icons/md";

function ImageContainer({ Header, Body, CTA, Image }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="group relative  hover:cursor-pointer"
    >
      <div className="absolute flex flex-col gap-[1rem] text-left p-[2rem] pb-[3.5rem] group-hover:pb-[4rem] bottom-0 opacity-[100%] z-10 text-white transition-all duration-500 ease-in-out">
        <h3>{Header}</h3>
        <p>{Body}</p>
        <div className="flex absolute bottom-0 group-hover:mb-[2rem] mb-[1rem] opacity-0 group-hover:opacity-100 transition-all duration-[650ms] ease-in-out hover:cursor-pointer hover:text-blue-500">
          <p className=" hover:text-blue-500 transition-all duration-[650ms]">
            {CTA}{" "}
          </p>
          <div className="flex flex-row items-center ml-[0.25rem]">
            <MdArrowOutward />
          </div>
        </div>
      </div>
      <div className=" gap-[1%] min-h-[40rem] rounded-[0.25rem] overflow-hidden object-cover w-[100%] ">
        <img
          className="w-[100%] h-[40rem] filter brightness-[0.25] group-hover:brightness-[0.15] group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
          src={Image}
        ></img>
      </div>
    </div>
  );
}

export default ImageContainer;