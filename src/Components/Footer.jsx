import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#100E2C]">
        <footer className="flex justify-evenly sm:footer-horizontal  text-[#FFFFFF] p-10">
          <nav>
            <h6 className="footer-title">Opening hours</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover">Mon-Fri 08:00AM - 08:00PM</a>
              </li>
              <li>
                <a className="link link-hover">Sat-Sun 08:00AM - 08:00PM</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="footer-title">Find Us</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover">
                  8911 Tanglewood Ave. <br />
                  Capitol Heights, MD 20743
                </a>
              </li>
              <li>
                <a className="link link-hover">(566) 237-4687</a>
              </li>
              <li>
                <a className="link link-hover">moinefou@hotmail.com</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="footer-title">Property</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover">Apartments</a>
              </li>
              <li>
                <a className="link link-hover">Villa’s</a>
              </li>
              <li>
                <a className="link link-hover">Houses</a>
              </li>
              <li>
                <a className="link link-hover">Commercial</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="footer-title">Links</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Property</a>
              </li>
              <li>
                <a className="link link-hover">About</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </nav>

          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join mt-2">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>

        <footer className="footer sm:footer-horizontal px-10 w-10/12 mx-auto text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center">
            <p>Copyright © Real Estate {new Date().getFullYear()} Design by Figma.guru</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end pr-10">
            
            <div>
                <FaFacebookF className="h-10 w-10 rounded-full bg-white p-2 text-black" ></FaFacebookF>
            </div>
            <div>
                <LuInstagram className="h-10 w-10 rounded-full bg-white p-2 text-black" ></LuInstagram>
            </div>
            <div>
                <FaXTwitter className="h-10 w-10 rounded-full bg-white p-2 text-black" ></FaXTwitter>
            </div>

            <div>
                <BiLogoTelegram className="h-10 w-10 rounded-full bg-white p-2 text-black" ></BiLogoTelegram>    
            </div>

          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
