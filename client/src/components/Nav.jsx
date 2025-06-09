import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-[#F2F2F2]">
      <div className="container flex items-center justify-between mx-auto p-8">
        <div>
          <Link className="text-3xl font-bold" to="/">
            Who's Next
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ul className="flex gap-6 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Learn</Link>
            </li>
            <li>
              <Link to="/">Safety</Link>
            </li>
            <li>
              <Link to="/">Support </Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <button className="text-sm">Language</button>
          <button className="bg-[#222222] py-2 px-8 rounded-full text-sm text-white w-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
