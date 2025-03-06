// back/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Conexión a la base de datos (opcional para el endpoint de prueba)
const opinionsRoutes = require("./routes/opinions");

const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

// Middleware para parsear JSON y datos URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Endpoint de prueba para verificar la conexión a la base de datos
app.get("/api/test", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json(rows);
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error al conectar con la base de datos" });
  }
});

// Montar el router de opiniones en el endpoint /api/opinions
app.use("/api/opinions", opinionsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
