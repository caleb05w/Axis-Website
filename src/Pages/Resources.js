import React from "react";

//Components
import Title from "../Components/Title";
import ImageContainer from "../Components/ImageContainer";
import IconContainer from "../Components/IconContainer";
import { BsPaperclip } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

//Images
import OdysseyMentorshipProgram from "../assets/images/OdysseyMentorshipProgram.png";
import StratOps101 from "../assets/images/StratOps101.png";
import Resource1 from "../assets/images/Resource1.png";
import Resource2 from "../assets/images/Resource2.png";

function Resources() {
  return (
    <div className=" w-[85%] lg:w-[70%] max-h-100 m-auto flex flex-col mt-[5%] gap-[5rem] lg:gap-[10rem]">
      <Title
        Header="Our Resources."
        Body="Explore our packages and learn more about what Axis has to offer. "
      ></Title>

      <section className="w-[100%] m-auto text-center flex flex-col gap-[3rem] ">
        <div className="flex flex-col lg:flex-row gap-[1rem]">
          <ImageContainer
            Header={
              "Get a glimpse into consulting: Sign up to receive our Consulting 101 Package "
            }
            Body={
              "Take the first step towards your consulting career. Click here to sign up for our beginners' guide to consulting."
            }
            CTA={"Register here"}
            Image={Resource1}
            clickTo={
              "https://forms.office.com/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6JsHL5n-8JLl38GgQsZ96JUQUJaMUs0NkxUSTROQTVBN0YzUzBNUVBOSC4u"
            }
          ></ImageContainer>
          <ImageContainer
            Header={
              "Interested in our upcoming events? Sign up to get updates."
            }
            Body={
              "Be the first to receive packages, learn about events, and get exclusive access to our resources."
            }
            CTA={"Join our mailing list"}
            Image={Resource2}
            clickTo={
              "https://forms.office.com/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6JsHL5n-8JLl38GgQsZ96JUQUJaMUs0NkxUSTROQTVBN0YzUzBNUVBOSC4u"
            }
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
            <img
              className="w-full h-full"
              src={OdysseyMentorshipProgram}
              alt="org"
            />
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
            <img className="w-full h-full" src={StratOps101} alt="org" />
          </div>
          <div className="flex flex-col gap-[1rem] w-full lg:max-w-[40%]">
            <p>Event</p>
            <h3>Strategy & Operations 101</h3>
            <p>
              Participants attended a live panel discussion and workshop,
              gaining valuable insight on these fields.
            </p>
            <div className="group flex hover:cursor-pointer hover:text-my-blue">
              <a
                href="https://www.instagram.com/p/DCneYg4vty8/?img_index=1"
                target="_blank"
              >
                <p className=" group-hover:text-my-blue text-my-light-blue transition-all duration-[650ms]">
                  Discover More
                </p>
              </a>
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
        <h3> Our Resources </h3>
        <div className="grid lg:grid-cols-2 gap-[0.8rem]">
          <div className="grid-rows-3 lg:grid flex flex-col gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={BsPaperclip}
              Text={"Consulting 101"}
              clickTo="https://forms.office.com/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6JsHL5n-8JLl38GgQsZ96JUQUJaMUs0NkxUSTROQTVBN0YzUzBNUVBOSC4u"
            ></IconContainer>
            <IconContainer
              Icon={BsPaperclip}
              Text={"Strategy + Operations 101"}
              clickTo=""
            ></IconContainer>
          </div>

          <div className="grid-rows-3 lg:grid flex flex-col gap-[0.8rem] min-w-fit max-h-lvh">
            <IconContainer
              Icon={BsPaperclip}
              Text={"Coordinator Application Package"}
              clickTo={
                "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring%2FSpring%20Hiring%20Package%20%28Coordinators%29%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring&ga=1"
              }
            ></IconContainer>
            <IconContainer
              Icon={BsPaperclip}
              Text={"Consultant Application Package"}
              clickTo={
                "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring%2FSpring%20Hiring%20Package%20%28consulting%29%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring&ga=1"
              }
            ></IconContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
