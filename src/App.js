import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error 404/Error";
import AboutUs from "./pages/About-Us/About-Us";
import Hotels from "./pages/Hotels/Hotels";
import League from "./pages/League/League";
import Quotes from "./pages/Quotes/Quotes";
import Footer from "./components/Footer/Footer";

export const BASE_URL = "https://api.quotable.io";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Hotels />} />
        <Route path="/league" element={<League />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
