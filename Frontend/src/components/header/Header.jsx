import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-top">
        <h1>Adidas Store</h1>
        <div className="user-cart">
          {user ? (
            <>
              <Link to="/perfil" className="user-name-link">
                <span className="user-name">Hola, {user.name}</span>
              </Link>
              <button className="logout-button" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
          <Link to="/carrito" className="cart-link">
            Carrito ({totalItems})
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/certificacion">Certificación</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
