import React from "react";

const Club = () => {

  return (
    <div className="relative max-w-screen">
      <div className="relative z-4 pt-16 md:pt-24">
        <h1 className="text-center text-white font-extrabold text-2xl md:text-5xl">
          Join the <span className="text-[#FBCCCC]">Sidai Club</span>  and
        </h1>
        <h1 className="text-center text-white font-extrabold sm:text-3xl  text-md lg:text-5xl">
          Make a Difference
        </h1>

        <div className="flex flex-col md:flex-row mx-4 mt-10">
          <div className="md:w-3/6">
            <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688801596/Club_hu7bak.png"/>
          </div>
          <div className="md:w-3/6">
            <div className="ml-10 mr-3 xs:mt-10 md:mt-0">
            <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
                Holders of these NFTs will become part of the Sidai Club, which will be allocated 90% of the collected funds. We are passionate about blockchain technology in general, and as such, we will be working on a blockchain project where profits will be shared among the members. We have many exciting ideas that we will share with you in our private Discord channels. We will research, discuss, and vote for the best idea to work on. Don't miss the chance to be part of the next big blockchain project. One of the ideas we have is to utilize blockchain as an anti-counterfeit software solution. More details will be shared in the private Discord channel. Join us
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Club;
