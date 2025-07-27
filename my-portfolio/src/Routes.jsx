import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";

function AppRoutes() {
  return (
    <div className="main-content">
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default AppRoutes;
