import React from "react";

function ImageContainer({ Header, Body, CTA, Image }) {
  return (
    <div className="relative">
      <div className="absolute flex flex-col gap-[1rem] text-left p-[2rem] bottom-0 opacity-[100%] z-10">
        <h3>{Header}</h3>
        <p>{Body}</p>
        <p> {CTA} </p>
      </div>
      <div className=" gap-[1%] min-h-[40rem]  rounded-[0.25rem] overflow-hidden object-cover w-[100%]">
        <img className="w-[100%] h-[40rem] brightness-[0.25]" src={Image}></img>
      </div>
    </div>
  );
}

export default ImageContainer;
