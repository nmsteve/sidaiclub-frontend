import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { FaVolumeUp } from "react-icons/fa";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Welcome = ({waitlisted}) => {

  const [number, setNumber] = useState(0);
  const [countdown, setCountdown] = useState('');
  

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
  
  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const handleAudioClick = (audioRef) => {
      audioRef?.current.play();
  };


  useEffect(() => {
    const countdownDate = new Date('July 29, 2023 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setCountdown('Expired');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);


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
      
        <div className="flex flex-col md:flex-row mx-4">
          <div className="md:w-2/5">
            <Carousel
              showArrows={true}
              showIndicators={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={false}
            >
              <div>
                <img src="/images/top/8.jpg" alt="1" className="w-full" />
              </div>
              <div>
                <img src="/images/top/20.jpg" alt="2" className="w-full" />
              </div>
              <div>
                <img src="/images/top/22.jpg" alt="3" className="w-full" />
              </div>
              <div>
                <img src="/images/top/25.jpg" alt="4" className="w-full" />
              </div>
            </Carousel>
          </div>

          <div className="md:w-3/5">
            <div className="ml-10 mr-3 xs:mt-10">
              <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
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
                intricate details of the ornaments, including a hair cover, forehead gear, earrings, and necklace.
                <audio ref={audio1Ref}>
                  <source src={"/audio/entito.ogg"} type="audio/ogg" />
                </audio>
                <audio ref={audio2Ref}>
                  <source src={"/audio/sidai.ogg"} type="audio/ogg" />
                </audio>
              </p>
            </div>
           
            <div>
                <Slider number={number} />
                <p className="text-white text-center text-lg font-bold md:text-2xl">
                  0.02 ETH
                </p>
              <div className="flex justify-center gap-4 my-4">
                <button className="bg-[#D08A21] hover:bg-[#744704] py-2 px-3 text-xl rounded-l-sm"
                onClick={handleDecrement}>
                  <span className="text-white font-bold">-</span>
                </button>
                <div className=" py-2 px-3">
                  <span className="text-white text-xl font-bold">{quantity}</span>
                </div>
                <button className="bg-[#D08A21] hover:bg-[#744704] py-2 px-3 rounded-r-sm"
                onClick={handleIncrement}>
                  <span className="text-white font-bold">+</span>
                </button>
                <button className="bg-[#D08A21] hover:bg-[#744704] py-2 flex items-center md:py-4 px-6 text-xl rounded-sm">
                    <p className="text-white"> Mint </p>
                </button>
              </div>
              <div className="flex justify-center gap-4 my-4">
                {countdown !== 'Expired' && (
                  <>
                    <div className="text-white text-center my-4">
                      <span className="font-bold">29TH JULY, 2023</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[0]}</button>
                      <span className="text-xs">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[2]}</button>
                      <span className="text-xs">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[4]}</button>
                      <span className="text-xs">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[6]}</button>
                      <span className="text-xs">Seconds</span>
                    </div>
                  </>
                )}
                {countdown === 'Expired' && <span className="text-white">Expired</span>}
              </div>
            </div>
          </div>
      </div>
      
      </div>
    </div>
  );
};

export default Welcome;
