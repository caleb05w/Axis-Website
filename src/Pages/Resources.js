import React from "react";

//Components
import Title from "../Components/Title";
import ImageContainer from "../Components/ImageContainer";
import IconContainer from "../Components/IconContainer";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

//Images
import org from "../assets/images/org.png";

function Resources() {
  return (
    <div className=" w-[85%] lg:w-[70%] max-h-100 m-auto flex flex-col mt-[5%] gap-[5rem] lg:gap-[10rem]">
      <Title
        Header="Our Resources."
        Body="Explore our packages and learn more about what Axis has to offer. "
      ></Title>

      <section className="w-[100%] m-auto text-center flex flex-col gap-[3rem]">
        <div className="flex flex-col lg:flex-row gap-[1rem]">
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

      <section className="flex flex-col gap-[5rem]">
        <div
          className="flex flex-col lg:flex-row justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
        >
          <div className=" w-[full] lg:max-w-[50%] rounded-[0.25rem] overflow-hidden">
            <img className="w-full h-full" src={org} alt="org" />
          </div>
          <div className="flex flex-col gap-[1rem] w-full lg:max-w-[40%]">
            <p>Event</p>
            <h3>Odyssey Mentorship Program</h3>
            <p>
              Structured guidance on consulting, networking and essential skills
              to thrive in the industry.
            </p>
            <div className="group flex hover:cursor-pointer hover:text-my-blue">
              <p className=" group-hover:text-my-blue text-my-light-blue transition-all duration-[650ms]">
                Discover More
              </p>
              <div className="flex flex-row items-center ml-[0.25rem] text-my-light-blue group-hover:text-my-blue transition-all duration-[650ms]">
                <MdArrowOutward />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
        >
          <div className=" w-[full] lg:max-w-[50%] rounded-[0.25rem] overflow-hidden">
            <img className="w-full h-full" src={org} alt="org" />
          </div>
          <div className="flex flex-col gap-[1rem] w-full lg:max-w-[40%]">
            <p>Event</p>
            <h3>Strategy & Operations 101</h3>
            <p>
              Participants attended a live panel discussion and workshop,
              gaining valuable insight on these fields.
            </p>
            <div className="group flex hover:cursor-pointer hover:text-my-blue">
              <p className=" group-hover:text-my-blue text-my-light-blue transition-all duration-[650ms]">
                Discover More
              </p>
              <div className="flex flex-row items-center ml-[0.25rem] text-my-light-blue group-hover:text-my-blue transition-all duration-[650ms]">
                <MdArrowOutward />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-[100%] m-auto text-center flex flex-col gap-[0.8rem] lg:gap-[3rem]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
        data-aos-offset="0"
      >
        <h3> Our Engagements </h3>
        <div className="grid lg:grid-cols-2 gap-[0.8rem]">
          <div className="grid-rows-3 lg:grid flex flex-col gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={BsPaperclip}
              Text={"Consulting 101"}
            ></IconContainer>
            <IconContainer
              Icon={BsPaperclip}
              Text={"Strategy + Operations 101"}
            ></IconContainer>
          </div>

          <div className="grid-rows-3 lg:grid flex flex-col gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={BsPaperclip}
              Text={"Odyssey & Mentorship"}
            ></IconContainer>
            <IconContainer
              Icon={BsPaperclip}
              Text={"Marketing & Sales"}
            ></IconContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
