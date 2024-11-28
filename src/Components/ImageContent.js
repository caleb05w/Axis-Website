import React from "react";
import org from "../assets/images/org.png";

function ImageContent({ Header, Body, ButtonText, Image, AltText }) {
  return (
    <div className="relative w-[100%] h-fit rounded-md  text-center">
      <img className="brightness-[0.25]" src={Image} alt={AltText} />

      <div className="absolute top-[40%] w-[100%] m-auto">
        <div className="m-auto max-w-[33%] flex flex-col gap-[3lvh] ">
          <h2> {Header}</h2>
          <p>{Body}</p>
          <div className="w-100% ">
            <button> {ButtonText} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
