// back/routes/opinions.js
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/save", async (req, res) => {
  const { name, email, opinion } = req.body;

  if (!name || !email || !opinion) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  try {
    const sql = "INSERT INTO opinions (name, email, opinion) VALUES (?, ?, ?)";
    const [result] = await db.query(sql, [name, email, opinion]);
    res.json({ message: "Datos guardados correctamente", id: result.insertId });
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res.status(500).json({ error: "Error al guardar los datos" });
  }
});

module.exports = router;
