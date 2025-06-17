import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const Nav = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

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
      setMessage(result.message);
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
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              {...register("password")}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`bg-[#222222] py-2 px-4 rounded-2xl text-white w-full mb-4 cursor-pointer transition-opacity duration-300 ease-in-out`}
          >
            Login
          </button>
          {(errors.email || errors.password || message) && (
            <p className="mb-2 text-center text-xs text-red-500">
              {errors.email?.message || errors.password?.message || message}
            </p>
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
