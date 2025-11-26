import React from "react";

const DiscoverFeatured = () => {
  return (
    <>
      <div className="w-full mt-16">
        <div
          className="w-full h-80 md:h-[500px] bg-center bg-cover relative overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.ctfassets.net/s4ybdu2ld1ox/4iGrU7mReGVZB2WV4x0YDF/6d7704ac48417104740061e858447afd/mordern-home.jpeg?w=1382&h=922&fl=progressive&q=70&fm=jpg&bg=transparent)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-28">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
              Discover your featured property
            </h1>

            <p className="text-white text-base md:text-lg mt-2 max-w-xl">
              Leo morbi faucibus mattis pharetra tellus velit ultricies duis
              rhoncus
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverFeatured;
