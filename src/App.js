import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cities from "./components/Pages/Cities";
import Results from "./components/Pages/Results";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-text" href="./">
                City List
              </a>
              <a className="navbar-text" href="./results">
                Results
              </a>
            </nav>
            <Routes>
              <Route path="/" element={<Cities />}/>
              <Route path="/results" element={<Results query={"testquery"} />}/>
            </Routes>

          </div>
        </Router>
    )
  }
}

export default App;