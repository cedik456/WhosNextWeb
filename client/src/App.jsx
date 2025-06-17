import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SwipeView from "./pages/SwipeView";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/swipeView" element={<SwipeView />} />
    </Routes>
  );
};

export default App;
