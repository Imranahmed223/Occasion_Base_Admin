import React from "react";
import "./Navbar.scss";

// Asssests
import logo from "../../assests/navbar/navlogo.svg";
import menu from "../../assests/navbar/menu.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-container-search"></div>
          <div className="navbar-container-menu">
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
