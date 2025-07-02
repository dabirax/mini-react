import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <AppProvider
      value={{
        isSubmenuOpen,
        isSideBarOpen,
        openSubmenu,
        openSideBar,
        closeSubmenu,
        closeSideBar,
      }}
    >
      {children}
    </AppProvider>
  );
};

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}