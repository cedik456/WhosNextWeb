import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      navigate("/swipeView");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <>
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
            <button
              onClick={handleLoginClick}
              className="bg-[#222222] py-2 px-8 rounded-full  text-sm text-white w-full cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#222222] py-2 px-4 rounded-2xl text-white w-full mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            Login
          </button>

          <div className="flex justify-center">
            <p className="underline text-sm">Trouble Logging In?</p>
          </div>
        </form>
      </LoginModal>
    </>
  );
};

export default Nav;
