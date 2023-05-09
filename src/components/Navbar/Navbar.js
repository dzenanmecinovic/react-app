import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const changeView = localStorage.getItem("token");
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
  return (
    <>
      {changeView ? (
        <header className="header">
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
        </header>
      ) : (
        <header className="header">
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
        </header>
      )}
    </>
  );
}
