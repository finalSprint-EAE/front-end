import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "../components/Pages/Results";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    )
}