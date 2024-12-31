import React, { useState, useEffect } from "react";

// Componenet
import Title from "../Components/Title";
import FullImageContainer from "../Components/FullImageContainer";
import PersonCard from "../Components/PersonCard";
import TeamCard from "../Components/TeamCard";

// Images
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";

//Team Images
import Chase from "../assets/images/Team/Chase.png";
import Sandra from "../assets/images/Team/Sandra.png";
import Bryan from "../assets/images/Team/Bryan.png";
import Caleb from "../assets/images/Team/Caleb.png";
import Josie from "../assets/images/Team/Josie.png";
import Mel from "../assets/images/Team/Mel.png";
import Shriya from "../assets/images/Team/Shriya.png";
import Colin from "../assets/images/Team/Colin.png";
import Alex from "../assets/images/Team/Alex.png";
import Willis from "../assets/images/Team/Willis.png";
import Eva from "../assets/images/Team/Eva.png";
import Sabrina from "../assets/images/Team/Sabrina.png";
import Gleanne from "../assets/images/Team/Gleanne.png";
import Acceleration from "../assets/images/Team/Acceleration.png";
import Kaia from "../assets/images/Team/Kaia.png";
import Clayton from "../assets/images/Team/Clayton.png";
import Joseph from "../assets/images/Team/Joseph.png";
import Melissa from "../assets/images/Team/Melissa.png";
import Camille from "../assets/images/Team/Camille.png";
import Andrew from "../assets/images/Team/Andrew.png";
import Queenie from "../assets/images/Team/Queenie.png";
import Ryan from "../assets/images/Team/Ryan.png";
import Sean from "../assets/images/Team/Sean.png";
import SabrinaWang from "../assets/images/Team/SabrinaWang.png";
import Momentum from "../assets/images/Team/Momentum.png";
import Velocity from "../assets/images/Team/Velocity.png";
import Arjan from "../assets/images/Team/Arjan.png";
import Olivia from "../assets/images/Team/Olivia.png";
import Nathan from "../assets/images/Team/Nathan.png";
import Sofia from "../assets/images/Team/Sofia.png";
import Kinetic from "../assets/images/Team/Kinetic.png";
import EvaChan from "../assets/images/Team/EvaChan.png";
import Tan from "../assets/images/Team/Tan.png";
import Keya from "../assets/images/Team/Keya.png";
import Sam from "../assets/images/Team/Sam.png";
import Sonakshi from "../assets/images/Team/Sonakshi.png";
import Expedition from "../assets/images/Team/Expedition.png";
import Kirsten from "../assets/images/Team/Kirsten.png";
import Ezrah from "../assets/images/Team/Ezrah.png";
import Holly from "../assets/images/Team/Holly.png";
import Kylie from "../assets/images/Team/Kylie.png";

