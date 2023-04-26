import React, { useRef, useState } from "react";
import Slider from "./Slider";
import { FaVolumeUp } from "react-icons/fa";

const Welcome = () => {
  const [number, setNumber] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioClick = () => {
    if (!isPlaying) {
      audioRef?.current.play();
      setIsPlaying(true);
    } else {
      audioRef?.current.pause();
      setIsPlaying(false);
    }
  };

  function handleIncrement() {
    setNumber(number + 1);
  }

  function handleDecrement() {
    if (number > 1) {
      setNumber(number - 1);
    }
  }
  return (
    <div className="relative max-w-screen">
      {/* <img
        className={"w-full z-0 absolute -top-12 md:-top-44"}
        src={"/images/Wave.svg"}
        alt="logo"
      />
      <img
        className="w-full z-0 absolute -top-12 md:-top-44"
        src={"/images/wave2.svg"}
        alt="logo"
      /> */}
      <img
        className={
          "w-full z-0 absolute -top-12 md:-top-44 transition-all duration-10000 animate-pulse"
        }
        src={"/images/Wave.svg"}
        alt="logo"
      />

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

        <p className="text-white md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base mx-6 md:w-1/2 text-center md:mx-auto">
          Introducing the
          <span className="text-[#DC7171]"> Entito Sidai Collection</span> - a
          limited edition set of 10,000 NFTs that embody the essence of Maasai
          culture, diversity, and beauty. In the Maa language,
          <p className="text-white flex flex-wrap">
            <span className="italic flex flex-row items-center justify-center gap-2">
              "Entito ( |en’-tee-toh| )"
              <FaVolumeUp
                className="text-sm cursor-pointer mx-2 text-[#DC7171]"
                onClick={handleAudioClick}
              />
              <p className="block md:hidden">translates to</p>
            </span>{" "}
            <p className="hidden md:block">translates to a girl, and</p>
            {"  "}
            <span className="italic ml-2 flex flex-row justify-center items-center">
              <p className="block md:hidden mr-2">a girl, and</p>
              "Sidai ( |see’-da-ee| )"{" "}
              <FaVolumeUp
                className="text-sm cursor-pointer mx-2 text-[#DC7171]"
                onClick={handleAudioClick}
              />
            </span>
            means beautiful - and that's precisely what this collection
            represents: the beauty of a
          </p>{" "}
          Maasai girl adorned in traditional beaded ornaments. Each NFT features
          a unique pattern inspired by the intricate details of the ornaments,
          including a hair cover, forehead bracelet, earrings, and neck
          bracelet.
          <audio ref={audioRef}>
            <source src={"/audio/audio.mp3"} type="audio/mpeg" />
          </audio>
        </p>
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
