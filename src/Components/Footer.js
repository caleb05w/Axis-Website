import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div>
      <nav className="bg-[#151515]">
        <div className="flex justify-between lg:w-[90%] w-[80%] m-auto pt-[12%]">
          <div className="lg:block hidden">
            <h6 className="font-bold"> Axis Consulting </h6>
            <div className="flex flex-col mt-[5%]">
              <h6>8888 University Drive</h6>
              <h6>Burnaby, BC</h6>
              <h6>V5A 1S6</h6>
            </div>
          </div>

          <div className="flex lg:w-[25%] h-auto justify-between w-full flex-row-reverse">
            <div className="flex flex-col gap-[0.5rem]">
              <h6 className="font-bold"> Resources </h6>
              <a href="#">
                <h6>The Brand</h6>
              </a>
              <a href="#">
                <h6>The Team</h6>
              </a>
              <a href="#">
                <h6>Our Clients</h6>
              </a>
              <a href="#">
                <h6>FAQ</h6>
              </a>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <h6 className="font-bold"> Get Involved </h6>
              <a href="#">
                <h6>Contact Us</h6>
              </a>
              <a href="#">
                <h6>Recruitment Package</h6>
              </a>
              <a href="#">
                <h6>Apply Here</h6>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-[3%] pb-[3%] flex justify-between">
          <h6 className="text-[#4998FF]"> Axis Consulting @ 2024-2025 </h6>
          <div className="flex gap-[1%] w-[50%] justify-end">
            <a href="https://www.linkedin.com/company/18467218">
              <FaLinkedinIn color="white" />
            </a>
            <a href="https://www.instagram.com/sfuaxisconsulting/">
              <FaInstagram color="white" />
            </a>
            <a href="https://www.facebook.com/SFUAxisConsulting/">
              <FaFacebookF color="white" />
            </a>
            <a href="google.com">
              <MdOutlineEmail color="white" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
