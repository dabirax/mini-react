import React from "react";
import { useGlobalContext } from "./context";
import react from "./assets/react.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContext;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 3;

    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={react} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              onMouseOut={closeSubmenu}
            >
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
