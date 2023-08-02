import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/Reducer";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Code By Dinesh Jayavel
//MusicZone is Spotify Clone.
// You need Spotify Premier Account to access full funcitionality of MusicZone
// Command For Run This Code 
// npm start