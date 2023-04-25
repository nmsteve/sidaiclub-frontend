import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="relative">
      <img
        className="w-screen absolute z-0"
        src={"/images/sofia.svg"}
        alt="logo"
      />
      <div className="relative z-6 mx-auto  justify-center">
        <AiOutlineMail size={20} color="white" />
      </div>
    </div>
  );
};

export default Footer;
