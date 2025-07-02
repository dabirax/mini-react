import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const submenuRef = useRef(null);

  useEffect(() => {
    const submenu = submenuRef.current;
    const { center, bottom } = location;
    submenu.style.left =`${center}px`
    submenu.style.top =`${bottom}px`
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}
      ref={submenuRef}
    >
      Submenu
    </aside>
  );
};

export default Submenu;
