import React from "react";
import logo from "./logo.svg";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>
        <div className=" item-container show-container">
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="# ">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </div>
      <ul className="social-icons">
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
