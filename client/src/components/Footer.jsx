import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full shadow-md p-4">
      <div className="grid grid-cols-5 container mx-auto px-4 ">
        <div>
          <h1 className="text-lg font-bold">Legal</h1>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookie Policy</li>
            <li>Intellectual Property</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Careers</h1>
          <ul>
            <li>Careers Portal</li>
            <li>Tech Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Socials</h1>
          <ul className="flex gap-2">
            <li>
              <FaInstagram size={24} color="#000" />
            </li>
            <li>
              <FaTiktok size={24} color="#000" />
            </li>
            <li>
              <FaYoutube size={24} color="#000" />
            </li>
            <li>
              <FaTwitter size={24} color="#000" />
            </li>
            <li>
              <FaFacebook size={24} color="#000" />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>FAQ</li>
            <li>Destinations</li>
            <li>Press Room</li>
            <li>Contact</li>
            <li>Promo Code</li>
          </ul>
        </div>
        <div>
          <p>Get the app</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
