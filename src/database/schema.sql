-- Create database
CREATE DATABASE IF NOT EXISTS travel_agency;
USE travel_agency;

-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    travel_destination VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO clients (name, surname, phone, email, travel_destination) VALUES
    ('Joan', 'Garcia', '666111222', 'joan.garcia@email.com', 'Paris'),
    ('Maria', 'López', '666333444', 'maria.lopez@email.com', 'Rome'),
    ('Pere', 'Martí', '666555666', 'pere.marti@email.com', 'London'),
    ('Anna', 'Ferrer', '666777888', 'anna.ferrer@email.com', 'Barcelona');
