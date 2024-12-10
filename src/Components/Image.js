import React from "react";

function Image({ Image, altText }) {
  return (
    <div className="w-full h-full overflow-hidden object-cover">
      <img
        className="w-full h-full overflow-hidden"
        src={Image}
        alt={altText}
      />
    </div>
  );
}

export default Image;
