import React from "react";
import Title from "../Components/Title";
import ImageContent from "../Components/ImageContent";
import clientImage from "../assets/images/Clients.png";
import ourClients from "../assets/images/OurClients.png";
import ClientContent from "../Components/ClientContent";

/* Client Images*/
import CSRO from "../assets/images/CSRO.png";
import FinningCat from "../assets/images/FinningCat.png";
import BCCenter from "../assets/images/BCCenter.png";
import Inheret from "../assets/images/Inheret.png";

function Clients() {
  return (
    <div className=" lg:w-[70%] w-[85%] max-h-100 m-auto flex flex-col mt-[5%] gap-[5rem] lg:gap-[10rem]">
      <Title
        Header="Our Clients"
        Body="We have worked with a variety of clients from different industries. Here are some of the clients we have worked with."
      />
      <section className="flex flex-col gap-[5rem] lg:gap-[3rem]">
        <ClientContent
          Title="CSRO"
          Body="Axis Consulting was professional and cohesive - You would think they were experienced consultants. We were very impressed!"
          Image={CSRO}
          AltText="CSRO"
        />
        <ClientContent
          Title="Finning Cat"
          Body="[Axis Consulting] brought new ideas that allowed us to narrow in on the project goals to target actionable results."
          Image={FinningCat}
          AltText="CSRO"
        />
        <ClientContent
          Title="Inherent Diamonds"
          Body="[Axis Consulting] delivered a comprehensive document that align with our overall strategic plan and will be implemented over the long term."
          Image={Inheret}
          AltText="CSRO"
        />
        <ClientContent
          Title="BC Centre for Ability"
          Body="[Axis Consulting] went above and beyond with their research and we were blown away with the final product. "
          Image={BCCenter}
          AltText="CSRO"
        />
      </section>

      <section className="e text-center gap-[2rem] w-fit h-fit flex flex-col ">
        <h3>Our Clients We've worked with</h3>
        <img
          src={ourClients}
          className="w-full h-full object-cover"
          alt="Our Clients"
        />
      </section>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <ImageContent
          Header="Want to work with us?"
          Body="Let's get in touch"
          ButtonText="Contact Us"
          execute={() => {
            const email = "example@example.com";
            navigator.clipboard.writeText(email).then(() => {
              alert("Email copied to clipboard!");
            });
          }}
          Image={clientImage}
          AltText="Organization"
        />
      </div>
    </div>
  );
}

export default Clients;
