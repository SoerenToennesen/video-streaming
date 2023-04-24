import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import {Player} from "./Player";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/player/:id" element={<Player/>} />
          </Routes>
      </Router>
  )
}

export default App