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
              Header="Our Values"
              Body="We aim to create a platform for students of all perspectives to experience real-world consulting."
              Image={About2}
            ></ImageContainer>
            <ImageContainer
              Header="Our Values"
              Body="We aim to create a platform for students of all perspectives to experience real-world consulting."
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
