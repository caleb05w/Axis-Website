import React from "react";
import "../output.css";
import "../input.css"; //<-- Tailwind stylesheet
import { IoIosCheckmark } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import ImageContent from "../Components/ImageContent";
import org from "../assets/images/org.png";

function Home() {
  return (
    <div>
      <div className=" w-[70%] h-fit m-auto py-[5%] flex flex-col">
        <div className="grid justify-center text-center w-[50%] m-auto">
          <h1 className="">
            {" "}
            Personal Growth <span id="blue"> Community Impact </span>
          </h1>
          <p className="w-[60%] mx-auto my-[5%]">
            Axis Consulting is a student-led pro-bono consultancy part of Simon
            Fraser University.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[0.8rem] mt-[5%]">
          <div className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <IoIosCheckmark style={{ color: "#4B7BFF" }} size="3lvw" />
              <h3 className="">63 Projects</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <MdOutlinePeopleAlt style={{ color: "#4B7BFF" }} size="1.5lvw" />
              <h3 className="">60 Clients</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <IoMdStarOutline style={{ color: "#4B7BFF" }} size="1.5lvw" />
              <h3 className="">500 Billable Hours/Project</h3>
            </div>
          </div>

          <div className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <BsPaperclip style={{ color: "#4B7BFF" }} size="1.5lvw" />
              <h3 className="">212 Alumni</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <FaRegHeart style={{ color: "#4B7BFF" }} size="1lvw" />
              <h3 className="">96% Client Satisfaction</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <FaRegStickyNote style={{ color: "#4B7BFF" }} size="1.5lvw" />
              <h3 className="">92% Implementation Rate</h3>
            </div>
          </div>
        </div>

        <div className="w-[100%] m-auto text-center mt-[10%]">
          <h3> Our Engagements </h3>

          <div className="grid grid-cols-2 h-[40rem] gap-[1%]">
            <div className="bg-white rounded-md w-[100%] mt-[5%]">
              <p>HJello</p>
            </div>

            <div className="bg-white rounded-md w-[100%] mt-[5%]">
              <p>HJello</p>
            </div>
          </div>
        </div>
        <ImageContent
          Header="Ready to Soar?"
          Body="            Join the team, come to events, and expand horizons within the field
            of consulting"
          ButtonText="Get Involved"
          Image={org}
          AltText={
            "The Axis Consulting Organization 2024-2025 posing for our annual group photo"
          }
        />
      </div>
    </div>
  );
}

export default Home;
