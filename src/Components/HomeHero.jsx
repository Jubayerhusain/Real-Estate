import React from "react";
import { Search, ChevronDown } from "lucide-react";
import bgImage from "../assets/hero_image.jpg";
const HomeHero = () => {
  return (
    <div className="relative w-full px-4">
      <div className="relative w-full overflow-hidden h-[540px] md:max-h-[600px] rounded-[14px] md:rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight">
            Find a home that
            <br />
            suits your lifestyle.
          </h1>

          <p className="text-white/95 text-center text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl mb-8 sm:mb-12 px-4 leading-relaxed">
            Nec risus quis viverra libero tellus eget. Leo morbi faucibus mattis
            pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu
            urna eget
          </p>
        </div>
      </div>

      <div className="relative -mt-14 z-30 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center">
            {/* Category*/}
            <div className="flex-1 relative">
              <div className="relative bg-[#F6F6F6] rounded-md">
                <select className="w-full px-4 py-3 sm:py-4 border-0 text-gray-800 font-medium text-sm sm:text-base focus:outline-none focus:ring-0 bg-transparent appearance-none cursor-pointer pr-10">
                  <option>Category</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Buy</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1 relative">
              <div className="relative bg-[#F6F6F6] rounded-md">
                <select className="w-full px-4 py-3 sm:py-4 border-0 text-gray-800 font-medium text-sm sm:text-base focus:outline-none focus:ring-0 bg-transparent appearance-none cursor-pointer pr-10">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Condo</option>
                  <option>Studio</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="flex-1 relative">
              <div className="relative bg-[#F6F6F6] rounded-md">
                <select className="w-full px-4 py-3 sm:py-4 border-0 text-gray-800 font-medium text-sm sm:text-base focus:outline-none focus:ring-0 bg-transparent appearance-none cursor-pointer pr-10">
                  <option>Location</option>
                  <option>New York, NY</option>
                  <option>Los Angeles, CA</option>
                  <option>Miami, FL</option>
                  <option>San Francisco, CA</option>
                  <option>Chicago, IL</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Search*/}
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Search size={20} />
              <span>SEARCH</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default HomeHero;
