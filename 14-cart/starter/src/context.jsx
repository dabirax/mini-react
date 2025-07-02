import { useContext,useState, useReducer, useEffect, createContext } from "react";

import cartItems from "./data";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [cart, setCart] = useState(cartItems);
  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
