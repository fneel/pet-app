
import './App.css';
import React, { Fragment } from "react";
import "./index.css"
import "./views/LoginView"

import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
          <ul>
            <li>JAHAOKEJ</li>
            <li>JAHAOKEJ</li>
            <li>JAHAOKEJ</li>
          </ul>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
