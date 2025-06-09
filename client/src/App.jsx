import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SwipeView from "./pages/SwipeView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swipeView" element={<SwipeView />} />
    </Routes>
  );
};

export default App;
