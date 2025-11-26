import React from "react";
import { FaPhone } from "react-icons/fa";
import { LuMail, LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

const ContactHero = () => {
  return (
    <div
      className="w-full sm:h-[830px] sm:rounded-3xl bg-cover bg-center relative flex items-center justify-center py-10 px-5"
      style={{
        backgroundImage:
          "url(https://images.ctfassets.net/s4ybdu2ld1ox/4iGrU7mReGVZB2WV4x0YDF/6d7704ac48417104740061e858447afd/mordern-home.jpeg?w=1382&h=922&fl=progressive&q=70&fm=jpg&bg=transparent)",
      }}
    >
      <div className="absolute inset-0 bg-black/50 sm:rounded-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-16">
        
        <div className="bg-[#100E2C] rounded-xl p-8 w-full sm:w-[400px]">
          <h1 className="text-white text-[28px] font-bold">Get in touch</h1>
          <p className="text-white text-[16px] py-4">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
          </p>

          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your name" className="input h-[50px]" />
            <input type="text" placeholder="Your mail" className="input h-[50px]" />
            <input type="text" placeholder="Your phone" className="input h-[50px]" />
            <textarea className="textarea" placeholder="Your message"></textarea>
          </div>

          <button className="btn text-[18px] border-none text-white bg-blue-600 mt-5 w-full">
            Send Message
          </button>
        </div>

        <div className="text-center sm:text-left px-2 sm:mt-30">
          <h1 className="text-white text-[28px] sm:text-[40px] font-bold leading-tight">
            Feel free to contact us
          </h1>
          <p className="text-white text-[16px] mt-2">
            Leo morbi faucibus mattis pharetra
          </p>

          <div className="grid grid-cols-1 gap-3 sm:gap-5 mt-6">

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="text-white text-2xl"><LuMapPin /></div>
              <h2 className="text-white text-xl font-semibold leading-snug">
                8911 Tanglewood Ave. <br />
                Capitol Heights, MD 20743
              </h2>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="text-white text-2xl"><MdOutlinePhone /></div>
              <h2 className="text-white text-xl font-semibold">(566) 237-4687</h2>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="text-white text-2xl"><MdOutlinePhone /></div>
              <h2 className="text-white text-xl font-semibold">(239) 319-8083</h2>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="text-white text-2xl"><LuMail /></div>
              <h2 className="text-white text-xl font-semibold">moinefou@hotmail.com</h2>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactHero;
