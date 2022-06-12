import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
export default function Layout() {
  return (
    <div className="layout">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}
