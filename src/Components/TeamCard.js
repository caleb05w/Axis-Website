import React from "react";

function PersonCard({ Name, Position, img }) {
  return (
    <div>
      <div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className={`group relative  h-fit `}
      >
        <div className="absolute flex flex-col text-left p-[2rem] pb-[2rem] group-hover:pb-[2.5rem] bottom-0 opacity-[100%] z-10 text-white transition-all duration-500 ease-in-out w-full">
          <h2>{Name}</h2>
          <p>{Position}</p>
        </div>

        <div className=" overflow-hidden rounded-[0.5rem] w-[40vw] h-[60vh]">
          <img
            className="w-[100%] object-cover h-[100%] filter brightness-[0.55] group-hover:brightness-[0.15] group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
            src={img}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
