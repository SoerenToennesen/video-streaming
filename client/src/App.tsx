import React from "react";
import { Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Player from "./Player";

function App() {
  return (
      <div className="App">
          <header className="App-header">
            <video controls muted>
              <source src="http://localhost:4000/video" type="video/mp4"></source>
            </video>
          </header>
      </div>
  )
}

export default App