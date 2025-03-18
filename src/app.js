const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.get('/api/ping', (req, res) => {
    res.send('Pong!');
  });
  

// Exporta la app para que pueda ser usada en otros archivos
module.exports = app;
