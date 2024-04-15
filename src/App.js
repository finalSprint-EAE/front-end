import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/results" element={<Results query={"testquery"} />}/>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>

          </div>
        </Router>
    )
  }

}

export default App;