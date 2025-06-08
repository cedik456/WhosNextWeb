import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto px-4">
          <div className="flex justify-center">
            <h1 className="font-bold text-7xl">SWIPE RIGHT </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
