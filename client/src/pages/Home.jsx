import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Avatars from "../assets/Pic.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main
        className="flex-grow bg-[#F2F2F2] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Avatars})` }}
      >
        <section className="container mx-auto  ">
          <div className="flex justify-center items-center gap-8 flex-col mt-72 relative">
            <h1 className="font-bold text-7xl">Connect </h1>
            <button className="py-4 px-6 bg-[#222222] rounded-full text-white text-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
              Create Account
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
