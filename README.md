# Travel Agency API

A REST API for managing travel agency clients built with Node.js, Express, and MySQL.

## Project Structure
```
travel-agency-api/
├── src/
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   │   └── client.controller.js
│   ├── models/
│   │   └── client.model.js
│   ├── routes/
│   │   └── client.routes.js
│   ├── database/
│   │   └── schema.sql
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and configure your database settings
4. Create the database and tables using the SQL script in `src/database/schema.sql`
5. Start the server:
   ```bash
   node src/server.js
   ```

## API Endpoints

### Clients

- `POST /api/clients` - Create a new client
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get a client by ID
- `GET /api/clients?destination=Paris` - Search clients by destination
- `PUT /api/clients/:id` - Update a client
- `DELETE /api/clients/:id` - Delete a client

### Test Endpoint
- `GET /api/ping` - Test if the API is working

## Request Examples

### Create Client
```http
POST /api/clients
Content-Type: application/json

{
    "name": "Joan",
    "surname": "Garcia",
    "phone": "666111222",
    "email": "joan.garcia@email.com",
    "travel_destination": "Paris"
}
```

### Search by Destination
```http
GET /api/clients?destination=Paris
```

## Response Examples

### Success Response
```json
{
    "id": 1,
    "name": "Joan",
    "surname": "Garcia",
    "phone": "666111222",
    "email": "joan.garcia@email.com",
    "travel_destination": "Paris",
    "created_at": "2025-03-16T15:30:00.000Z"
}
```

### Error Response
```json
{
    "message": "Client not found"
}
```
