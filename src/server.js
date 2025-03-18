const app = require('./app'); // './app' porque está en la misma carpeta
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
