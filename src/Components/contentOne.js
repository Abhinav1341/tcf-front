import React from "react";
import RightImg from "./Icons/right-side-image.png";

const Introduction = () => {
  return (
    <div className="relative text-slate-50">
      <div className="mx-20 mt-[8rem]">
        <div className="text-[4rem] font-inter font-bold leading-tight">
          Experience the Fusion
          <br></br>
          of Technology and<br></br>
          Culture<br></br>
        </div>
        <div className="text-xl font-inter font-medium py-6">
          Join us for an unforgettable celebration of innovation and creativity.
        </div>
        <div>
          <button className="text-base font-inter font-semibold border border-slate-50 p-3 px-4">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute right-0 -top-40">
        <img src={RightImg} alt="lady" className="z-10 h-[42rem]" />
      </div>
    </div>
  );
};

export default Introduction;
