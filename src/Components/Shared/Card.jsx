import { useEffect, useState } from "react";

import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { PiGarage } from "react-icons/pi";
import { BiArea } from "react-icons/bi";

const Card = () => {
  const [featureds, setfeatureds] = useState([]);
  useEffect(() => {
    fetch("/featured-property.json")
      .then((res) => res.json())
      .then((data) => setfeatureds(data));
  }, []);
  console.log("this is a:", featureds);

  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {featureds.map((featured, idx) => (
          <div key={idx} className="card bg-base-100   shadow-md">
            <figure className="relative">
              <img src={featured?.image} alt="image" 
              className="w-full h-[280px] object-cover transition-transform duration-500 hover:scale-110 "
              />

            {
                featured?.status === 'For sale' 

                ? 

                <div className="absolute top-5 left-5 bg-[#8EDA53] text-white px-5 py-2 rounded-md">
                    <button className="font-bold text-xl">{featured?.status}</button>
                </div>

                : 

                <div className="absolute top-5 left-5 bg-[#9653DA] text-white px-5 py-2 rounded-md">
                    <button className="font-bold text-xl">{featured?.status}</button>
                </div>

            }

            </figure>
            <div className="card-body">
              <h2 className=" text-xl font-semibold">{featured?.title}</h2>
              <h2 className="text-lg">{featured?.location}</h2>
              <h2 className=" text-2xl border-b pb-5 border-gray-200 font-semibold ">${featured?.price}</h2>
              <div className="flex justify-between gap-5">
                <div className=" capitalize">
                  <div className=" flex gap-2 font-semibold items-center">
                    <h1 className=" text-2xl">
                      <IoBedOutline />
                    </h1>
                    <h1 className="text-lg">{featured?.beds}</h1>
                  </div>
                  <h1 className=" capitalize text-lg font-normal">badrooms</h1>
                </div>
                <div className="">
                  <div className=" flex gap-2 font-semibold items-center">
                    <h1 className=" text-2xl">
                      <LuBath />
                    </h1>
                    <h1 className="text-lg">{featured.baths}</h1>
                  </div>
                  <h1 className=" capitalize text-lg font-normal">bathroom</h1>
                </div>
                <div className="">
                  <div className=" flex gap-2 font-semibold items-center">
                    <h1 className=" text-2xl">
                      <BiArea />
                    </h1>
                    <h1 className="text-lg">{featured?.area}</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className=" capitalize text-xl font-normal">total</h1>
                    <h1 className="  text-lg font-normal">area</h1>
                  </div>
                </div>
                <div className="">
                  <div className=" flex gap-2 font-semibold items-center">
                    <h1 className=" text-2xl">
                      <PiGarage />
                    </h1>
                    <h1 className="text-lg">{featured?.garage}</h1>
                  </div>
                  <h1 className=" capitalize text-lg font-normal">garages</h1>
                </div>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;