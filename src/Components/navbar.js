import React from "react";
import Nitp from "./Icons/NITP Logo.png";

const Navbar = () => {
  return (
    <div className="flex mt-8 mx-20 font-inter relative">
      <div className="flex-grow flex items-center">
        <ul className="flex flex-row text-slate-100 text-center mt-5">
          <li className="px-8 text-xl w-40">About Us</li>
          <li className="px-3 text-xl w-32">Events</li>
          <li className="px-3 text-xl w-32">Sponsors</li>
        </ul>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <img src={Nitp} alt="Nitp Logo" className="h-16" />
      </div>
    </div>
  );
};

export default Navbar;
