import React from "react";

// Componenet
import Title from "../Components/Title";
import FullImageContainer from "../Components/FullImageContainer";

// Images
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";

function About() {
  return (
    <div className=" w-[85%] lg:w-[70%] lg:max-h-100 m-auto flex flex-col mt-[5%] gap-[5rem] lg:gap-[10rem]">
      <Title
        Header="Who are we?"
        Body="Learn about our principles and the Axis Legacy. Discover more about our values, mission and vision for the company."
      ></Title>

      <section>
        <div className="">
          <div className=" flex flex-col lg:flex-row gap-[1rem]">
            <FullImageContainer
              Header="Our Values"
              Body="We aim to create a platform for students of all perspectives to experience real-world consulting."
              Image={About1}
            ></FullImageContainer>
            <FullImageContainer
              Header="Our Mission"
              Body="To support undergraduate students understand and prepare for careers in consulting fields through experiential learning opportunities.together emerging leaders to help our clients build their capabilities."
              Image={About2}
            ></FullImageContainer>
            <FullImageContainer
              Header="Our Vision"
              Body="Empowering undergraduate students to excel in consulting careers through hands-on learning and real-world client engagements."
              Image={About3}
            ></FullImageContainer>
          </div>
        </div>
      </section>

      <section className="mx-auto">
        <button> Meet the team </button>
      </section>
    </div>
  );
}

export default About;
