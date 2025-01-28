// // const express = require('express'); // Import Express
// // const app = express(); // Initialize the Express app

// // const port = 3000; // Define the server port

// // // Middleware to parse JSON request bodies
// // app.use(express.json());

// // // API endpoint for POST requests
// // app.post('/api/post', (req, res) => {
// //     const { title = '', description = '', link = '' } = req.body;

// //     const response = {
// //         id: Math.random().toString(36).substr(2, 5), // Generate a random ID
// //         title,
// //         description,
// //         link,
// //     };

// //     console.log('POST received:', response); // Log the received data
// //     res.json(response); // Respond with the generated data
// // });

// // // API endpoint to show user information
// // app.get('/users', async (req, res) => {
// //     // Simulated user data
// //     const userInfo = {
// //         id: 'test',
// //         name: 'John Doe',
// //         createdAt: new Date().toISOString(),
// //     };

// //     console.log('User information:', userInfo); // Log the user information
// //     res.json(userInfo); // Send the user information as a response
// // });

// // // Helper function to simulate fetching user data
// // async function getUserData(data) {
// //     return {
// //         id: 'test',
// //         name: data.title || 'Default User',
// //         createdAt: new Date().toISOString(),
// //     };
// // }

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });


// const WebSocket = require('ws'); // Import WebSocket module

// // Create a WebSocket server on port 3000
// const server = new WebSocket.Server({ port: 3000 });

// console.log('WebSocket server started on ws://localhost:3000');

// // Handle connection event
// server.on('connection', (socket) => {
//     console.log('Client connected');

//     // Listen for messages from the client
//     socket.on('message', (message) => {
//         console.log('Received from client:', message);

//         // Parse the received message (JSON format)
//         const { username, password } = JSON.parse(message);

//         // Handle username and password validation (mock example)
//         if (username === 'admin' && password === 'password123') {
//             // Send a success message back to the client
//             socket.send(JSON.stringify({ message: 'Login successful!' }));
//         } else {
//             // Send an error message back to the client
//             socket.send(JSON.stringify({ message: 'Invalid username or password.' }));
//         }
//     });

//     // Handle socket close event
//     socket.on('close', () => {
//         console.log('Client disconnected');
//     });

//     // Handle errors
//     socket.on('error', (error) => {
//         console.error('WebSocket error:', error);
//     });
// });


const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

console.log('WebSocket server started on ws://localhost:3000');

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', (message) => {
        try {
            // Convert the Buffer to a string and parse it as JSON
            const data = JSON.parse(message.toString());
            console.log('Received from client:', data);
            
            // Respond to the client
            ws.send(JSON.stringify({ message: 'Login data received successfully!' }));
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

