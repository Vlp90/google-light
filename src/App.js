import React from "react";
import "./App.css";
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
