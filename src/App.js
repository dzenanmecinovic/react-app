import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error 404/Error";
import AboutUs from "./pages/About-Us/About-Us";
import Hotels from "./pages/Hotels/Hotels";
import League from "./pages/League/League";
import Quotes from "./pages/Quotes/Quotes";
import Footer from "./components/Footer/Footer";
import Hotel from "./pages/Hotels/Hotel/Hotel";
import { Loginn } from "./pages/Loginn/Loginn";
import { Register } from "./pages/Register/Register";

export const BASE_URL = "https://api.quotable.io";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index />
        <Route path="/login" element={<Loginn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Hotels />} />
        <Route path="/league" element={<League />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/hotel:id" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
