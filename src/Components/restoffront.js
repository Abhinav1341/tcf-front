import React from "react";
import SecOneL from "./sectionone-left";
import SecTwoR from "./sectiontwo-right";

const Moreinf = () => {
  return (
    <div
      className="h-[300rem] w-full z-20 relative top-[46rem]"
      style={{ background: "linear-gradient(180deg,#110012 0%, #813176 100%" }}
    >
      <div className="section-one flex justify-between mx-20 pt-28">
        <SecOneL />
        <div className="w-2/5 bg-slate-300 h-[36rem] absolute top-28 right-20"></div>
      </div>

      <div className="section-two flex relative justify-between mx-20 mt-21">
        <div className="w-5/12 bg-slate-300 h-[36rem] absolute top-[14rem] left-0"></div>
        <div className="w-1/2 absolute right-5 top-[15rem]">
          <SecTwoR
            title="Exciting Fest Highlights Await"
            info="Join us for a thrilling celebration of Technology and culture at Corona and
Melange, the Annuual fest of NIT Patna. Experience a wide range of events,
workshops, performances, and more."
          />
          <SecTwoR
            title="Unforgettable Experiences Await"
            info="Get ready to be amazed by the incredible lineup of activities at Corona and
Melange. From technical competitions to art exhibitions, there’s something for
everyone to enjoy."
          />
          <SecTwoR
            title="Engaging Workshops and Talks"
            info="Expand your knowledge and skills through interactive workshops and insightful
talks by industry experts. Don’t miss this opportunity to learn from the best."
          />
        </div>
      </div>
    </div>
  );
};

export default Moreinf;