function About() {
  const [view, setView] = useState(0);

  useEffect(() => {
    if (view < 0) {
      setView(0);
    }
  }, [view]);
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

      <section>
        <div className="border-2 border-red-400 flex flex-col lg:flex-row  ">
          <PersonCard
            Name="Chase Landa"
            Position="Managing Direction"
            img={Chase}
          ></PersonCard>
          <PersonCard
            Name="Sandra Chen"
            Position="Managing Direction"
            img={Sandra}
          ></PersonCard>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Executive Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <PersonCard
                Name="Colin Jeon"
                Position="Director of Strategy"
                img={Colin}
              ></PersonCard>
              <PersonCard
                Name="Wimelia Wong"
                Position="Director of External"
                img={Mel}
              ></PersonCard>
              <PersonCard
                Name="Caleb Wu"
                Position="Director of Design"
                img={Caleb}
              ></PersonCard>
              <PersonCard
                Name="Josie Trinh"
                Position="Director of Marketing"
                img={Josie}
              ></PersonCard>
              <PersonCard
                Name="Bryan Chan"
                Position="Director of Finance"
                img={Bryan}
              ></PersonCard>
              <PersonCard
                Name="Shriya"
                Position="Director of Events"
                img={Shriya}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Leads</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <PersonCard
                Name="Alex Lee"
                Position="Team Lead"
                img={Alex}
              ></PersonCard>
              <PersonCard
                Name="Willis Leung"
                Position="Team Lead"
                img={Willis}
              ></PersonCard>
              <PersonCard
                Name="Eva Yeung"
                Position="Team Lead"
                img={Eva}
              ></PersonCard>
              <PersonCard
                Name="Sabrina Chang"
                Position="Team Lead"
                img={Sabrina}
              ></PersonCard>
              <PersonCard
                Name="Gleanne Abella"
                Position="Team Lead"
                img={Gleanne}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Acceleration</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard img={Acceleration} Name="Team Acceleration"></TeamCard>
              <PersonCard
                Name="Gleanne"
                Position="Team Lead"
                img={Gleanne}
              ></PersonCard>
              <PersonCard
                Name="Kaia Do"
                Position="Consultant"
                img={Kaia}
              ></PersonCard>
              <PersonCard
                Name="Clayton Campbell"
                Position="Consultant"
                img={Clayton}
              ></PersonCard>
              <PersonCard
                Name="Joseph Lu"
                Position="Consultant"
                img={Joseph}
              ></PersonCard>
              <PersonCard
                Name="Melissa Taghdiry"
                Position="Consultant"
                img={Melissa}
              ></PersonCard>
              <PersonCard
                Name="Camille Sanchez"
                Position="Consultant"
                img={Camille}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Momentum</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard img={Momentum} Name="Team Momentum"></TeamCard>
              <PersonCard
                Name="Willis Leung"
                Position="Team Lead"
                img={Willis}
              ></PersonCard>
              <PersonCard
                Name="Andrew Novak"
                Position="Consultant"
                img={Andrew}
              ></PersonCard>
              <PersonCard
                Name="Queenie Chu"
                Position="Consultant"
                img={Queenie}
              ></PersonCard>
              <PersonCard
                Name="Ryan Thaulad"
                Position="Consultant"
                img={Ryan}
              ></PersonCard>
              <PersonCard
                Name="Sean Hendarto"
                Position="Consultant"
                img={Sean}
              ></PersonCard>
              <PersonCard
                Name="Sabrina Wang"
                Position="Consultant"
                img={SabrinaWang}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Velocity</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard img={Velocity} Name="Team Velocity"></TeamCard>
              <PersonCard
                Name="Eva Yeung"
                Position="Team Lead"
                img={Eva}
              ></PersonCard>
              <PersonCard
                Name="Arjan Bolina"
                Position="Consultant"
                img={Arjan}
              ></PersonCard>
              <PersonCard
                Name="Olivia Cheung"
                Position="Consultant"
                img={Olivia}
              ></PersonCard>
              <PersonCard
                Name="Nathan Chu"
                Position="Consultant"
                img={Nathan}
              ></PersonCard>
              <PersonCard
                Name="Sofia Li"
                Position="Consultant"
                img={Sofia}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Kinetic</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard img={Kinetic} Name="Team Kinetic"></TeamCard>
              <PersonCard
                Name="Alex Lee"
                Position="Team Lead"
                img={Alex}
              ></PersonCard>
              <PersonCard
                Name="Eva Chan"
                Position="Senior Consultant"
                img={EvaChan}
              ></PersonCard>
              <PersonCard
                Name="Tan Vu"
                Position="Consultant"
                img={Tan}
              ></PersonCard>
              <PersonCard
                Name="Keya Aggarwal"
                Position="Consultant"
                img={Keya}
              ></PersonCard>
              <PersonCard
                Name="Sam Mcallen"
                Position="Consultant"
                img={Sam}
              ></PersonCard>
              <PersonCard
                Name="Sonakshi Rao"
                Position="Consultant"
                img={Sonakshi}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Team Expedition</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}
          {view}
          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex flex-col lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard img={Expedition} Name="Team Expedition"></TeamCard>
              <PersonCard
                Name="Sabrina Chang"
                Position="Team Lead"
                img={Sabrina}
              ></PersonCard>
              <PersonCard
                Name="Kirsten Wong"
                Position="Consultant"
                img={Kirsten}
              ></PersonCard>
              <PersonCard
                Name="Ezrah Glanville"
                Position="Consultant"
                img={Ezrah}
              ></PersonCard>
              <PersonCard
                Name="Holly Lam"
                Position="Consultant"
                img={Holly}
              ></PersonCard>
              <PersonCard
                Name="Kylie Seto"
                Position="Consultant"
                img={Kylie}
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
