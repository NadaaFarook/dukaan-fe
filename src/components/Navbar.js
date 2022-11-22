import React from "react";
import { Logo } from "../images/index";
const Navbar = () => {
  return (
    <nav className="section-navbar">
      <div className="container overflow">
        <div className="navbar-wrapper">
          <img src={Logo} loading="lazy" alt="" />
          <div className="nav-links-wrapper">
            <a href="#" className="link">
              Sign In
            </a>
            <a href="#" className="btn-white">
              Dukaan for PC
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
