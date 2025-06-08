import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <section className="container mx-auto ">
          <div className="flex justify-center items-center gap-8 flex-col mt-72">
            <h1 className="font-bold text-7xl">SWIPE RIGHT </h1>
            <button className="py-4 px-6 bg-[#222222] rounded-full text-white text-center">
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
