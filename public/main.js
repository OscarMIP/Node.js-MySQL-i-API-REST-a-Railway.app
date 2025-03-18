document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.getElementById('clientForm');
    const clientsTableBody = document.getElementById('clientsTableBody');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const saveButton = document.getElementById('saveClient');
    const clientModal = new bootstrap.Modal(document.getElementById('clientModal'));

    // Load clients on page load
    loadClients();

    // Search functionality
    searchButton.addEventListener('click', () => {
        const destination = searchInput.value;
        loadClients(destination);
    });

    // Save client
    saveButton.addEventListener('click', async () => {
        const clientId = document.getElementById('clientId').value;
        const clientData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            travel_destination: document.getElementById('travel_destination').value
        };

        try {
            if (clientId) {
                await updateClient(clientId, clientData);
            } else {
                await createClient(clientData);
            }
            clientModal.hide();
            loadClients();
            clientForm.reset();
        } catch (error) {
            console.error('Error saving client:', error);
            alert('Error saving client');
        }
    });

    // Reset form when modal is closed
    document.getElementById('clientModal').addEventListener('hidden.bs.modal', () => {
        clientForm.reset();
        document.getElementById('clientId').value = '';
        document.getElementById('modalTitle').textContent = 'Nou Client';
    });
});

async function loadClients(destination = '') {
    try {
        const url = destination ? `/api/clients?destination=${encodeURIComponent(destination)}` : '/api/clients';
        const response = await fetch(url);
        const clients = await response.json();
        displayClients(clients);
    } catch (error) {
        console.error('Error loading clients:', error);
        alert('Error loading clients');
    }
}

function displayClients(clients) {
    const clientsTableBody = document.getElementById('clientsTableBody');
    clientsTableBody.innerHTML = '';

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.surname}</td>
            <td>${client.phone}</td>
            <td>${client.email}</td>
            <td>${client.travel_destination}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary btn-action" onclick="editClient(${client.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger btn-action" onclick="deleteClient(${client.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        clientsTableBody.appendChild(row);
    });
}

async function createClient(clientData) {
    const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    });

    if (!response.ok) {
        throw new Error('Error creating client');
    }

    return response.json();
}

async function updateClient(id, clientData) {
    const response = await fetch(`/api/clients/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    });

    if (!response.ok) {
        throw new Error('Error updating client');
    }

    return response.json();
}

async function deleteClient(id) {
    if (!confirm('Are you sure you want to delete this client?')) {
        return;
    }

    try {
        const response = await fetch(`/api/clients/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error deleting client');
        }

        loadClients();
    } catch (error) {
        console.error('Error deleting client:', error);
        alert('Error deleting client');
    }
}

async function editClient(id) {
    try {
        const response = await fetch(`/api/clients/${id}`);
        const client = await response.json();

        document.getElementById('clientId').value = client.id;
        document.getElementById('name').value = client.name;
        document.getElementById('surname').value = client.surname;
        document.getElementById('phone').value = client.phone;
        document.getElementById('email').value = client.email;
        document.getElementById('travel_destination').value = client.travel_destination;
        document.getElementById('modalTitle').textContent = 'Editar Client';

        const clientModal = new bootstrap.Modal(document.getElementById('clientModal'));
        clientModal.show();
    } catch (error) {
        console.error('Error loading client:', error);
        alert('Error loading client');
    }
}
