import React from "react";

function Title({ Header, Body }) {
  return (
    <div className="grid justify-center text-center w-[50%] m-auto">
      <h1 className=""> {Header}</h1>
      <p className="w-[60%] mx-auto mt-[5%]">{Body}</p>
    </div>
  );
}

export default Title;
