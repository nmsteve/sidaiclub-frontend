import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { FaVolumeUp } from "react-icons/fa";
import { checkSeatFilled, joinWaitList } from "../connect/connectChain";


const Welcome = ({waitlisted}) => {

  const [number, setNumber] = useState(1);
  const [showMint, setShowMint] = useState(false)
  const [seatsFilled, setSeatsFilled] = useState(0)
 

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const handleAudioClick = (audioRef) => {
      audioRef?.current.play();
  };

  function handleIncrement() {
    setNumber(number + 1);
  }

  function handleDecrement() {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  useEffect(() => {
    checkSeatFilled(setSeatsFilled)
  },[])


  return (
    <div className="relative max-w-screen">
      
      <div className="relative z-4 pt-16 md:pt-24">
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          Welcome to the
        </h1>
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          <span className="text-[#FBCCCC]">Entito Sidai</span> NFT Collection
        </h1>
        <p className="text-white font-serif text-center text-xs md:text-sm my-4 md:my-8">
          Celebrating Maasai Culture and Empowering Girls Through Education
        </p>

        <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base mx-6 md:w-1/2 text-center md:mx-auto">
          Introducing the
          <span className="text-[#DC7171]"> Entito Sidai Collection</span> - a
          limited edition set of  <span className="text-[#DC7171]">2,000</span>  NFTs that embody the essence of Maasai
          culture, diversity, and beauty. In the Maa language, "Entito (
          |en’-tee-toh| )"
          <FaVolumeUp
            className="text-sm inline cursor-pointer mx-2 text-[#DC7171]"
            onClick={() => handleAudioClick(audio1Ref)}
          />
          translates to a girl, and "Sidai ( |see’-da-ee| )"
          <FaVolumeUp
            className="text-sm inline cursor-pointer mx-2 text-[#DC7171]"
            onClick={() => handleAudioClick(audio2Ref)}
          />
          means beautiful - and that's precisely what this collection
          represents: the beauty of a Maasai girl adorned in traditional beaded
          ornaments. Each NFT features a unique pattern inspired by the
          intricate details of the ornaments, including a hair cover, forehead gear, earrings, and neck bracelet.
          <audio ref={audio1Ref}>
            <source src={"/audio/entito.ogg"} type="audio/ogg" />
          </audio>
          <audio ref={audio2Ref}>
            <source src={"/audio/sidai.ogg"} type="audio/ogg" />
          </audio>
        </p>

        {showMint ?
          <div>
            <Slider number={5000} />
            <p className="text-white text-center text-lg font-bold md:text-2xl">
              0.1 ETH
            </p>
            <div className="flex justify-center gap-4 my-4">
              <div className="border-2 p-2 flex items-center rounded-sm flex-row gap-6 border-[#D08A21]">
                <button className="text-white text-2xl" onClick={handleDecrement}>
                  -
                </button>
                <p className="text-white text-2xl">{number}</p>
                <button className="text-white text-2xl" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button className="bg-[#D08A21] hover:bg-[#744704] py-2 flex items-center md:py-4 px-6 text-xl rounded-sm">
                <p className="text-white">Mint</p>
              </button>
            </div>
          </div>
          : 
          <div className="bg-[#DC71712E] rounded-lg border-[2px] border-dashed border-[#DC7171] mt-10 w-2/5 mx-auto p-8 text-center text-white">
            <p className="font-serif mb-5">
              This collection is under creation and will be launched latest  {" "} 
              <span className="text-[#F2CECE]"> July 31st, 2023</span> via an OpenSea drop for 0.05 ETH .
              Join waitlist to get a {" "}
              <span className="text-[#dc7171ee]">25% discount</span>.
            </p>

            {waitlisted ?
           
              <button
                className={`bg-gray-500 border-[1px] p-2 rounded w-28`}
                disabled={waitlisted}
              >
                Joined
              </button> :
              <button
                onClick={() => joinWaitList(setSeatsFilled)}
                className={`bg-[#DC7171] hover:bg-gray-300 border-[1px] p-2 rounded w-28`}
              >
                Join
              </button> }

            <p className="font-serif mt-3 ">{seatsFilled} / 500</p>
           
            <p className="font-serif mt-10">Joining is FREE; however, paying the transaction gas fee is proof of genuine interest.</p>
           
          </div>
        }
        <img
          className="w-screen z-4 bottom-0"
          src={"/images/Frame.svg"}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Welcome;
