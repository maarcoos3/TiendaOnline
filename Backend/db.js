// back/db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",       // Reemplaza con tu usuario de MySQL, por ejemplo "root"
  password: "", // Reemplaza con tu contraseña (a veces en XAMPP está vacío)
  database: "adidas_store",  // Asegúrate de haber creado esta base de datos en phpMyAdmin
});

const promisePool = pool.promise();

module.exports = promisePool;
