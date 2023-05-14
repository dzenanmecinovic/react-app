import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error 404/Error";
import AboutUs from "./pages/About-Us/About-Us";
import Hotels from "./pages/Hotels/Hotels";
import League from "./pages/League/League";
import Quotes from "./pages/Quotes/Quotes";
import Footer from "./components/Footer/Footer";
import Hotel from "./pages/Hotels/Hotel/Hotel";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import hotelsJSON from "./common/hotels.json";

export const BASE_URL = "https://api.quotable.io";

function App() {
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "75vh" }}>
        <Routes>
          <Route index element={token ? <League /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking/"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/league"
            element={
              <ProtectedRoute>
                <League />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotel:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
