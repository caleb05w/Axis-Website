import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="fixed w-full h-fit z-50 top-0">
      <div className="flex justify-between px-[5%] py-[1%] bg-transparent">
        <h6>
          <a href="/">
            <b>
              <span id="blue">Axis</span> Consulting
            </b>
          </a>
        </h6>

        <div className="flex flex-row gap-[2rem]">
          <h6>
            <a href="/Resources">Resources</a>
          </h6>
          <h6>
            <a href="/about">Team</a>
          </h6>
          <h6>
            <a href="/Clients">Clients</a>
          </h6>
          <h6>
            <a href="/GetInvolved">Get Involved</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
