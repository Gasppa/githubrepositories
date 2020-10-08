import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Content from "./components/content.component"

import "./App.css"

function App() {

  useEffect(() => {
    document.title = "Teste Técnico"
  }, [])

  return (
    <Router>
      <Navbar />
      <br/>

      <Content/>
    </Router>
  );
}

export default App;
