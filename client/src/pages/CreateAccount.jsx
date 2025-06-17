import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Invalid email address" }),
});

const CreateAccount = () => {
  const { signup, user } = useAuth();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (user) {
      navigate("/swipeView");
    }
  }, [user]);

  const onSubmit = async (data) => {
    const result = await signup(data.name, data.email, data.password);

    if (result.success) {
      setMessage("");
      navigate("/swipeView");
      reset();
    } else {
      setMessage(result.message);
    }
  };

  return (
    <main>
      <section className="container mx-auto mt-20 justify-center items-center flex flex-col gap-15 ">
        <img src={Logo} alt="" />
        <h1 className="text-center font-medium text-xl">
          Welcome ! Create an account here
        </h1>
        <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("name")}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("password")}
              type="password"
              className="border rounded-2xl w-full px-3 py-2"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`bg-[#222222] py-2 px-4 rounded-2xl text-white w-full mb-4 cursor-pointer transition-opacity duration-300 ease-in-out`}
          >
            Register
          </button>
          {/* {(errors.email || errors.password || message) && (
            <p className="mb-2 text-center text-xs text-red-500">
              {errors.email?.message || errors.password?.message || message}
            </p>
          )} */}

          <div className="flex justify-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/" className="hover:underline">
                Click here
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateAccount;
