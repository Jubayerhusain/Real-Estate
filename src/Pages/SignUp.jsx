import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" py-10  bg-[#F7F9FB]">
      <div className=" h-[652px]  w-[486px] shadow-2xl bg-white rounded-xl shadow-  px-14  mx-auto  pt-10 ">
        <h1 className=" text-center text-2xl font-bold">Sign UP</h1>
        <p className=" text-center text-sm py-2 ">Your Social Campaigns</p>
        <div className=" pt-5 flex justify-between ">
          {/* 1st  */}
          <div className=" flex gap-2 items-center rounded-lg px-4  border border-gray-200 py-2">
            <div className=" text-xl">
              <FcGoogle />
            </div>
            <h1 className=" text-sm">Sign in with Google</h1>
          </div>
          {/* 2nd  */}
          <div className=" flex gap-2 rounded-lg items-center px-4 border border-gray-200 py-2">
            <div className=" text-xl">
              <BsApple />
            </div>
            <h1 className=" text-sm">Sign in with Apple</h1>
          </div>
        </div>
        <div className="  ">
          <div className="divider font-normal text-[#00000066] py-5 text-[12px] ">
            Or with Email
          </div>
        </div>
        <div className="grid grid-cols-1  gap-5">
          <input type="email" placeholder=" Email" className="input w-full " />
          {/* 2nd  */}
          <div className="relative flex items-center w-full">
            <input
              type="password"
              placeholder="Password"
              className="input w-full pr-12"
            />
            <div className="absolute right-4 text-xl cursor-pointer">
              <FaRegEyeSlash />
            </div>
          </div>
          <div>
            <h1 className=" text-[#00000066]  text-[12px]  ">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </h1>
          </div>
          <input
            type="Password"
            placeholder=" Repeat Password"
            className="input w-full "
          />
        </div>
        <div className=" flex py-5 gap-2">
        <input type="checkbox" defaultChecked className="checkbox w-6 h-6" />
           <h1>
            I Accept the Terms
           </h1>
        </div>
        <button className=" btn w-96 text-[18px] rounded border-none text-white bg-[#1C1C1C] mt-5   ">
          Sign Up
        </button>
        <div className=" text-sm flex justify-center py-2 gap-1" >
             <h1 className="" >Not a Member yet?  </h1>
             <Link to={'/signIn'} className="  text-[#95A4FC]" >Sign Up</Link>
            </div>
      </div>
    </div>
  );
};

export default SignUp;