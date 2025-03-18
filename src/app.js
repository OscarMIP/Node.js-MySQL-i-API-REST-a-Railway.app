const express = require('express');
const db = require('./db'); // Importa la conexión MySQL
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas
// GET: Obtener todos los ítems
app.get('/api/items', (req, res) => {
  const sql = 'SELECT * FROM items'; // Consulta para obtener todos los datos
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error al servidor');
      return;
    }
    res.json(results);
  });
});

// POST: Crear un nuevo ítem
app.post('/api/items', (req, res) => {
  const { name, value } = req.body;
  const sql = 'INSERT INTO items (name, value) VALUES (?, ?)';
  db.query(sql, [name, value], (err, result) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      res.status(500).send('Error al servidor');
      return;
    }
    res.json({ message: 'Ítem creado', id: result.insertId });
  });
});

// PUT: Actualizar un ítem por ID
app.put('/api/items/:id', (req, res) => {
  const { name, value } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE items SET name = ?, value = ? WHERE id = ?';
  db.query(sql, [name, value, id], (err) => {
    if (err) {
      console.error('Error al actualizar datos:', err);
      res.status(500).send('Error al servidor');
      return;
    }
    res.json({ message: `Ítem con ID ${id} actualizado` });
  });
});

// DELETE: Eliminar un ítem por ID
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM items WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) {
      console.error('Error al eliminar datos:', err);
      res.status(500).send('Error al servidor');
      return;
    }
    res.json({ message: `Ítem con ID ${id} eliminado` });
  });
});

module.exports = app;
