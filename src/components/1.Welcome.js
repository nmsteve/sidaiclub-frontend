import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { FaVolumeUp } from "react-icons/fa";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';
import { mint, checkMinted, checkSupply } from "../connect/connectChain.js"
const { ethereum } = window;


const Welcome = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const [supply, setSupply] = useState(0);
  const [minted, setMinted] = useState(0);

  const [countdown, setCountdown] = useState('');


  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.02)


  const [connectedAddress, setConnectedAddress] = useState()

  if (ethereum) {
    ethereum.on('accountsChanged', () => {
      setConnectedAddress(ethereum.selectedAddress)
    })

    window.ethereum.on('chainChanged', (chainId) => window.location.reload());

  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setPrice((quantity + 1) * 0.02);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((quantity - 1) * 0.02);
    }
  };


  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const handleAudioClick = (audioRef) => {
    audioRef?.current.play();
  };


  useEffect(() => {
    const countdownDate = new Date('august 26, 2023 00:00:00').getTime();

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

  useEffect(() => {
    checkSupply(setSupply)
    //console.log(supply)
    checkMinted(setMinted)
  }, [supply, minted, connectedAddress])


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
            {isSmallScreen ?
              <div>
                <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688800993/22_knlinz.jpg" alt="1" className="w-full" />
              </div>
              :
              <Carousel
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={!isSmallScreen}
                interval={3000}
                stopOnHover={false}
              >
                <div>
                  <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688800993/8_x0floh.jpg" alt="1" className="w-full" />
                </div>
                <div>
                  <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688800963/22_knlinz.jpg" alt="2" className="w-full" />
                </div>
                <div>
                  <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688800931/20_dmlnhb.jpg" alt="3" className="w-full" />
                </div>
                <div>
                  <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688800896/25_bh5gax.jpg" alt="4" className="w-full" />
                </div>
              </Carousel>

            }
          </div>

          <div className="md:w-3/5 ml-10 mr-3 xs:mt-10 md:mt-0">
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
            <div>
              <Slider supply={supply} />
              <p className="text-white text-center text-lg font-bold md:text-2xl">
                {price} ETH
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
                <button className="bg-[#D08A21] hover:bg-[#744704] py-2 flex items-center md:py-4 px-6 text-xl rounded-sm"
                  onClick={() => { mint(quantity, setMinted, setSupply) }}>
                  <p className="text-white"> Mint </p>
                </button>
              </div>
              <div className="flex justify-center gap-4 my-4">
                {countdown !== 'Expired' && (
                  <>
                    <div className="text-white text-center my-4">
                      <span className="font-bold">26TH AUG, 2023</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[0]}</button>
                      <span className="text-xs text-white">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[2]}</button>
                      <span className="text-xs text-white">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[4]}</button>
                      <span className="text-xs text-white">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="text-white text-sm font-bold">{countdown.split(' ')[6]}</button>
                      <span className="text-xs text-white">Seconds</span>
                    </div>
                  </>
                )}
                {countdown === 'Expired' && <span className="text-white">Expired</span>}
              </div>
              {minted > 0 ?
                <div className="flex justify-center gap-4 my-4">
                  <p className="font-bold">Token Minted: {minted}</p>
                </div> :
                <div className="flex justify-center gap-4 my-4">
                </div>
              }

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Welcome;
