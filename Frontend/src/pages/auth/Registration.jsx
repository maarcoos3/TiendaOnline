import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/login");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <main className="registration">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="registration-form">
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
          Usuario:
          <input
            type="text"
            name="username"
            value={formData.username}
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
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
      <div className="login-container">
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login" className="login-button">
          Iniciar Sesión
        </Link>
      </div>
    </main>
  );
};

export default Registration;
