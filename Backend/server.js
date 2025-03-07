// back/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");
const opinionsRoutes = require("./routes/opinions");
const productsRoutes = require("./routes/products");
const authRoutes = require("./routes/auth"); 

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Endpoint de prueba
app.get("/api/test", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json(rows);
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error al conectar con la base de datos" });
  }
});

// Montar las rutas
app.use("/api/opinions", opinionsRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes); 

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
