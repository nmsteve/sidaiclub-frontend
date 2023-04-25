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
        <h1 className="text-[#2A215F] text-center pt-6 md:pt-32 font-extrabold text-md md:text-5xl">
          Join the Sidai Club and
        </h1>
        <h1 className="text-[#2A215F] text-center font-extrabold text-md md:text-5xl">
          Make a Difference
        </h1>
        <p className="text-black lg:leading-loose text-center md:mt-6 lg:w-2/5 text-xs mx-2 md:text-xl md:mx-auto">
          Owning one of these exclusive NFTs is not only a chance to add a
          unique piece of art to your collection but also an opportunity to make
          a difference in someone's life. With every purchase, you become a part
          of Sidai Club, an exclusive membership that offers access to your 4k x
          4k file, airdrops, feature NFTs at a discounted price, and 1000 ERC20
          Sidai Tokens once complete.
        </p>
        <p className="text-sm md:text-xl md:mt-16 text-center text-[#DC7171]">
          Meet our Amazing Community
        </p>
        <div className="flex flex-row gap-2 md:gap-6 md:mt-4 items-center justify-center">
          <a href="/">
            <FaDiscord className="text-black text-sm md:text-2xl cursor-pointer hover:text-[#2A215F]" />
          </a>
          <a href="/">
            <FaTwitter className="text-black text-sm md:text-2xl cursor-pointer hover:text-[#2A215F]" />
          </a>
          <a href="/">
            <FaInstagram className="text-black text-sm md:text-2xl cursor-pointer hover:text-[#2A215F]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
