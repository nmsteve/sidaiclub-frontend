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
        className=" absolute z-0 left-10 top-20 "
        src={"/images/Rectangle_5.svg"}
        alt="logo"
      />
      <img
        className="absolute z-0 right-20 top-24 "
        src={"/images/Rectangle_7.svg"}
        alt="logo"
      />
      <img
        className="absolute z-8 right-36 bottom-10 "
        src={"/images/Rectangle_8.svg"}
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
