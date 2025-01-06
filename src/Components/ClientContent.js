import React from "react";

function ClientContent({ Title, Body, Image, AltText }) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between h-[fit] ">
        <div className="w-[100%] lg:max-w-[30%] max-h-[20vh] flex-col justify-center flex overflow-hidden">
          <img
            className="w-fit h-full object-contain"
            src={Image}
            alt={AltText}
          />
        </div>
        <div className="w-[100%] lg:max-w-[40%] h-fit flex flex-col lg:gap-[2rem] lg:text-left text-center">
          <h3> {Title} </h3>
          <p>{Body}</p>
        </div>
      </div>
    </section>
  );
}

export default ClientContent;
