import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 flex-col mt-72">
            <h1 className="font-bold text-7xl">SWIPE RIGHT </h1>
            <button className="py-4 px-6 bg-[#222222] rounded-full text-white text-center">
              Create Account
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
