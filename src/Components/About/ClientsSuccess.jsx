import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const ClientsSuccess = () => {
  return (
    <div className=" mx-5 mt-16 sm:mt-0 md:w-9/12 sm:mx-auto">
      <div className=" sm:my-8 text-center ">
        <h1 className=" font-bold text-[30px] sm:text-[40px] ">
          Our client’s success is our success.
        </h1>
        <h1 className="  text-[16px] ">
          Leo morbi faucibus mattis pharetra tellus velit ultricies duis
          rhoncus. Porttitor fermentum eu urna eget
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-10 my-10 ">
        {/* 1st card  */}
        <div className="w-[342px] px-5 h-[361px] border-2 rounded-xl  text-center pt-10 bg-[#100E2C] ">
          <h1 className=" flex text-[#FFFFFF] justify-center text-5xl">
            <IoHomeOutline />
          </h1>
          <h2 className=" text-2xl pt-5 font-bold text-white">
            Buy a property
          </h2>
          <h3 className=" text-[16px] pt-5 text-[#FFFFFF] font-normal ">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus. Porttitor fermentum eu
          </h3>
          <div className="mt-5">
            <button className="btn border-none font-normal text-[#FFFFFF] text-xl bg-[#0057FF] ">
              Find property
            </button>
          </div>
        </div>

        {/* 2nd card  */}
        <div className="w-[342px] px-5 h-[361px] border-2 rounded-xl  text-center pt-10 bg-[#100E2C] ">
          <h1 className=" flex text-[#FFFFFF] justify-center text-5xl">
            <MdOutlineMapsHomeWork />
          </h1>
          <h2 className=" text-2xl pt-5 font-bold text-white">
            Sell a property
          </h2>
          <h3 className=" text-[16px] pt-5 text-[#FFFFFF] font-normal ">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus. Porttitor fermentum eu
          </h3>
          <div className="mt-5">
            <button className="btn border-none font-normal text-[#FFFFFF] text-xl bg-[#0057FF] ">
              Learn more
            </button>
          </div>
        </div>

        {/* 3rd card  */}
        <div className="w-[342px] px-5 h-[361px] border-2 rounded-xl  text-center pt-10 bg-[#100E2C] ">
          <h1 className=" flex text-[#FFFFFF] justify-center text-5xl">
            <SiHomeassistantcommunitystore />
          </h1>
          <h2 className=" text-2xl pt-5 font-bold text-white">
            Rent a property
          </h2>
          <h3 className=" text-[16px] pt-5 text-[#FFFFFF] font-normal ">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus. Porttitor fermentum eu
          </h3>
          <div className="mt-5">
            <button className="btn border-none font-normal text-[#FFFFFF] text-xl bg-[#0057FF] ">
              Find a rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSuccess;
