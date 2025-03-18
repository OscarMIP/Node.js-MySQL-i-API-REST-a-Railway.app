const db = require('../config/db.config');

class Client {
    static async create(client) {
        const [result] = await db.execute(
            'INSERT INTO clients (name, surname, phone, email, travel_destination, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
            [client.name, client.surname, client.phone, client.email, client.travel_destination]
        );
        return result.insertId;
    }

    static async findAll() {
        const [rows] = await db.query('SELECT * FROM clients');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM clients WHERE id = ?', [id]);
        return rows[0];
    }

    static async findByDestination(destination) {
        const [rows] = await db.execute(
            'SELECT * FROM clients WHERE travel_destination LIKE ?',
            [`%${destination}%`]
        );
        return rows;
    }

    static async update(id, client) {
        const [result] = await db.execute(
            'UPDATE clients SET name = ?, surname = ?, phone = ?, email = ?, travel_destination = ? WHERE id = ?',
            [client.name, client.surname, client.phone, client.email, client.travel_destination, id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await db.execute('DELETE FROM clients WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = Client;
