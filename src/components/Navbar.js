import React from "react";

import { connectMetaMask,formatAddress} from '../connect/connectChain'

import { AiOutlineUser, } from 'react-icons/ai';


const Navbar = ({connectedAddress, setConnectedAddress}) => {
  
  return (
    <div className="w-screen">
      <div className="flex flex-row justify-between gap-4 p-2 items-center">
        <div className="w-2/5">
          <img src={"/images/Layer_1.svg"} alt="logo" />
        </div>
        <div className="grid grid-cols-2  md:gap-6 items-center px-2 md:mr-16 ">
          <div className="flex flex-row items-center gap-4 md:gap-6 sm:gap-3 mr-8">
            <a href="https://twitter.com/EntitoSidaiNFTs" target="_blank" rel="noopener noreferrer"
              className="flex items-center border-[#DC7171] hover:bg-gray-300 border-[1px] p-2 rounded-sm text-white text-center text-sm cursor-pointer">
              X (Twitter)
            </a>
            <button
              className="flex items-center border-[#DC7171] hover:bg-gray-300 border-[1px] p-2 rounded-sm text-white text-center text-sm cursor-pointer"
              onClick={() => {
                window.open("https://arbiscan.io/address/0xc91037E440ad3001726b0E701759eEBb6B6ef688", "_blank");
              }}
            >
              Contract
            </button>
          </div>


          
          {connectedAddress ? (
            <div className="relative inline-block">
              <div className="bg-gray-200 rounded-md p-2 flex items-center">
                <AiOutlineUser className="mr-2" />
                <p className="text-white text-sm">
                  {formatAddress(connectedAddress)}
                </p>
              </div>
              {/* <button
                className="absolute right-0 top-0 w-8 h-full flex items-center justify-center text-[#DC7171]"
                onClick={() => { handleDisconnect(setConnectedAddress)}}
              >
                <AiOutlineLogout />
              </button> */}
            </div>
            
          ) : (
              
              <button
                className="border-[#DC7171] hover:bg-gray-300 border-[1px] p-2 rounded-sm"
                onClick={() => {
                  connectMetaMask(setConnectedAddress)
                }
                  }
              >
                <p className="text-white text-center text-sm">Connect</p>
              </button>
           
          )}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#3D20F0] h-2" />
    </div>
  );

};

export default Navbar;
