import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
// import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
// import Footer from "./components/Footer";
import Hearts from "./components/Hearts";

function App() {
  return (
    <div className="min-h-screen bg-[#2A215F] w-screen overflow-hidden">
      <Navbar />
      {/* <div className="relative">
        <div className="z-0">
          <img className="w-screen" src={"/images/girl.svg"} alt="logo" />
        </div>
        <div
          className="relative -top-8 z-4"
          style={{
            backgroundImage: `url('/images/Wave.svg')`,
            backgroundSize: "cover",
            zIndex: 2,
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white">
            Welcome to the Entito Sidai NFT Collection
          </h1>
          <p className="text-white">
            Celebrating Maasai Culture and Empowering Girls Through Education
          </p>

          <p className="text-white">
            Introducing the Entito Sidai Collection - a limited edition set of
            10,000 NFTs that embody the essence of Maasai culture, diversity,
            and beauty. In the Maa language, "Entito ( |en’-tee-toh| )"
            translates to a girl, and "Sidai ( |see’-da-ee| )" means beautiful -
            and that's precisely what this collection represents: the beauty of
            a Maasai girl adorned in traditional beaded ornaments. Each NFT
            features a unique pattern inspired by the intricate details of the
            ornaments, including a hair cover, forehead bracelet, earrings, and
            neck bracelet.
          </p>
          <img
            className="w-screen z-4 bottom-0"
            src={"/images/Frame.svg"}
            alt="logo"
          />
        </div>
        <div
          className="relative"
          style={{
            backgroundImage: `url('/images/Rectangle.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" relative z-4">
            <h1>Join the Sidai Club and Make a Difference</h1>
            <p className="text-black">
              Owning one of these exclusive NFTs is not only a chance to add a
              unique piece of art to your collection but also an opportunity to
              make a difference in someone's life. With every purchase, you
              become a part of Sidai Club, an exclusive membership that offers
              access to your 4k x 4k file, airdrops, feature NFTs at a
              discounted price, and 1000 ERC20 Sidai Tokens once complete.
            </p>
            <p>Meet our Amazing Community</p>
            <div className="flex flex-row gap-2">
              <FaDiscord size={20} color="black" />
              <FaTwitter size={20} color="black" />
              <FaInstagram size={20} color="black" />
            </div>
          </div>
        </div>
        <div className="relative items-center justify-center">
          <div className="border m-auto mt-32 border-[#E1BEE7] rounded-md h-[600px] w-3/4 ">
            <div className="p-2 mx-auto absolute bg-[#E1BEE7] rounded-full">
              <img className="" src={"/images/hearts.svg"} alt="logo" />
            </div>
          </div>
        </div>
        <div
          className="relative"
          style={{
            backgroundImage: `url('/images/sofia.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bottom-0 bg-red-800 z-4">
            <AiOutlineMail size={20} color="white" />
          </div>
        </div>
      </div> */}

      <Hero />

      <Welcome />

      <Details />

      <Hearts />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
