import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "MusicZone-Spotify Clone";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}


// Code By Dinesh Jayavel
//MusicZone is Spotify Clone.
// You need Spotify Premier Account to access full funcitionality of MusicZone
// Command For Run This Code 
// npm start