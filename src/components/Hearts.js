import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Hearts = () => {
  return (
    <div className="relative items-center md:mt-96">
      <div className="border m-auto mt-20 border-[#DC7171] rounded-md  w-4/5 ">
        <div className="-mt-12 md:-mt-40 items-center mb-6 rounded-full">
          <img
            className="mx-auto w-2/5 md:w-1/5  bg-[#2A215F] rounded-full object-scale-down overflow-visible"
            src={"/images/hearts.svg"}
            alt="logo"
          />

          <p className="text-white pb-4 text-center pt-6 md:pt-16 font-extrabold text-lg md:text-5xl">
            Philanthropy Meets Art
          </p>
          <p className="text-white leading-6 md:leading-loose text-center md:mt-6 md:w-4/5 text-xs mx-2 md:text-xl md:mx-auto">
            The most heartwarming part of the Entito Sidai Collection is that
            10% of the amount collected from this sale will be used to sponsor
            the education of a Maasai girl. This marginalized group struggles to
            get an education, and your purchase can contribute to changing
            someone's life. By owning a unique piece of art that celebrates
            diversity, culture, and beauty, you'll be empowering the girls of
            Maa with education and helping them achieve their dreams.
          </p>
          <div className="flex justify-center mt-2 md:mb-16 md:mt-8">
            <div className="mx-auto border-[#DC7171] border-[1px] rounded-sm">
              <p className="text-[#DC7171] p-2">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col z-10 left-0 right-0 mx-auto bottom-10 items-center justify-center">
        <AiOutlineMail size={20} color="white" />
        <p className="text-gray-300">collection@entitosidai.com</p>
      </div>
      <img className="w-screen" src={"/images/sofia.svg"} alt="logo" />
    </div>
  );
};

export default Hearts;
