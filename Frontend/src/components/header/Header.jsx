// src/components/header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Adidas Store</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/certificacion">Certificación</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/carrito" className="cart-link">
          Carrito ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
