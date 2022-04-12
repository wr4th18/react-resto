import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { swipes } from "./components/secondPage/data";
import { items } from "./components/menu/data";

const AppContext = React.createContext();

const initialState = {
  ingredients: [],
  orders: [],
  stateSwipes: swipes,
  menuItems: items,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (id, title) => {
    dispatch({ type: "ADD_ITEM", payload: id, title: title });
  };

  const filterItems = (category) => {
    dispatch({
      type: "FILTER_ITEMS",
      payload: items,
      category: category,
    });
  };

  const order = (id) => {
    dispatch({ type: "ORDER", payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, addItem, filterItems, order }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
