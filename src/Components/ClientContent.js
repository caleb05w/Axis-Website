import React from "react";

function ClientContent({ Title, Body, Image, AltText }) {
  return (
    <section>
      <div className="flex flex-row justify-between h-[fit]] ">
        <div className="max-w-[30%] max-h-[15vh] overflow-hidden flex">
          '
          <img
            className="w-fit min-h-fit object-contain "
            src={Image}
            alt={AltText}
          />
        </div>
        <div className="max-w-[40%] h-fit flex flex-col gap-[2rem]">
          <h3> {Title} </h3>
          <p>{Body}</p>
        </div>
      </div>
    </section>
  );
}

export default ClientContent;
