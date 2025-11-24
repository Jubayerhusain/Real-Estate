import React from "react";
import image from "../assets/smiling-men-giving-hight-five-office.jpg";
const SatisfactionSection = () => {
  return (
    <div className="bg-[#100E2C] py-16 px-4 mt-20">
      <div className="max-w-[1,048px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center">
          <img
            src={image}
            alt="Team"
            className="rounded-xl w-full max-w-sm object-cover"
          />
        </div>

        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Putting a plan to action, <br />
            to assure your satisfaction!
          </h2>

          <p className="text-gray-300 mt-4 mb-6 max-w-md">
            Ultrices quis at enim in tristique in id diam suspendisse.
            Sed fermentum velit id et donec dui. Sed nulla neque at phasellus
            in adipiscing dictum.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg">
            Learn more
          </button>
        </div>

      </div>
    </div>
  );
};

export default SatisfactionSection;
