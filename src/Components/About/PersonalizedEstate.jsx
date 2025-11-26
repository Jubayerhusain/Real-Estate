import React from "react";
import image from "../../assets/aboutimage.jpg";
export default function PersonalizedEstate() {
  return (
    <div className="w-full py-16 px-5 md:px-18 lg:px-32 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center sm:px-5">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1B34] leading-snug">
            Real estate, personalized <br /> for you
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Pretium interdum risus risus facilisis cras pellentesque ipsum
            suspendisse venenatis. Morbi posuere semper etiam imperdiet orci ut.
            Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum
            lacinia aenean nec.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition">
            Learn more
          </button>
        </div>

        <div className="flex justify-end">
          <img
            src={image}
            alt="Modern home"
            className="w-full sm:w-[416px] rounded-xl shadow-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
}
