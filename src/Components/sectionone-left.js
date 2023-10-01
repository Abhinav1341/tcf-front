import React from "react";
import Icon from "./Icons/cube-icon.png";
import Arrow from "./Icons/arrow.png";

const SecOneL = () => {
  return (
    <div className="text-white font-inter w-7/12  px-4">
      <p className="text-base mb-6">Experience</p>
      <p className="text-[3.2rem] font-bold">LOREM ISPEM</p>
      <p className="text-base my-10">Lorem Ipsem</p>
      <div className="flex justify-between my-5">
        <div>
          <img src={Icon} alt="symbol" />
          <p className="text-xl font-semibold py-2">Technical</p>
          <p className="w-3/4 text-lg">
            Experience the latest advancements in technology through workshops,
            competitions, and exhibitions.
          </p>
        </div>
        <div>
          <img src={Icon} alt="symbol" />
          <p className="text-xl font-semibold py-2">Cultural</p>
          <p className="w-3/4 text-lg">
            Immerse yourself in the vibrant cultural performances, art
            exhibitions, and music concerts.
          </p>
        </div>
      </div>
      <div className="flex mt-12">
        <button className="text-base font-inter font-semibold border border-slate-50 p-3 px-4">
          Learn More
        </button>
        <img src={Arrow} className="h-5 ml-20 mt-4" />
      </div>
    </div>
  );
};

export default SecOneL;
