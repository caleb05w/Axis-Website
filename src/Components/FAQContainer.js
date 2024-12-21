import React from "react";

function FAQContainer({ Header, Body }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1100"
      data-aos-delay="400"
      data-aos-easing="ease-in-sine"
    >
      <div className="flex flex-col lg:flex-row justify-between rounded-[0.25rem] lg:p-[2rem] p-[1rem] w-full bg-[#1A1A1A] lg:gap-0 gap-[1rem]">
        <h4 className="flex flex-col justify-center">{Header}</h4>
        <p className="w-full lg:w-[40%] ">{Body}</p>
      </div>
    </section>
  );
}

export default FAQContainer;
