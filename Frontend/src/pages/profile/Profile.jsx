import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user ? user.name : "",
    username: user ? user.username : "",
    email: user ? user.email : "",
    password: "",
  });

  // redirige a login
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password, 
        }),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Actualiza el usuario
        updateUser(result.user);
        setIsEditing(false);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error al actualizar datos:", error);
      alert("Error al actualizar los datos");
    }
  };

  return (
    <main className="profile">
      <h2>Perfil del Usuario</h2>
      {isEditing ? (
        <form onSubmit={handleSave} className="profile-form">
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
              placeholder="Ingresa nueva contraseña si deseas cambiarla"
            />
          </label>
          <button type="submit">Guardar cambios</button>
        </form>
      ) : (
        <div className="profile-info">
          <p>
            <strong>Nombre:</strong> {user.name}
          </p>
          <p>
            <strong>Usuario:</strong> {user.username}
          </p>
          <p>
            <strong>Correo:</strong> {user.email}
          </p>
          <p>
            <strong>Contraseña:</strong> (Encriptada)
          </p>
          <button onClick={handleEditClick}>Modificar datos</button>
        </div>
      )}
      <button className="logout-button" onClick={logout}>
        Cerrar Sesión
      </button>
    </main>
  );
};

export default Profile;
