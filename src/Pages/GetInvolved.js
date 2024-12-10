import React from "react";
import Title from "../Components/Title";
import ImageContent from "../Components/ImageContent";

// /Components
import Image from "../Components/Image";
import FAQContainer from "../Components/FAQContainer";

/*Images*/
import LeadershipTeam from "../assets/images/LeadershipTeam.png";
import Odyssey from "../assets/images/Odyssey_backgGround.png";
import WestCoastKidsFoundation from "../assets/images/WestCoastKidsFoundation.png";

function GetInvolved() {
  return (
    <div className=" w-[70%] max-h-100 m-auto flex flex-col mt-[5%] gap-[10rem]">
      <Title
        Header="Get Involved"
        Body="Become a part of the Axis community by coming to events, joining our programs, and applying to be a part of our team when recruitment season begins."
      ></Title>
      <section className="flex flex-row  gap-[1rem] h-[60vh]">
        <div className="w-[50%] h-full  rounded-[0.5rem] relative overflow-hidden">
          <Image Image={Odyssey} alt="Odyssey"></Image>
          <div className="absolute bottom-[8%] px-[2%]">
            <h4>Odyssey Mentorship Program</h4>
            <p>Register here</p>
          </div>
        </div>
        <div className=" flex flex-col w-[50%] gap-[1rem] h-full">
          <div className="min-w-[50%] max-h-[50%] rounded-[0.5rem] relative overflow-hidden">
            <Image Image={WestCoastKidsFoundation} alt="Odyssey"></Image>

            <div className="absolute bottom-[10%] px-[4%]  ">
              <h4>Odyssey Mentorship Program</h4>
              <p>Register here</p>
            </div>
          </div>
          <div className="min-w-[50%] max-h-[50%] rounded-[0.5rem] relative overflow-hidden">
            <Image Image={Odyssey} alt="Odyssey"></Image>

            <div className="absolute bottom-[10%] px-[4%]">
              <h4>Support West Coast Kids Foundation</h4>
              <p>Donate Here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[50%] mx-[auto] flex flex-col gap-[1rem]">
        <p className="text-center">
          “Overall, my experience with Axis has provided countless opportunities
          to improve and build new skills that are transferable and applicable
          both academically and professionally."
        </p>
        <p className="text-center">Lawrence Zhu</p>
      </section>
      <ImageContent
        Header={"Your Future Awaits"}
        Body={"View Applicaiton Package"}
        ButtonText={"Apply Now"}
        Image={LeadershipTeam}
        AltText={"Our lovely leadership team 2024 - 2025"}
      ></ImageContent>

      <section className="flex flex-col gap-[1rem]">
        <h2 className="mb-[2rem] text-center"> Frequently Asked Questions</h2>

        <FAQContainer
          Header={"What is Axis"}
          Body={
            "Axis is a student-led pro bono organisation in SFU, providing clients with innovative solutions."
          }
        ></FAQContainer>

        <FAQContainer
          Header={"What is Axis"}
          Body={
            "Axis is a student-led pro bono organisation in SFU, providing clients with innovative solutions."
          }
        ></FAQContainer>

        <FAQContainer
          Header={"What is Axis"}
          Body={
            "Axis is a student-led pro bono organisation in SFU, providing clients with innovative solutions."
          }
        ></FAQContainer>
      </section>
    </div>
  );
}

export default GetInvolved;
