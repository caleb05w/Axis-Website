import React from "react";

function Title({ Header, Body, Header2 }) {
  return (
    <div
      // data-aos="fade-up"
      className="grid justify-center text-center w-[100%] lg:w-[85%] m-auto lg:mt-[5%] mt-[20%]"
    >
      <h1 className=""> {Header}</h1>
      <h1 className="text-my-blue"> {Header2}</h1>
      <p className="w-[100%] lg:w-[60%] mx-auto mt-[5%]">{Body}</p>
    </div>
  );
}

export default Title;
