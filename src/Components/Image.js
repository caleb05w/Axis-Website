import React, { useState } from "react";

function Image({ Image, altText, Scale, Shade, CSS }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // cursor: "pointer",
        transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
        transform: hovered ? `scale(${Scale / 100})` : "scale(1)",
        filter: hovered ? `brightness(${Shade / 100})` : "brightness(100%)",
        willChange: "transform, filter",
      }}
    >
      <img
        className={`w-full h-full object-cover
          ${CSS}`}
        src={Image}
        alt={altText}
        style={{
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </div>
  );
}

export default Image;
