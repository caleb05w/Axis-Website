import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Hyperlink({ text, clickTo }) {
  return (
    <h6 className="group flex flex-row  w-fit">
      <a href={clickTo} className="group-hover:text-my-blue text-white">
        {text}
      </a>
      <div className="flex flex-row items-center ml-[0.25rem] text-my-light-blue group-hover:text-my-blue transition-all duration-[650ms] w-[0rem] mt-[0.25rem] group-hover:mt-[0rem] group-hover:w-[1rem]">
        <MdArrowOutward />
      </div>
    </h6>
  );
}

export default Hyperlink;
