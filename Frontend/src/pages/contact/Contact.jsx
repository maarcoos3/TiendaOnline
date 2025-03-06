import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opinion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/opinions/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      setFormData({ name: "", email: "", opinion: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar los datos");
    }
  };

  return (
    <main className="contact">
      <section className="store-card">
        <h2>Información de la Tienda</h2>
        <p>
          Adidas Store es líder en camisetas oficiales y accesorios de fútbol.
          Nos enorgullece ofrecer productos de alta calidad y un servicio excepcional.
        </p>
      </section>

      <section className="map">
        <h3>Ubicación</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.95373631531647!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f9fd81%3A0x2b15b2ea926f5f93!2sAdidas%20Store!5e0!3m2!1sen!2sus!4v1622907233173!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Ubicación de Adidas Store"
        ></iframe>
      </section>

      <section className="contact-form-section">
        <h3>Déjanos tu opinión</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Opinión:
            <textarea
              name="opinion"
              value={formData.opinion}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
