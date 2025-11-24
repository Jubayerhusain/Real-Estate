import React from "react";
import bg_image from "../assets/contact_hero.jpg";

const ContactHero = () => {
  return (
    <div
      className="relative w-full bg-center bg-cover py-10 sm:pt-20 px-4 mt-18"
      style={{
        backgroundImage: `url('${bg_image}')`,
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col-reverse sm:flex-row gap-10 items-center">

        <div className="bg-[#100E2C] mb-10 p-8 rounded-xl shadow-xl text-white max-w-md text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-2 ">Get in touch</h3>
          <p className="text-gray-300 text-sm mb-6 ">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="email"
              placeholder="Your mail"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="text"
              placeholder="Your phone"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full p-3 rounded-md bg-white text-black"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md w-full">
              Send message
            </button>
          </form>
        </div>

        <div className="text-white md:pl-10 text-center sm:text-left">
          <h2 className="text-[30px] sm:text-[40px] font-bold leading-snug mb-4">
            Putting a plan to action, <br/>
            to assure your satisfaction!
          </h2>
          <p className="text-gray-200 max-w-md text-lg">
            Arcu laoreet malesuada nunc eget. Fermentum ut dui diam aliquam habitant elit.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactHero;
