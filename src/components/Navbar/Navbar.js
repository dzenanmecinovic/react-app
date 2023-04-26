import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const acitveStyles = {
    backgroundColor: "#252525",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
  };
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <header className="header">
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h2 style={{ fontFamily: "Arial" }}>Login</h2>
      </NavLink>
      <NavLink
        to={"/about-us"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h2 style={{ fontFamily: "Arial" }}>About Us</h2>
      </NavLink>
      <NavLink
        to={"/booking"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h2 style={{ fontFamily: "Arial" }}>Booking</h2>
      </NavLink>
    </header>
  );
}

export { Navbar };
