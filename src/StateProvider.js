import React, { createContext, useContext, useReducer } from "react";

// preparing the data Layer
export const StateContext = createContext();

// higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// hook which allow us to pull informations from data layer
export const useStateValue = () => useContext(StateContext);
