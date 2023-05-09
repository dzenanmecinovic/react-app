import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { token, setToken } = useContext(AppContext);
  const navigation = useNavigate();
  const batn = function () {
    localStorage.removeItem("token");
    setToken(null);
    navigation("/login");
  };
  const activeStyles = {
    backgroundColor: "#252525",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
  };
  const styles = {
    textDecoration: "none",
    color: "black",
  };

  useEffect(() => {}, [token]);
  return (
    <header className="header">
      {token ? (
        <>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Home</h2>
          </NavLink>
          <NavLink
            to={"/about-us"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>About Us</h2>
          </NavLink>
          <NavLink
            to={"/booking"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Booking</h2>
          </NavLink>
          <NavLink
            to={"/league"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Premier League</h2>
          </NavLink>
          <NavLink
            to={"/quotes"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Quotes</h2>
          </NavLink>
          <button style={{ width: "fit-content" }} onClick={batn}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Home</h2>
          </NavLink>
          <NavLink
            to={"/login"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Login</h2>
          </NavLink>
          <NavLink
            to={"/register"}
            style={({ isActive }) => (isActive ? activeStyles : styles)}
          >
            <h2 style={{ fontFamily: "Arial" }}>Register</h2>
          </NavLink>
        </>
      )}
    </header>
  );
}
