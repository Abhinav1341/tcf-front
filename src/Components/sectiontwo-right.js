import React from "react";

const SecTwoR = (props) => {
  return (
    <div className="text-white mt-[2.2rem] pl-10">
      <p className="text-[2.2rem] font-inter font-semibold py-1">
        {props.title}
      </p>
      <p className="text-lg text-gray-200 font-sans font-thin">{props.info}</p>
    </div>
  );
};

export default SecTwoR;
