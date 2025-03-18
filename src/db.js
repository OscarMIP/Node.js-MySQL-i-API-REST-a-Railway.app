const mysql = require('mysql2');
require('dotenv').config(); // Carrega les variables d'entorn des de .env

// Configuració de la connexió utilitzant variables d'entorn
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Utilitza variables d'entorn
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Establir la connexió
db.connect((err) => {
  if (err) {
    console.error('Error al connectar amb MySQL:', err);
    return;
  }
  console.log('Conexió exitosa a MySQL!');
});

module.exports = db;

