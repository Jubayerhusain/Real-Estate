import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="bg-base-100 py-2 px-4">
      <div className="max-w-[1440px] mx-auto navbar">
        <div className="navbar-start">
          <Link to="/" className="flex items-center">
            <GrHomeRounded className="text-2xl mr-2" />
            <a className="text-2xl font-bold">Real Estate</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/property">Property</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        {/* navber end  */}
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu right-0 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/property">Property</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <p>(257) 388-6895</p>
              </li>
            </ul>
          </div>
          <div className=" items-center hidden lg:flex">
            <div className="flex items-center">
              <CgProfile className="text-2xl mr-2" />
              <Link to="/login">Login</Link>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-2xl mr-2 ml-4" />
              <p>(257) 388-6895</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
