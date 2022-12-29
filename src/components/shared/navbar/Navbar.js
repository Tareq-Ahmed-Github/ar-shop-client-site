import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div>
        <img src={logo} height="50px" width="80px" alt="" />
      </div>
      <div className="">
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-links" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-links" to="/banner">
          Banner
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
