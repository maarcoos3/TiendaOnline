import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-overlay">
          <h2>Bienvenido a Adidas Store</h2>
          <p>Descubre las mejores camisetas de fútbol de Adidas.</p>
        </div>
      </section>

      {/* Sección Información de la tienda */}
      <section className="store-info">
        <h3>Nuestra tienda</h3>
        <p>Ofrecemos productos oficiales y de alta calidad.</p>
        <div className="info-cards">
          <Link to="/productos" className="card">
            <h4>Calidad</h4>
            <p>Productos garantizados y oficiales.</p>
          </Link>
          <Link to="/certificacion" className="card">
            <h4>Variedad</h4>
            <p>Amplia gama de camisetas y accesorios.</p>
          </Link>
          <Link to="/contacto" className="card">
            <h4>Servicio</h4>
            <p>Atención personalizada y entrega rápida.</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
