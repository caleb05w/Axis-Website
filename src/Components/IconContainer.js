import React from "react";

function IconContainer({ Icon, Text, clickTo }) {
  const isClickable = clickTo !== "";

  return isClickable ? (
    <a href={clickTo} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md cursor-pointer">
        <div className="w-[5vh] flex flex-col items-center justify-center">
          <Icon style={{ color: "#4B7BFF" }} size="70%" />
        </div>
        <h3>{Text}</h3>
      </div>
    </a>
  ) : (
    <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md cursor-auto">
      <div className="w-[5vh] flex flex-col items-center justify-center">
        <Icon style={{ color: "#4B7BFF" }} size="70%" />
      </div>
      <h3>{Text}</h3>
    </div>
  );
}

export default IconContainer;
