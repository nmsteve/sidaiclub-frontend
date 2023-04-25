import React from "react";
// import {logo} from ""
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-row justify-between gap-4 p-2 items-center">
        <div className="w-2/5">
          <img src={"/images/Layer_1.svg"} alt="logo" />
        </div>
        <div className="grid grid-cols-2  md:gap-6 items-center px-2 md:mr-16">
          <div className="flex flex-row gap-2 md:gap-6">
            <a href="/">
              <FaDiscord className="text-white text-lg md:text-xl cursor-pointer hover:text-[#DC7171]" />
            </a>
            <a href="/">
              <FaTwitter className="text-white text-lg md:text-xl cursor-pointer hover:text-[#DC7171]" />
            </a>
            <a href="/">
              <FaInstagram className="text-white text-lg md:text-xl cursor-pointer hover:text-[#DC7171]" />
            </a>
          </div>
          <button className="border-[#DC7171] hover:bg-gray-300 border-[1px] p-2 rounded-sm">
            <p className="text-[#DC7171] text-center text-xs">BUY ON OPENSEA</p>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#3D20F0] h-2" />
    </div>
  );
};

export default Navbar;
