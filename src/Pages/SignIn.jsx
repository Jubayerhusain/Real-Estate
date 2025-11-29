import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" py-10  bg-[#F7F9FB]" >
      <div className=" h-[526px] w-[486px] bg-white rounded-xl shadow-  px-14  mx-auto  pt-10 ">
        <h1 className=" text-center text-2xl font-bold">Sign In</h1>
        <p className=" text-center text-sm py-2 ">Your Social Campaigns</p>
        <div className="  gap-5 pt-5 flex">
          {/* 1st  */}
          <div className=" flex gap-2 items-center rounded-lg px-2  border border-gray-200 py-2">
            <div className=" text-2xl">
              <FcGoogle />
            </div>
            <h1 className=" text-sm">Sign in with Google</h1>
          </div>
          {/* 2nd  */}
          <div className=" flex gap-2 rounded-lg items-center px-2 border border-gray-200 py-2">
            <div className=" text-2xl">
              <BsApple />
            </div>
            <h1 className=" text-sm">Sign in with Apple</h1>
          </div>
        </div>
          <div className="divider font-normal text-gray-400 py-5 text-[12px] ">
            Or with Email
          </div>
        <div className="grid grid-cols-1  gap-5">
          <input type="text" placeholder=" Eail" className="input w-full " />
          <input
            type="text"
            placeholder=" Password "
            className="input w-full "
          />
        </div>
        <h1 className=" text-end  text-[#95A4FC] py-2 ">forgot password</h1> 

        <button className=" btn w-96 text-[18px] rounded-sm border-none text-white bg-[#1C1C1C] mt-5   ">
          Sign In
        </button>
        <div className=" text-sm flex justify-center py-2 gap-1">
          <h1 className="">Not a Member yet? </h1>
          <Link to="/signUp" className="  text-[#95A4FC]">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;