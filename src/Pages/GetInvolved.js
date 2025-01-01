import React from "react";
import Title from "../Components/Title";
import ImageContent from "../Components/ImageContent";

// /Components
import Image from "../Components/Image";
import FAQContainer from "../Components/FAQContainer";
import { MdArrowOutward } from "react-icons/md";

/*Images*/
import LeadershipTeam from "../assets/images/LeadershipTeam.png";
import Odyssey from "../assets/images/Odyssey_backgGround.png";
import Axis from "../assets/images/Axis3.gif";
import Axis2 from "../assets/images/Axis1.gif";
import Team from "../assets/images/LeadershipTeam.png";

function GetInvolved() {
  return (
    <div className=" w-[85%] l:gw-[70%] max-h-100 m-auto flex flex-col mt-[5%] gap-[5rem] lg:gap-[10rem]">
      <Title
        Header="Get Involved"
        Body="Become a part of the Axis community by coming to events, joining our programs, and applying to be a part of our team when recruitment season begins."
      ></Title>
      <section className="flex flex-col lg:flex-row gap-[1rem] h-fit lg:h-[70vh]">
        <div className="overflow-hidden group rounded-[0.5rem]">
          <div className="w-[100] h-full relative overflow-hidden rounded-[0.5rem]">
            <Image
              Image={Axis2}
              CSS={"brightness-[0.6]"}
              Shade={"30"}
              alt="Odyssey"
            ></Image>
            <div className="absolute bottom-[20%] lg:bottom-[5%] px-[4%] group-hover:-translate-y-5 ease-in-out duration-500 ">
              <h4 className=" transition-all duration-500 ease-in-out">
                Odyssey Mentorship Program
              </h4>
              <div className=" absolute flex flex-row  opacity-0 group-hover:opacity-100  lg:mt-[0.3rem] group-hover:mt-[0rem] duration-[650ms] ease-in-out hover:text-my-blue filter">
                <p className=" ease-in-out duration-500 text-my-blue">
                  Register here
                </p>
                <div className="text-my-blue flex flex-row items-center ml-[0.25rem] transition-ease-in-out duration-500">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] gap-[1rem] h-full">
          <div className="group min-w-[50%] max-h-[50%] rounded-[0.5rem] relative overflow-hidden">
            <Image
              Image={Axis}
              alt="Odyssey"
              Scale={"105"}
              Shade={"30"}
              CSS={"brightness-[0.6]"}
            ></Image>

            <div className="absolute bottom-[20%] lg:bottom-[10%] px-[4%] group-hover:bottom-[15%] duration-500 ease-in-out">
              <h4>Interested in our Upcoming Events?</h4>
              <a
                target="_blank"
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6JsHL5n-8JLl38GgQsZ96JUQUJaMUs0NkxUSTROQTVBN0YzUzBNUVBOSC4u"
              >
                <div className=" absolute flex flex-row  lg:opacity-0 group-hover:opacity-100  lg:mt-[0.3rem] group-hover:mt-[0rem] duration-[650ms] ease-in-out hover:text-my-blue">
                  <p className=" ease-in-out duration-500 text-my-blue">
                    Sign up to stay updated.
                  </p>
                  <div className=" text-my-blue flex flex-row items-center ml-[0.25rem] transition-ease-in-out duration-500">
                    <MdArrowOutward />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="group min-w-[50%] max-h-[50%] rounded-[0.5rem] relative overflow-hidden">
            <Image
              Image={Team}
              alt="Odyssey"
              Shade={"30"}
              Scale={"105"}
              CSS={"brightness-[0.6]"}
            ></Image>

            <div className="absolute bottom-[20%] lg:bottom-[10%] px-[4%] group-hover:bottom-[15%] duration-500 ease-in-out">
              <h4>Join Our Team</h4>
              <div className=" absolute flex flex-row lg:opacity-0 group-hover:opacity-100  lg:mt-[0.3rem] group-hover:mt-[0rem] duration-[650ms] ease-in-out hover:text-my-blue">
                <a
                  href="https://forms.office.com/pages/responsepage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6271UxuxHhHtFBc1i0Bp95UMFJVQkFGNlk3MTFRRVRXQVFGTVYxSEVMVC4u&route=shorturl"
                  target="_blank"
                >
                  <p className=" ease-in-out duration-500 text-my-blue">
                    Register here
                  </p>
                </a>
                <div className="text-my-blue  flex flex-row items-center ml-[0.25rem] transition-ease-in-out duration-500">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[full] lg:w-[50%] mx-[auto] flex flex-col gap-[1rem]">
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
        clickTo={
          "https://forms.office.com/pages/responsepage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6271UxuxHhHtFBc1i0Bp95UMFJVQkFGNlk3MTFRRVRXQVFGTVYxSEVMVC4u&route=shorturl"
        }
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
          Header={"What does pro bono mean?"}
          Body={
            "Pro bono is short for the Latin phrase pro bono publico, which means for the public good. Essentially, it refers to professional work that is done voluntarily and without payment."
          }
        ></FAQContainer>

        <FAQContainer
          Header={"What's next?"}
          Body={
            "We are currently hiring additional talents to join our roster. Meanwhile, we are running our first mentorship program, Odyssey. Stay tuned for updates on our upcoming firm tours, and our biggest event of the year - Revolve."
          }
        ></FAQContainer>
      </section>
    </div>
  );
}

export default GetInvolved;
