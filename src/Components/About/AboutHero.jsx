import React from "react";
import { FaHome, FaBuilding, FaWarehouse, FaHotel } from "react-icons/fa";
import bannerVideo from "../../assets/videos/about-video.mp4";

const AboutHero = () => {
  return (
    <section className="w-full mx-auto">
      <div className="relative w-full mx-auto h-[620px] rounded-t-xl overflow-hidden">
        
        <video
          src={bannerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mt-20 flex flex-col justify-center px-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Faucibus mattis pharetra
          </h1>

          <p className="text-sm font-semibold opacity-80 text-black mb-6 cursor-pointer hover:underline w-fit">
            Watch video
          </p>

        </div>

        <p className="absolute bottom-20 right-1 sm:right-10 text-white text-sm w-[350px] leading-5 z-10">
          Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec
          aliquet interdum bibendum tellus sed ultricies pharetra in lorem eget
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-b-xl mt-5 p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <FaHome className="text-4xl mx-auto" />
          <h2 className="text-3xl font-bold mt-2">1250</h2>
          <p className="text-gray-500 text-sm">Properties sold</p>
        </div>

        <div>
          <FaBuilding className="text-4xl mx-auto text-gray-800" />
          <h2 className="text-3xl font-bold mt-2">320</h2>
          <p className="text-gray-500 text-sm">Apartments sold</p>
        </div>

        <div>
          <FaWarehouse className="text-4xl mx-auto text-gray-800" />
          <h2 className="text-3xl font-bold mt-2">125</h2>
          <p className="text-gray-500 text-sm">Houses sold</p>
        </div>

        <div>
          <FaHotel className="text-4xl mx-auto text-gray-800" />
          <h2 className="text-3xl font-bold mt-2">120</h2>
          <p className="text-gray-500 text-sm">Villas sold</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
