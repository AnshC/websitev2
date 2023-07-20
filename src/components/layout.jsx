import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import WebDev from "./pages/webdev";
import Resume from "./pages/resume";
export default function Layout() {
  return (
    <div className="layout">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about"/>
        <Route element={<WebDev />} path="/www" />
        <Route element={<Resume />} path="/resume" />
      </Routes>
    </div>
  );
}
