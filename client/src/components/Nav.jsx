import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth } from "../contexts/AuthContext";
import { useLoginLock } from "../hooks/useLoginLock";

const Nav = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLocked, lockCountdown, reportLoginResult } = useLoginLock();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLocked) {
      console.log("Lock triggered by useEffect");
      setMessage("Too many login attempts. Try again in 2 minutes.");
    }
  }, [isLocked]);

  const handleLoginClick = () => {
    // setMessage("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Email and password required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      setMessage("");
      navigate("/swipeView");
      setIsModalOpen(false);
    } else {
      setMessage("Wrong username or password.");
      reportLoginResult(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-[#F2F2F2]">
        <div className="container flex items-center justify-between mx-auto p-8">
          <Link className="text-3xl font-bold" to="/">
            Who's Next
          </Link>
          <ul className="flex gap-6">
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
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
          </ul>
          <div className="flex gap-6">
            <button className="text-sm">Language</button>
            <button
              onClick={handleLoginClick}
              className="bg-[#222222] py-2 px-8 rounded-full text-sm text-white w-full cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
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
              disabled={isLocked}
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
              disabled={isLocked}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLocked}
            className={`bg-[#222222] py-2 px-4 rounded-2xl text-white w-full mb-4 cursor-pointer transition-opacity duration-300 ease-in-out ${
              isLocked ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            }`}
          >
            {isLocked ? `Locked (${lockCountdown}s)` : "Login"}
          </button>
          <p
            className={`text-red-500 text-sm mb-2 text-center transition-opacity duration-500 ease-in-out ${
              message ? "opacity-100 visible " : "opacity-0 invisible"
            }`}
          >
            {message || "placeholder"}
          </p>

          <div className="flex justify-center">
            <p className="underline text-sm">Trouble Logging In?</p>
          </div>
        </form>
      </LoginModal>
    </>
  );
};

export default Nav;
