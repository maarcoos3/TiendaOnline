import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Si no hay usuario, redirige a login
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className="profile">
      <h2>Perfil del Usuario</h2>
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
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </main>
  );
};

export default Profile;
