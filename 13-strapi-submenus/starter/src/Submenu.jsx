import React, { useEffect, useRef, useState, useTransition } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    currentPage: { page, links },
  } = useGlobalContext();
  const submenuRef = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns('col-2');
    const submenu = submenuRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

  if (links.length === 3) {
    setColumns("col-3");
  }
  if (links.length === 4) {
    setColumns("col-4");
  }
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}
      ref={submenuRef}
    >
      <div className={`submenu-center ${columns}`}>
        {links.map((index, link) => {
          const { label, icon, url } = index;
          return (
            <a href={url} key={link}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
