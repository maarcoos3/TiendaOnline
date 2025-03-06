import React from "react";
import "./Certification.css";

const Certification = () => {
  return (
    <main className="certification">
      <section className="cert-hero">
        <div className="cert-hero-overlay">
          <h2>Nuestras Certificaciones</h2>
          <p>
            Descubre los reconocimientos que avalan la calidad, sostenibilidad y autenticidad de nuestros productos.
          </p>
        </div>
      </section>

      <section className="cert-details">
        <h3>Certificaciones Destacadas</h3>
        <div className="certifications-list">
          <div className="cert-card">
            <img src="/images/certf/certCalidad.jpg" alt="Certificación de Calidad" />
            <h4>Calidad</h4>
            <p>Estándares internacionales de calidad.</p>
          </div>
          <div className="cert-card">
            <img src="/images/certf/certAmbiental.jpg" alt="Certificación Ambiental" />
            <h4>Ambiental</h4>
            <p>Sostenibilidad y cuidado del medio ambiente.</p>
          </div>
          <div className="cert-card">
            <img src="/images/certf/certAutenticidad.jpg" alt="Certificación de Autenticidad" />
            <h4>Autenticidad</h4>
            <p>Originalidad en productos oficiales.</p>
          </div>
        </div>
      </section>

      <section className="cert-additional">
        <h3>Más Información</h3>
        <p>
          Conoce más sobre nuestros procesos de control de calidad y sostenibilidad. Contáctanos para detalles o visita nuestra sección de preguntas frecuentes.
        </p>
      </section>
    </main>
  );
};

export default Certification;
