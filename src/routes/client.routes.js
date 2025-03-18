const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');

// Create a new client
router.post('/', clientController.createClient);

// Get all clients or search by destination
router.get('/', clientController.getAllClients);

// Get a single client by id
router.get('/:id', clientController.getClientById);

// Update a client
router.put('/:id', clientController.updateClient);

// Delete a client
router.delete('/:id', clientController.deleteClient);

module.exports = router;
