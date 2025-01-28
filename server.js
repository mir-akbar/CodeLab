const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// Dummy username and password for the sake of this example
const correctUsername = 'user1';
const correctPassword = 'password123';

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Attach WebSocket server to HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message.toString());
            console.log('Received from client:', data);

            // Check if the username and password match the correct ones
            if (data.username === correctUsername && data.password === correctPassword) {
                ws.send(JSON.stringify({ message: 'Login successful!' }));
            } else {
                ws.send(JSON.stringify({ message: 'Username or password is wrong!' }));
            }
        } catch (err) {
            console.error('Error parsing message:', err);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server on a single port
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
