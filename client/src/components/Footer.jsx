import React from "react";

const Footer = () => {
  return (
    <footer className="w-full shadow-md border border-b-0 p-4">
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
          <ul></ul>
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
