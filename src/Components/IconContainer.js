import React from "react";

function IconContainer({ Icon, Text, clickTo }) {
  return (
    <a href={clickTo} target="_blank">
      <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
        <div className=" w-[5vh] flex flex-col items-center justify-center">
          <Icon style={{ color: "#4B7BFF" }} size="70%" />
        </div>{" "}
        <h3 className="">{Text}</h3>
      </div>
    </a>
  );
}

export default IconContainer;
