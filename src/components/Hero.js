import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Hero = () => {
  return (

    <div className="relative">

      <div class="flex flex-col sm:flex-row items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3" role="alert">
        <div class="sm:mr-2 sm:mb-0 mb-2">
          <FontAwesomeIcon class="fill-current w-20 h-30 sm:w-10 sm:h-15" icon={icon({ name: "triangle-exclamation", style: "" })} />
        </div>
        <div>
          <p>We are currently working on this website and anticipate it will be ready by June 1st. If you have any questions, please feel free to contact us via email at entito@sidaiclub.com. Thank you for your patience as we work diligently to ensure everything is in order.</p>
        </div>
      </div>


      <img
        className="w-screen absolute z-0 opacity-60"
        src={"/images/earth1.png"}
        alt="logo"
      />

      <img
        className="hidden lg:block absolute z-0 left-10 top-20 "
        src={"/images/Rectangle_5.svg"}
        alt="logo"
      />
      <img
        className="hidden lg:block absolute z-0 right-20 top-24 "
        src={"/images/Rectangle_7.svg"}
        alt="logo"
      />
      <img
        className="hidden lg:block absolute z-8 right-36 bottom-10 "
        src={"/images/Rectangle_8.svg"}
        alt="logo"
      />
      <img
        className="relative w-screen z-2"
        src={"/images/girl.svg"}
        alt="logo"
      />
      <div className="absolute bottom-0 w-full h-full ">
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-transparent to-[#2A215F]"></div>
        <img
          className="absolute inset-0 -bottom-11 w-full h-full box-border block"
          src={"/images/animated.svg"}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Hero;
