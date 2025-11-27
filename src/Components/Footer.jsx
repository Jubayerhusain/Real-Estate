import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#100E2C] w-full">
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-white p-10 max-w-7xl mx-auto">
        <nav>
          <h6 className="font-semibold text-lg mb-3">Opening hours</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Mon-Fri 08:00AM - 08:00PM</li>
            <li>Sat-Sun 08:00AM - 08:00PM</li>
          </ul>
        </nav>

        <nav>
          <h6 className="font-semibold text-lg mb-3">Find Us</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              8911 Tanglewood Ave.<br />Capitol Heights, MD 20743
            </li>
            <li>(566) 237-4687</li>
            <li>moinefou@hotmail.com</li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg mb-3">Property</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Apartments</li>
            <li>Villa’s</li>
            <li>Houses</li>
            <li>Commercial</li>
          </ul>
        </nav>

        <nav>
          <h6 className="font-semibold text-lg mb-3">Links</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Property</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <form>
          <h6 className="font-semibold text-lg mb-3">Newsletter</h6>
          <label className="text-sm text-gray-300">Enter your email address</label>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered rounded-l-md w-full text-black px-3 py-2"
            />
            <button className="btn btn-primary rounded-r-md px-6">Subscribe</button>
          </div>
        </form>
      </footer>

      <footer className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto p-4 px-6 text-gray-300">
        <aside className="text-center sm:text-left text-sm">
          <p>
            Copyright © Real Estate {new Date().getFullYear()} | Design by
            Figma.guru
          </p>
        </aside>

        <nav className="flex gap-4 mt-4 sm:mt-0">
          <FaFacebookF className="h-10 w-10 rounded-full bg-white p-2 text-black cursor-pointer hover:scale-105 duration-200" />
          <LuInstagram className="h-10 w-10 rounded-full bg-white p-2 text-black cursor-pointer hover:scale-105 duration-200" />
          <FaXTwitter className="h-10 w-10 rounded-full bg-white p-2 text-black cursor-pointer hover:scale-105 duration-200" />
          <BiLogoTelegram className="h-10 w-10 rounded-full bg-white p-2 text-black cursor-pointer hover:scale-105 duration-200" />
        </nav>
      </footer>
    </div>
  );
};

export default Footer;