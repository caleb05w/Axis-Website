import React from "react";

function IconContainer({ Icon, Text }) {
  return (
    <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
      <div className=" w-[5vh] flex flex-col items-center justify-center">
        <Icon style={{ color: "#4B7BFF" }} size="2lvw" />
      </div>{" "}
      <h3 className="">{Text}</h3>
    </div>
  );
}

export default IconContainer;
