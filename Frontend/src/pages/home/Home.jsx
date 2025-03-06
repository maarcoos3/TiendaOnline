import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h2>Bienvenido a Adidas Store</h2>
          <p>Descubre las mejores camisetas de fútbol de Adidas.</p>
        </div>
      </section>
      <section className="store-info">
        <h3>Nuestra tienda</h3>
        <p>Ofrecemos productos oficiales y de alta calidad.</p>
        <div className="info-cards">
          <div className="card">
            <h4>Calidad</h4>
            <p>Productos garantizados y oficiales.</p>
          </div>
          <div className="card">
            <h4>Variedad</h4>
            <p>Amplia gama de camisetas y accesorios.</p>
          </div>
          <div className="card">
            <h4>Servicio</h4>
            <p>Atención personalizada y entrega rápida.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

