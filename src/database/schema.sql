
CREATE DATABASE IF NOT EXISTS travel_agency;
USE travel_agency;


CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    travel_destination VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO clients (name, surname, phone, email, travel_destination) VALUES
    ('Jana', 'Garcia', '666111222', 'jana.garcia@email.com', 'Paris'),
    ('Abril', 'López', '666333444', 'abril.lopez@email.com', 'Rome'),
    ('Marc', 'Martí', '666555666', 'marc.marti@email.com', 'London'),
    ('Lluis', 'Ferrer', '666777888', 'lluis.ferrer@email.com', 'Barcelona');
