import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";

import "./Main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
