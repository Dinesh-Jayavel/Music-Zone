import React from "react";
import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);


// Code By Dinesh Jayavel
//MusicZone is Spotify Clone.
// You need Spotify Premier Account to access full funcitionality of MusicZone
// Command For Run This Code 
// npm start