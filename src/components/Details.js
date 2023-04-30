import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

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
          Join the Sidai Club and
        </h1>
        <h1 className="text-[#2A215F] text-center font-extrabold sm:text-3xl  text-md lg:text-5xl">
          Make a Difference
        </h1>
        <p className="text-black mt-2 xl:leading-loose mx-3 lg:leading-relaxed sm:leading-8 lg:mt-4 text-center xl:mt-6 xl:w-2/5 lg:w-3/5 sm:w-4/5 text-xs lg:text-xl sm:text-base sm:mx-auto">
          Owning one of these exclusive NFTs is not only a chance to add a
          unique piece of art to your collection but also an opportunity to make
          a difference in someone's life. With every purchase, you become a part
          of Sidai Club, an exclusive membership that offers access to your 4k x
          4k file, airdrops, feature NFTs at a discounted price, and 1000 ERC20
          Sidai Tokens once complete.
        </p>
        <p className="text-xs lg:text-xl sm:text-base xl:mt-16 lg:mt-12 text-center text-[#DC7171]">
          Meet our Amazing Community
        </p>
        <div className="flex flex-row gap-2 xs:gap-12 sm:mt-4 items-center justify-center ">
          <a href="/">
            <FaDiscord className="text-black text-sm sm:text-xl  cursor-pointer hover:text-[#2A215F]" />
          </a>
          <a href="/">
            <FaTwitter className="text-black text-sm sm:text-xl cursor-pointer hover:text-[#2A215F]" />
          </a>
          <a href="/">
            <FaInstagram className="text-black text-sm sm:text-xl cursor-pointer hover:text-[#2A215F]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
