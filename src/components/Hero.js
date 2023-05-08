import React from "react";

const Hero = () => {
  return (

    <div className="relative">

      <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
        <p>We are currently working on this website and anticipate it will be ready by June 1st. If you have any questions, please feel free to contact us via email at entito@sidaiclub.com. Thank you for your patience as we work diligently to ensure everything is in order.</p>
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
