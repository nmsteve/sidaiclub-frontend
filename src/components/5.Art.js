import React from "react";

const Art = () => {

  return (
    <div className="relative max-w-screen">
      <div className="relative z-4 pt-16 md:pt-24">
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          The Art
        </h1>

        <div className="flex flex-col md:flex-row mx-4 mt-10 mb-5">

        <div className="md:w-3/6">
            <img src="https://res.cloudinary.com/dk8epvq9b/image/upload/v1688801495/Art_Banner_nuy4bc.png" />
          </div>
          
          <div className="md:w-3/6">
            <div className="ml-10 mr-3 xs:mt-10 md:mt-0">
              <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
                Entito Sidai NFT collection consists of 2000 unique NFTs, each containing 10 distinct traits, which make them one-of-a-kind. These NFTs are randomly named and organized, giving every individual an equal opportunity to own the rarest NFT.
              </p>
              <p className="text-xs lg:text-xl sm:text-base xl:mt-16 lg:mt-12 text-center text-[#DC7171] mt-2 m">
                Stay updated, follow us on Twitter
              </p>
              <div className="flex flex-row gap-2 xs:gap-12 xs:mt-1 items-center justify-center mt-2 sm:text-sm xs:text-xs font-bold">
                <a href="https://twitter.com/EntitoSidaiNFTs" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  @EntitoSidaiNFTs
                </a>
              </div>
              <p className="text-xs lg:text-xl sm:text-base xl:mt-16 lg:mt-12 text-center text-[#DC7171] mt-2 m">
                Reach us via Email
              </p>
              <div className="flex flex-row gap-2 xs:gap-12 xs:mt-1 items-center justify-center mt-2 sm:text-sm xs:text-xs font-bold text-white">
                entito@sidaiclub.com
              </div>
            </div>
          </div>
          
        
          
        
      </div>

      </div>
      </div>
  );
};

export default Art;
