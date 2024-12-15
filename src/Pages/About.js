import React from "react";

// Componenet
import Title from "../Components/Title";
import ImageContainer from "../Components/ImageContainer";

// Images
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";

function About() {
  return (
    <div className=" w-[70%] max-h-100 m-auto flex flex-col mt-[5%] gap-[10rem]">
      <Title
        Header="Who are we?"
        Body="Learn about our principles and the Axis Legacy. Discover more about our values, mission and vision for the company."
      ></Title>

      <section>
        <div className="">
          <div className=" flex flex-row gap-[1rem]">
            <ImageContainer
              Header="Our Values"
              Body="We aim to create a platform for students of all perspectives to experience real-world consulting."
              Image={About1}
            ></ImageContainer>
            <ImageContainer
              Header="Our Mission"
              Body="To support undergraduate students understand and prepare for careers in consulting fields through experiential learning opportunities.together emerging leaders to help our clients build their capabilities."
              Image={About2}
            ></ImageContainer>
            <ImageContainer
              Header="Our Vision"
              Body="Empowering undergraduate students to excel in consulting careers through hands-on learning and real-world client engagements."
              Image={About3}
            ></ImageContainer>
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
