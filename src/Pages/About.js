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
import Strat from "../assets/images/Team/Strat.png";
import Marissa from "../assets/images/Team/Marissa.png";
import Sandy from "../assets/images/Team/Sandy.png";
import Lucy from "../assets/images/Team/Lucy.png";
import Carol from "../assets/images/Team/Carol.png";
import Internal from "../assets/images/Team/Internal.png";
import Jessica from "../assets/images/Team/Jessica.png";
import Nico from "../assets/images/Team/Nico.png";
import Trisha from "../assets/images/Team/Trisha.png";
import External from "../assets/images/Team/External.png";
import Brian from "../assets/images/Team/Brian.png";
import JessicaTandibrata from "../assets/images/Team/JessicaTandibrata.png";
import Rishaan from "../assets/images/Team/Rishaan.png";
import Events from "../assets/images/Team/Events.png";
import Will from "../assets/images/Team/Will.png";
import Tiffany from "../assets/images/Team/Tiffany.png";
import Ananya from "../assets/images/Team/Ananya.png";
import Puneet from "../assets/images/Team/Puneet.png";
import Finance from "../assets/images/Team/Finance.png";
import Sasha from "../assets/images/Team/Sasha.png";
import Marketing from "../assets/images/Team/Marketing.png";
import Clarisse from "../assets/images/Team/Clarisse.png";
import JosephLee from "../assets/images/Team/JosephLee.png";
import Zariyan from "../assets/images/Team/Zariyan.png";
import Julia from "../assets/images/Team/Julia.png";
import Archita from "../assets/images/Team/Archita.png";
import MD from "../assets/images/Team/MD.png";

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
        Header="Who are we"
        Body="Discover more about our values, mission and vision for Axis Consulting. Meet the current team and some of our 212 alumni since 2012."
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

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Managing Directors</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={MD}
                Name="Managing Directors"
              ></TeamCard>
              <PersonCard
                Name="Chase Landa"
                Position="Managing Director"
                img={Chase}
                clickTo="https://www.linkedin.com/in/chaselanda/"
              ></PersonCard>
              <PersonCard
                Name="Sandra Chen"
                Position="Managing Director"
                img={Sandra}
                clickTo="https://www.linkedin.com/in/sandrayjchen/"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Executive Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <PersonCard
                Name="Colin Jeon"
                Position="Director of Strategy"
                img={Colin}
                clickTo="http://www.linkedin.com/in/colinjeonn"
              ></PersonCard>
              <PersonCard
                Name="Wimelia Wong"
                Position="Director of External"
                img={Mel}
                clickTo="https://www.linkedin.com/in/wimelia-wong/"
              ></PersonCard>
              <PersonCard
                Name="Caleb Wu"
                Position="Director of Design"
                img={Caleb}
                clickTo="https://www.linkedin.com/in/caleb-wu1/"
              ></PersonCard>
              <PersonCard
                Name="Josie Trinh"
                Position="Director of Marketing"
                img={Josie}
                clickTo="https://www.linkedin.com/in/nghi-trinh-josie"
              ></PersonCard>
              <PersonCard
                Name="Bryan Chan"
                Position="Director of Finance"
                img={Bryan}
                clickTo="https://www.linkedin.com/in/bryanchanlw/"
              ></PersonCard>
              <PersonCard
                Name="Shriya Narayan"
                Position="Director of Events"
                clickTo="https://www.linkedin.com/in/shriya-narayan"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <PersonCard
                Name="Alex Lee"
                Position="Team Lead"
                img={Alex}
                clickTo="https://www.linkedin.com/in/alexseungjunlee/"
              ></PersonCard>
              <PersonCard
                Name="Willis Leung"
                Position="Team Lead"
                img={Willis}
                clickTo="https://www.linkedin.com/in/willis-leung/"
              ></PersonCard>
              <PersonCard
                Name="Eva Yeung"
                Position="Team Lead"
                img={Eva}
                clickTo="https://www.linkedin.com/in/evayueng/"
              ></PersonCard>
              <PersonCard
                Name="Sabrina Chang"
                Position="Team Lead"
                img={Sabrina}
                clickTo="https://www.linkedin.com/in/sabrinachang-/"
              ></PersonCard>
              <PersonCard
                Name="Gleanne Abella"
                Position="Team Lead"
                img={Gleanne}
                clickTo="https://www.linkedin.com/in/gleanne-abella/"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Acceleration}
                Name="Team Acceleration"
              ></TeamCard>
              <PersonCard
                Name="Gleanne"
                Position="Team Lead"
                img={Gleanne}
                clickTo="https://www.linkedin.com/in/gleanne-abella/"
              ></PersonCard>
              <PersonCard
                Name="Kaia Do"
                Position="Consultant"
                img={Kaia}
                clickTo=" www.linkedin.com/in/kaiado "
              ></PersonCard>
              <PersonCard
                Name="Clayton Campbell"
                Position="Consultant"
                img={Clayton}
                clickTo="https://www.linkedin.com/in/claytonkwcampbell/"
              ></PersonCard>
              <PersonCard
                Name="Joseph Lu"
                Position="Consultant"
                img={Joseph}
                clickTo="https://www.linkedin.com/in/j0sephlu/"
              ></PersonCard>
              <PersonCard
                Name="Melissa Taghdiry"
                Position="Consultant"
                img={Melissa}
                clickTo="https://www.linkedin.com/in/melissa-t-81b376296/"
              ></PersonCard>
              <PersonCard
                Name="Camille Sanchez"
                Position="Consultant"
                img={Camille}
                clickT="https://www.linkedin.com/in/camillevpsanchez/"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Momentum}
                Name="Team Momentum"
              ></TeamCard>
              <PersonCard
                Name="Willis Leung"
                Position="Team Lead"
                img={Willis}
                clickTo="https://www.linkedin.com/in/willis-leung/"
              ></PersonCard>
              <PersonCard
                Name="Andrew Novak"
                Position="Consultant"
                img={Andrew}
                clickTo="www.linkedin.com/in/andrew-novak1-b7bb00250"
              ></PersonCard>
              <PersonCard
                Name="Queenie Chu"
                Position="Consultant"
                img={Queenie}
                clickTo="www.linkedin.com/in/queenie-c-680b1a263"
              ></PersonCard>
              <PersonCard
                Name="Ryan Thaulad"
                Position="Consultant"
                img={Ryan}
                clickTo="www.linkedin.com/in/ryanthaulad"
              ></PersonCard>
              <PersonCard
                Name="Sean Hendarto"
                Position="Consultant"
                img={Sean}
                clickTo="https://www.linkedin.com/in/sean-hendarto-7067401b2/"
              ></PersonCard>
              <PersonCard
                Name="Sabrina Wang"
                Position="Consultant"
                img={SabrinaWang}
                clickTo="https://www.linkedin.com/in/sabrinawang9/"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Velocity}
                Name="Team Velocity"
              ></TeamCard>
              <PersonCard
                Name="Eva Yeung"
                Position="Team Lead"
                img={Eva}
                clickTo=" https://www.linkedin.com/in/evayueng/"
              ></PersonCard>
              <PersonCard
                Name="Arjan Bolina"
                Position="Consultant"
                img={Arjan}
                clickTo="https://ca.linkedin.com/in/arjan-bolina-4b3645246"
              ></PersonCard>
              <PersonCard
                Name="Olivia Cheung"
                Position="Consultant"
                img={Olivia}
                clickTo="https://www.linkedin.com/in/olivia-cheng-4a18a02a7/"
              ></PersonCard>
              <PersonCard
                Name="Nathan Chu"
                Position="Consultant"
                img={Nathan}
                clickTo="https://www.linkedin.com/in/nathan-chu-404a6b1b0/"
              ></PersonCard>
              <PersonCard
                Name="Sofia Li"
                Position="Consultant"
                img={Sofia}
                clickTo="https://www.linkedin.com/in/lingchangli/"
              ></PersonCard>
              <PersonCard
                Name="Archita Srivastava"
                Position="Consultant"
                img={Archita}
                clickTo="http://linkedin.com/in/archita7"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Kinetic}
                Name="Team Kinetic"
              ></TeamCard>
              <PersonCard
                Name="Alex Lee"
                Position="Team Lead"
                img={Alex}
                clickTo="https://www.linkedin.com/in/alexseungjunlee/"
              ></PersonCard>
              <PersonCard
                Name="Eva Chan"
                Position="Senior Consultant"
                img={EvaChan}
                clickTo="https://www.linkedin.com/in/eva-chan28/"
              ></PersonCard>
              <PersonCard
                Name="Tan Vu"
                Position="Consultant"
                img={Tan}
                clickTo="https://www.linkedin.com/in/tan-vu/"
              ></PersonCard>
              <PersonCard
                Name="Keya Aggarwal"
                Position="Consultant"
                img={Keya}
                clickTo="https://www.linkedin.com/in/keyaaggarwal4/"
              ></PersonCard>
              <PersonCard
                Name="Sam Mcallen"
                Position="Consultant"
                img={Sam}
                clickTo="www.linkedin.com/in/samuel-mccallen"
              ></PersonCard>
              <PersonCard
                Name="Sonakshi Rao"
                Position="Consultant"
                img={Sonakshi}
                clickTo="linkedin.com/in/sonakshi-rao"
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

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Expedition}
                Name="Team Expedition"
              ></TeamCard>
              <PersonCard
                Name="Sabrina Chang"
                Position="Team Lead"
                img={Sabrina}
                clickTo="https://www.linkedin.com/in/sabrinachang-/"
              ></PersonCard>
              <PersonCard
                Name="Kirsten Wong"
                Position="Consultant"
                img={Kirsten}
                clickTo=""
                //NO LINKEDIN//
              ></PersonCard>
              <PersonCard
                Name="Ezrah Glanville"
                Position="Consultant"
                img={Ezrah}
                clickTo="https://www.linkedin.com/in/ezrahglanville/"
              ></PersonCard>
              <PersonCard
                Name="Holly Lam"
                Position="Consultant"
                img={Holly}
                clickTo="http://linkedin.com/in/hollylam2126design"
              ></PersonCard>
              <PersonCard
                Name="Kylie Seto"
                Position="Consultant"
                img={Kylie}
                clickTo="www.linkedin.com/in/kylie-seto"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Strategy Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Strat}
                Name="Strategy Team"
              ></TeamCard>
              <PersonCard
                Name="Colin Jeon"
                Position="Director of Strategy"
                img={Colin}
                clickTo="http://www.linkedin.com/in/colinjeonn"
              ></PersonCard>
              <PersonCard
                Name="Marissa Yu"
                Position="Stragey Analyst"
                img={Marissa}
                clickTo="https://www.linkedin.com/in/marissasyu"
              ></PersonCard>
              <PersonCard
                Name="Sandy Lin"
                Position="Stragey Analyst"
                img={Sandy}
                clickTo="https://www.linkedin.com/in/sandy-lin-075350231/ "
              ></PersonCard>
              <PersonCard
                Name="Lucy Lui"
                Position="Stragey Analyst"
                img={Lucy}
                clickTo="https://www.linkedin.com/in/lucyliuu/"
              ></PersonCard>
              <PersonCard
                Name="Carol Wang"
                Position="Stragey Analyst"
                img={Carol}
                clickTo="www.linkedin.com/in/wangmcarol"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Internal Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Internal}
                Name="Internal Team"
              ></TeamCard>
              <PersonCard
                Name="Jessica Xie"
                Position="Director of Internal"
                img={Jessica}
                clickTo="https://www.linkedin.com/in/jessica-xie-/"
              ></PersonCard>
              <PersonCard
                Name="Nico Tan"
                Position="Internal Coordinator"
                img={Nico}
                clickTo="https://www.linkedin.com/in/nico-tan-3b04a7260/"
              ></PersonCard>
              <PersonCard
                Name="Trisha Agnihotri"
                Position="Internal Coordinator"
                img={Trisha}
                clickTo="www.linkedin.com/in/trisha-agnihotri"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>External Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={External}
                Name="External Team"
              ></TeamCard>
              <PersonCard
                Name="Wimelia Wong"
                Position="Director of External"
                img={Mel}
                clickTo=" https://www.linkedin.com/in/wimelia-wong/"
              ></PersonCard>
              <PersonCard
                Name="Brian Wang"
                Position="External Coordinator"
                img={Brian}
                clickTo="www.linkedin.com/in/brian-c-wang"
              ></PersonCard>
              <PersonCard
                Name="Jessica Tandibrata"
                Position="External Coordinator"
                img={JessicaTandibrata}
                clickTo="www.linkedin.com/in/jessicatandibrata"
              ></PersonCard>
              <PersonCard
                Name="Rishaan Parmar"
                Position="External Coordinator"
                img={Rishaan}
                clickTo="www.linkedin.com/in/rishaan-parmar"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Events Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Events}
                Name="Events Team"
              ></TeamCard>
              <PersonCard
                Name="Shriya Narayan"
                Position="Director of Events"
                img={Shriya}
                clickTo="www.linkedin.com/in/jessicatandibrata"
              ></PersonCard>
              <PersonCard
                Name="Will De Almeida"
                Position="Events Coordinator"
                img={Will}
                clickTo="https://www.linkedin.com/in/willdalmeida/"
              ></PersonCard>
              <PersonCard
                Name="Tiffany Chan"
                Position="Events Coordinator"
                img={Tiffany}
                clickTo="https://www.linkedin.com/in/tiffany-chan-84735b1bb/"
              ></PersonCard>
              <PersonCard
                Name="Ananya Singh"
                Position="Events Coordinator"
                img={Ananya}
                clickTo="https://www.linkedin.com/in/ananya-singh21/"
              ></PersonCard>
              <PersonCard
                Name="Puneet Dhaliwal"
                Position="Events Coordinator"
                img={Puneet}
                clickTo="www.linkedin.com/in/puneet-dhaliwal-"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Finance Team</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Finance}
                Name="Finance Team"
              ></TeamCard>
              <PersonCard
                Name="Bryan Chan"
                Position="Director of Finance"
                img={Bryan}
                clickTo="https://www.linkedin.com/in/bryanchanlw/"
              ></PersonCard>
              <PersonCard
                Name="Sasha Baker"
                Position="Finance Coordinator"
                img={Sasha}
                clickTo="https://www.linkedin.com/in/sashabaker/"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[3rem]">
        <div className="w-full  flex flex-row justify-center ">
          <h2>Marketing & Design</h2>
        </div>
        <div className="w-full flex flex-row">
          {/* <button onClick={() => setView(view - 30)}> &lt; </button>
          <button onClick={() => setView(view + 30)}> &gt; </button> */}

          <div className="overflow-hidden overscroll-x-auto overflow-x-auto w-[100%]">
            <div
              className={`flex lg:flex-row gap-[1rem] w-[fit] relative transition-all
              `}
              style={{ transform: `translateX(${view}%)` }}
            >
              <TeamCard
                Position="2024-2025"
                img={Marketing}
                Name="Marketing & Design Team"
              ></TeamCard>
              <PersonCard
                Name="Caleb Wu"
                Position="Director of Design"
                img={Caleb}
                clickTo="https://www.linkedin.com/in/caleb-wu1/"
              ></PersonCard>
              <PersonCard
                Name="Josie Trinh"
                Position="Director of Marketing"
                img={Josie}
                clickTo="https://www.linkedin.com/in/nghi-trinh-josie"
              ></PersonCard>
              <PersonCard
                Name="Clarisse Tan"
                Position="Design Coordinator"
                img={Clarisse}
                // NO LINKED
              ></PersonCard>
              <PersonCard
                Name="Joseph Lee"
                Position="Design Coordinator"
                img={JosephLee}
                clickTo="https://www.linkedin.com/in/joseph-lee-jl/"
              ></PersonCard>
              <PersonCard
                Name="Zariyan Mansimoor"
                Position="Design Strategy Coordinator"
                img={Zariyan}
                clickTo="https://www.linkedin.com/in/zariyanmansoor/"
              ></PersonCard>
              <PersonCard
                Name="Julia Robledano"
                Position="Visual Media Coordinator"
                img={Julia}
                clickTo="www.linkedin.com/in/julia-robledano-20877924b"
              ></PersonCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
