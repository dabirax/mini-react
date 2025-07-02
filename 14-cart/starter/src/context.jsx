import {
  useContext,
  useState,
  useReducer,
  useEffect,
  createContext,
} from "react";

import cartItems from "./data";
import reducer from "./reducer";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
