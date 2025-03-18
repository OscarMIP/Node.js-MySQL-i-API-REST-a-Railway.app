const Client = require('../models/client.model');

exports.createClient = async (req, res) => {
    try {
        const clientId = await Client.create(req.body);
        const client = await Client.findById(clientId);
        res.status(201).json(client);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(500).json({ message: 'Error creating client' });
    }
};

exports.getAllClients = async (req, res) => {
    try {
        const { destination } = req.query;
        let clients;
        
        if (destination) {
            clients = await Client.findByDestination(destination);
        } else {
            clients = await Client.findAll();
        }
        
        res.json(clients);
    } catch (error) {
        console.error('Error getting clients:', error);
        res.status(500).json({ message: 'Error retrieving clients' });
    }
};

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.json(client);
    } catch (error) {
        console.error('Error getting client:', error);
        res.status(500).json({ message: 'Error retrieving client' });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const success = await Client.update(req.params.id, req.body);
        if (!success) {
            return res.status(404).json({ message: 'Client not found' });
        }
        const updatedClient = await Client.findById(req.params.id);
        res.json(updatedClient);
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(500).json({ message: 'Error updating client' });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const success = await Client.delete(req.params.id);
        if (!success) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ message: 'Error deleting client' });
    }
};
