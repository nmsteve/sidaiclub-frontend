import React from "react";
import YouTube from 'react-youtube';



const History = () => {

  const videoId = '1DS-XKIY3lQ'; // Replace with your YouTube video ID

  const opts = {
    width: '100%',
    height: '390',
    playerVars: {
      autoplay: 1, // Set autoplay to 1 for autoplaying the video
    },
  };

  

  return (
    <div className="relative max-w-screen">

      <div className="relative z-4 pt-16 md:pt-24">
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          The Rich History Behind
        </h1>
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          <span className="text-[#FBCCCC]">Entito Sidai</span> NFT Collection
        </h1>

        <div className="flex flex-col md:flex-row mx-4 mt-10">
          <div className="md:w-3/6">
            <YouTube videoId={videoId} opts={opts}/>
          </div>
          <div className="md:w-3/6">
            <div className="ml-10 mr-3 xs:mt-10 md:mt-0">
            <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
              The Maasai tribe, renowned for their intricate beadwork, have a rich tradition of utilizing natural resources and incorporating symbolic meanings into their jewelry. While they historically used materials like clay, wood, bone, copper, and brass, the introduction of glass beads through trade with Europeans in the late 19th century significantly impacted their craftsmanship.
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;
