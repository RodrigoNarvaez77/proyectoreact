import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Construccion from "./components/secciones/Construccion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/construccion" element={<Construccion />} />
      </Routes>
    </Router>
  );
}

export default App;
