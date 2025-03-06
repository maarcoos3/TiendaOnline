// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Contact from "../pages/contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
