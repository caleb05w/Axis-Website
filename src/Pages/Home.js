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

// components
import IconLabel from "../Components/IconLabel";
import ImageContainer from "../Components/ImageContainer";

function Home() {
  return (
    <div>
      <div className=" w-[70%] h-fit m-auto py-[5%] flex flex-col gap-[10rem]">
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

        <div className="grid grid-cols-2 gap-[0.8rem]">
          <section className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <IoIosCheckmark style={{ color: "#4B7BFF" }} size="3lvw" />
              </div>{" "}
              <h3 className="">63 Projects</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <MdOutlinePeopleAlt
                  style={{ color: "#4B7BFF" }}
                  size="1.5lvw"
                />
              </div>
              <h3 className="">60 Clients</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <IoMdStarOutline style={{ color: "#4B7BFF" }} size="1.5lvw" />
              </div>{" "}
              <h3 className="">500 Billable Hours/Project</h3>
            </div>
          </section>

          <div className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <BsPaperclip style={{ color: "#4B7BFF" }} size="1.5lvw" />
              </div>{" "}
              <h3 className="">212 Alumni</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <FaRegHeart style={{ color: "#4B7BFF" }} size="1lvw" />
              </div>{" "}
              <h3 className="">96% Client Satisfaction</h3>
            </div>

            <div className="flex gap-[8%] bg-[#1A1A1A] px-[5%] py-[3%] rounded-md">
              <div className=" w-[5vh] flex flex-col items-center justify-center">
                <FaRegStickyNote style={{ color: "#4B7BFF" }} size="1.5lvw" />
              </div>{" "}
              <h3 className="">92% Implementation Rate</h3>
            </div>
          </div>
        </div>

        <section className="w-[100%] m-auto text-center flex flex-col gap-[3rem]">
          <h3> Our Engagements </h3>
          <div className="flex flex-row gap-[1rem]">
            <ImageContainer
              Header={"Visier"}
              Body={
                "Market research on the field of HR analytics, market trends in HR an dfinance interactions."
              }
              CTA={"Read the case"}
              Image={org}
            ></ImageContainer>
            <ImageContainer
              Header={"West Coast Kids Cancer Foundation"}
              Body={
                "Analysis on the supply chain, bottleneck identification, and recommendation of a just-in-time inventory system"
              }
              CTA={"Read the case"}
              Image={org}
            ></ImageContainer>
          </div>
        </section>

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
