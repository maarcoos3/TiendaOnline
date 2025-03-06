 
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Adidas Store</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
