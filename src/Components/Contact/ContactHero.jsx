import React from "react";
import { FaPhone } from "react-icons/fa";
import { LuMail, LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

const ContactHero = () => {
  return (
    <>
      <div
        className="w-[1,440px] h-[830px] rounded-xl sm:rounded-3xl bg-cover flex flex-col  justify-center border-2 relative"
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/s4ybdu2ld1ox/4iGrU7mReGVZB2WV4x0YDF/6d7704ac48417104740061e858447afd/mordern-home.jpeg?w=1382&h=922&fl=progressive&q=70&fm=jpg&bg=transparent)",
        }}
      >
        <div className=" absolute inset-0 bg-black/50 rounded-xl sm:rounded-3xl"></div>
        <div className=" absolute pl-28 pt-24 flex  ">
          <div className=" flex gap-10 items-center">
            <div className="bg-[#100E2C] rounded-xl  py-5 pl-12 h-[610px] w-[416px]">
              <h1 className="text-white text-[28px] font-bold">Get in touch</h1>
              <p className="text-white text-[16px] py-5 ">
                Leo morbi faucibus mattis pharetra tellus velit ultricies duis
                rhoncus
              </p>

              <div className="grid grid-cols-1 pr-5 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input h-[50px]"
                />
                <input
                  type="text"
                  placeholder=" Your mail"
                  className="input h-[50px] "
                />
                <input
                  type="text"
                  placeholder=" your phone"
                  className="input h-[50px] "
                />
                <input
                  type="text"
                  placeholder=" your message"
                  className="input text-start h-[148px]"
                />
              </div>
              <button className=" btn text-[20px] border-none text-white bg-blue-600 mt-5   ">
                send message
              </button>
            </div>
            <div>
              <h1 className="text-white text-[40px] line-height-1  font-bold">
                Feel free to contact us
              </h1>
              <p className="text-white text-[16px] ">
                Leo morbi faucibus mattis pharetra
              </p>
              <div className=" grid grid-cols-1 gap-5">

                {/* 1st  */}
                <div className=" flex items-center gap-2 mt-4">
                  <div className=" text-white text-2xl">
                    <LuMapPin />
                  </div>
                  <h2 className="text-white text-xl font-semibold ">
                    8911 Tanglewood Ave. <br />
                    Capitol Heights, MD 20743
                  </h2>
                </div>

                {/* 2rd  */}
                <div className=" flex items-center gap-2">
                  <div className=" text-white text-2xl">
                    <MdOutlinePhone />
                  </div>
                  <h2 className="text-white text-xl font-semibold ">
                    (566) 237-4687
                  </h2>
                </div>

                {/* 3rd  */}
                <div className=" flex items-center gap-2">
                  <div className=" text-white text-2xl">
                    <MdOutlinePhone />
                  </div>
                  <h2 className="text-white text-xl font-semibold ">
                    (239) 319-8083
                  </h2>
                </div>

                {/* 4th  */}    
                <div className=" flex items-center gap-2">
                  <div className=" text-white text-2xl">
                    <LuMail />
                  </div>
                  <h2 className="text-white text-xl font-semibold ">
                    moinefou@hotmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
