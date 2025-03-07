import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetail from "../pages/productDetails/ProductDetail";
import Contact from "../pages/contact/Contact";
import Certification from "../pages/certification/Certification";
import CartPage from "../pages/cart/CartPage";
import Registration from "../pages/auth/Registration";
import Login from "../pages/auth/Login";
import Purchase from "../pages/purchase/Purchase";
import Profile from "../pages/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/productos/:id" element={<ProductDetail />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/certificacion" element={<Certification />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/registro" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/compra" element={<Purchase />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
