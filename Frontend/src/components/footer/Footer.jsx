import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="">Configuración de las cookies</Link>
        <span>|</span>
        <Link to="">Gestionar Datos</Link>
        <span>|</span>
        <Link to="">Cookies</Link>
        <span>|</span>
        <Link to="">Aviso de privacidad</Link>
        <span>|</span>
        <Link to="">Términos y Condiciones</Link>
      </div>
      <p>© 2023 Adidas Store. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
