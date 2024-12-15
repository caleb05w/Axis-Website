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
import ImageContainer from "../Components/ImageContainer";
import IconContainer from "../Components/IconContainer";

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

        <section className="grid grid-cols-2 gap-[0.8rem]">
          <div className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={IoIosCheckmark}
              Text={"63 Projects"}
            ></IconContainer>

            <IconContainer
              Icon={MdOutlinePeopleAlt}
              Text={"200 Consultants"}
            ></IconContainer>

            <IconContainer
              Icon={IoMdStarOutline}
              Text={"4.5/5 Rating"}
            ></IconContainer>
          </div>

          <div className="grid-rows-3 grid gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={BsPaperclip}
              Text={"100% Retention"}
            ></IconContainer>

            <IconContainer
              Icon={FaRegHeart}
              Text={"100% Satisfaction"}
            ></IconContainer>

            <IconContainer
              Icon={FaRegStickyNote}
              Text={"100% Recommendation"}
            ></IconContainer>
          </div>
        </section>

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
