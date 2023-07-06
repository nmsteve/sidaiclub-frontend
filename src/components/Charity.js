import React from "react";

const Charity = () => {

  return (
    <div className="relative max-w-screen">

      <div className="relative z-4 pt-16 md:pt-24">
        <h1 className="text-white text-center font-extrabold text-2xl md:text-5xl">
          Philanthropy Meets Art
        </h1>


        <div className="flex flex-col md:flex-row mx-4 mt-10">
          <div className="md:w-3/6">
            <img src="/images/Charity.png"/>
          </div>
          <div className="md:w-3/6">
            <div className="ml-10 mr-3 xs:mt-10">
            <p className="text-white  md:text-lg font-serif tracking-wide g-2 whitespace-pre-line leading-8 text-base text-left md:mx-auto">
                The most heartwarming part of the Entito Sidai Collection is that 10% of the amount collected from this sale will be used to sponsor the education of a Maasai girl. This marginalized group struggles to get an education, and your purchase can contribute to changing someone's life. We have partnered with the renowned organization Kenya Education Fund, who will handle the selection process and facilitate the sponsorship. On January 8th, 2024, we will come together to celebrate the realization of our dream as the selected individuals, through our partnership with Kenya Education Fund, are revealed. By owning a unique piece of art that celebrates diversity, culture, and beauty, you'll be empowering the girls of Maa with education and helping them achieve their dreams.
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Charity;
