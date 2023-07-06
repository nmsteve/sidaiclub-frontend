import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Hero = () => {
  return (

    <div className="relative">
      {/* Video */}
      <video className="w-screen absolute z-0 mb-50" autoplay loop>
        <source
          src="https://res.cloudinary.com/dk8epvq9b/video/upload/v1688635295/ENTITO_bhjy8n.mp4"
          type="video/mp4"
        />
        {/* You can add additional video formats here */}
      </video>
      
    </div>
  );
};

export default Hero;
