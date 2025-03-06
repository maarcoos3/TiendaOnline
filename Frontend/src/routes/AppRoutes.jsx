// Ejemplo en AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Contact from "../pages/contact/Contact";
import Certification from "../pages/certification/Certification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/certificacion" element={<Certification />} />
    </Routes>
  );
};

export default AppRoutes;
