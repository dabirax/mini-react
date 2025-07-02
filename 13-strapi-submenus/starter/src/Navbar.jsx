import React from "react";
import { useGlobalContext } from "./context";
import react from './assets/react.svg'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={react} alt="stripe" className="nav-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
