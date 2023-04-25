import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="w-screen absolute z-0 opacity-60"
        src={"/images/earth1.png"}
        alt="logo"
      />
      <img
        className="relative w-screen z-2"
        src={"/images/girl.svg"}
        alt="logo"
      />
    </div>
  );
};

export default Hero;
