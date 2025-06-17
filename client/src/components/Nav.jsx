import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth } from "../contexts/AuthContext";
import { useLoginLock } from "../hooks/useLoginLock";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Must include an uppercase letter" })
    .regex(/[a-z]/, { message: "Must include a lowercase letter" })
    .regex(/[0-9]/, { message: "Must include a number" })
    .regex(/[!@#$%^&*]/, { message: "Must include a special character" }),
});

const Nav = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLocked, lockCountdown, reportLoginResult } = useLoginLock();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isLocked) {
      setMessage("Too many login attempts. Try again in 2 minutes.");
    }
  }, [isLocked]);

  const handleLoginClick = () => {
    setMessage("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
    setMessage("");
  };

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password);

    if (result.success) {
      setMessage("");
      navigate("/swipeView");
      setIsModalOpen(false);
      reset();
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              {...register("email")}
              disabled={isLocked}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              {...register("password")}
              disabled={isLocked}
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
          {(errors.email || errors.password || message) && (
            <div className="mb-2 text-center text-sm text-red-500 space-y-1">
              {errors.email && <p>{errors.email.message}</p>}
              {errors.password && <p>{errors.password.message}</p>}
              {message && <p>{message}</p>}
            </div>
          )}

          <div className="flex justify-center">
            <p className="underline text-sm">Trouble Logging In?</p>
          </div>
        </form>
      </LoginModal>
    </>
  );
};

export default Nav;
