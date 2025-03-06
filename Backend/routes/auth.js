// back/routes/auth.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

// Endpoint para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }
  try {
    // Verificar si el correo o el usuario ya existen
    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username]
    );
    if (existingUsers.length > 0) {
      return res.status(400).json({ error: "El correo o usuario ya existe" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";
    const [result] = await db.query(sql, [name, username, email, hashedPassword]);
    res.json({ message: "Usuario registrado correctamente", userId: result.insertId });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

// Endpoint para iniciar sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Correo y contraseña son requeridos" });
  }
  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }
    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }
    // Extraer y retornar los datos necesarios (evitando enviar la contraseña)
    const { id, name, username, email: userEmail } = user;
    res.json({
      message: "Inicio de sesión exitoso",
      user: { id, name, username, email: userEmail },
    });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

module.exports = router;
