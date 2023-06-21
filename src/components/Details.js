import React from "react";
import {FaTwitter } from "react-icons/fa";

const Details = () => {
  return (
    <div className="relative">
      <img
        className="w-screen absolute z-0"
        src={"/images/Rectangle.svg"}
        alt="logo"
      />
      <div className=" relative z-4">
        <h1 className="text-[#2A215F] text-center pt-6 xl:pt-32 sm:text-3xl lg:pt-28 sm:pt-16 md:pt-16 font-extrabold text-md lg:text-5xl">
          Join the <span className="text-[#FBCCCC]">Sidai Club</span> and
        </h1>
        <h1 className="text-[#2A215F] text-center font-extrabold sm:text-3xl  text-md lg:text-5xl">
          Make a Difference
        </h1>
        <p className="text-black mt-2 xl:leading-loose mx-3 lg:leading-relaxed sm:leading-8 lg:mt-4 text-center xl:mt-6 xl:w-2/5 lg:w-3/5 sm:w-4/5 text-xs lg:text-xl sm:text-base sm:mx-auto">
          Owning one of these exclusive NFTs is not only a chance to add a
          unique piece of art to your collection but also comes with added advantages. With every purchase, you become a part
          of Sidai Club, an exclusive membership that offers access to your <span className="text-[#DC7171]">8K image file, airdrops, feature NFTs at a discounted price, and 1000 ERC20
            Sidai Tokens </span> once complete.
        </p>
        <p className="text-xs lg:text-xl sm:text-base xl:mt-16 lg:mt-12 text-center text-[#DC7171] mt-2 m">
          Meet our Amazing Community
        </p>
        <div className="flex flex-row gap-2 xs:gap-12 sm:mt-4 items-center justify-center mt-2 ">
          <a href="https://twitter.com/EntitoSidaiNFTs" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-black text-sm sm:text-xl cursor-pointer hover:text-[#2A215F] mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
