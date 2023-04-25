import React from "react";
// import {logo} from ""
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between gap-4 p-2 items-center">
        <div className="w-2/5">
          <img src={"/images/Layer_1.svg"} alt="logo" />
        </div>
        <div className="grid grid-cols-2  md:gap-6 items-center px-2 md:mr-16">
          <div className="flex flex-row gap-2 md:gap-6">
            <FaDiscord className="text-white text-lg md:text-xl" />
            <FaTwitter className="text-white text-lg md:text-xl" />
            <FaInstagram className="text-white text-lg md:text-xl" />
          </div>
          <div className="border-[#DC7171] border-[1px] p-2 rounded-sm">
            <p className="text-[#DC7171] text-center text-xs">BUY ON OPENSEA</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#3D20F0] h-2" />
    </div>
  );
};

export default Navbar;
