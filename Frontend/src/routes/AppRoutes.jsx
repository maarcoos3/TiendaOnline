// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Contact from "../pages/contact/Contact";
import ProductDetail from "../pages/productDetails/ProductDetail";
import Certification from "../pages/certification/Certification";
import CartPage from "../pages/cart/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/productos/:id" element={<ProductDetail />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/certificacion" element={<Certification />} />
      <Route path="/carrito" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
