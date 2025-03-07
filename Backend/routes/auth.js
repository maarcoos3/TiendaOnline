const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

// nuevo usuario
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

// iniciar sesión
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



router.put("/update", async (req, res) => {
  const { id, name, username, email, password } = req.body;
  if (!id || !name || !username || !email) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }
  try {
    let sql, params;
    // hashear nueva contraseña si se proporciona
    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      sql = "UPDATE users SET name = ?, username = ?, email = ?, password = ? WHERE id = ?";
      params = [name, username, email, hashedPassword, id];
    } else {
      
      sql = "UPDATE users SET name = ?, username = ?, email = ? WHERE id = ?";
      params = [name, username, email, id];
    }
    await db.query(sql, params);
    
    const [rows] = await db.query("SELECT id, name, username, email FROM users WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Datos actualizados correctamente", user: rows[0] });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});


module.exports = router;
