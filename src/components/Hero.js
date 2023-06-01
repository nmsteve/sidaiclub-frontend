import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Hero = () => {
  return (

    <div className="relative">

      <div className="flex flex-col sm:flex-row items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3" role="alert">
        <div className="sm:mr-2 sm:mb-0 mb-2">
          <FontAwesomeIcon class="fill-current w-20 h-30 sm:w-10 sm:h-15" icon={icon({ name: "triangle-exclamation", style: "" })} />
        </div>
        <div>
          <p>We are currently working on this website and anticipate to be ready by June 10. If you have any questions, please feel free to contact us via email at entito@sidaiclub.com. Thank you for your patience as we work diligently to ensure everything is in order.</p>
        </div>
      </div>


      <img
        className="w-screen absolute z-0 opacity-60"
        src={"https://res.cloudinary.com/dk8epvq9b/image/upload/v1683651522/earth1_qqvttg.webp"}
        alt="earth1"
      />

      <img
        className="hidden lg:block absolute z-0 left-10 top-20 "
        src={"/images/Rectangle_5.svg"}
        alt="Rectangle_5"
      />
      <img
        className="hidden lg:block absolute z-0 right-20 top-24 "
        src={"/images/Rectangle_7.svg"}
        alt="Rectangle_7"
      />
      <img
        className="hidden lg:block absolute z-8 right-36 bottom-10 "
        src={"/images/Rectangle_8.svg"}
        alt="Rectangle_8"
      />
      <img
        className="relative w-screen z-2"

        src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1683627835/girl1_kjfvou.webp"
        srcSet="https://res.cloudinary.com/dk8epvq9b/image/upload/w_320/v1683627835/girl1_kjfvou.webp 320w,
             https://res.cloudinary.com/dk8epvq9b/image/upload/w_480/v1683627835/girl1_kjfvou.webp 480w,
             https://res.cloudinary.com/dk8epvq9b/image/upload/w_800/v1683627835/girl1_kjfvou.webp 800w"
        sizes="(max-width: 320px) 280px,(max-width: 480px) 440px,800px"
        alt="Girl"

      />
      <div className="absolute bottom-0 w-full h-full ">
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-transparent to-[#2A215F]"></div>
        <img
          className="absolute inset-0 -bottom-11 w-full h-full box-border block"
          src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1683721385/animated_vwh8dt.svg"
          alt=""/>
      </div>
    </div>
  );
};

export default Hero;
