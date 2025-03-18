const app = require('./app'); // Importa app.js
const port = 3000; // Cambia el puerto si es necesario

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

