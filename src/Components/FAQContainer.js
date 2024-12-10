import React from "react";

function FAQContainer({ Header, Body }) {
  return (
    <section>
      <div className="flex flex-row justify-between rounded-[0.25rem] px-[2rem] py-[2rem] w-full bg-[#1A1A1A]">
        <h4 className="flex flex-col justify-center">{Header}</h4>
        <p className="w-[40%] ">{Body}</p>
      </div>
    </section>
  );
}

export default FAQContainer;
