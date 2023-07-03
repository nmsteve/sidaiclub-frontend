import React from "react";

function Slider({ number }) {
  return (
    <div className="w-3/4 md:w-2/5 mx-auto mt-4">
      <div className="relative pt-1">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-white font-bold">
            {(number / 2000) * 100}%
          </span>
          <span className="text-sm text-white">{number}/2000</span>
        </div>
        <div className="overflow-hidden h-[4px] mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(number / 10000) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D08A21] transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
