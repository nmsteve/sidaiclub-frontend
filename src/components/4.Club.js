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
            <img src="/images/Club.png"/>
          </div>
          <div className="md:w-3/6">
            <div className="ml-10 mr-3 xs:mt-10 md:mt-0">
            <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
                Initial buyers of these NFTs will become part of the Sidai Club, an exclusive membership that will offer airdrops in each future collection. The number of airdropped NFTs will be equal to the number of Entito Sidai NFTs purchased. Our collections will focus on culture and wildlife, but we are open to new ideas from our community. We have amazing collection ideas that we will share with you in our exclusive Discord channel. Additionally, we are passionate about blockchain technology in general, thus we will allocate funds towards a non-crypto blockchain project where profits will be shared among the members. One of the ideas we have is to utilize blockchain as an anti-counterfeit software solution. More details will be shared in the private Discord channel. Join us!
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Club;
