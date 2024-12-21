import React from "react";
import org from "../assets/images/org.png";

function ImageContent({ Header, Body, ButtonText, Image, AltText }) {
  return (
    <div
      // data-aos="fade-up"
      // data-aos-duration="800"
      // data-aos-delay="200"
      // data-aos-easing="ease-in-sine"
      // data-aos-offset="0"
      className="group relative lg:w-[100%] w-fit h-[50vh] lg:h-fit rounded-md  text-center hover:cursor-pointer overflow-hidden"
    >
      <img
        className=" filter brightness-[0.25] group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
        src={Image}
        alt={AltText}
      />

      <div className="absolute top-[40%] w-[100%] m-auto">
        <div className="m-auto max-w-[100%] lg:max-w-[33%] flex flex-col gap-[3lvh] ">
          <h2> {Header}</h2>
          <p className="relative filter group-hover:mt-[0%] mt-[1.5%]  opacity-100 transition-all duration-500 ease-in-out">
            {Body}
          </p>
          <div className="w-100% relative filter group-hover:mt-[0%] mt-[2%] group-hover:opacity-100 opacity-100 lg:opacity-0 transition-all duration-[650ms] ease-in-out">
            <button> {ButtonText} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
