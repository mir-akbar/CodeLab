// // const express = require('express');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Mock user (for demo purposes, replace with database logic)
// // const users = [{ username: 'user1', password: '$2a$10$Vz16TQwvhlTZKbR1BzxAAOj3ZT4KVs0/XB9C9HqjxKpyuykXy9owu' }]; // password: 'password123'

// // // Login route
// // app.post('/login', (req, res) => {
// //     const { username, password } = req.body;
// //     const user = users.find(u => u.username === username);
    
// //     if (!user) return res.status(400).send('User not found');

// //     bcrypt.compare(password, user.password, (err, isMatch) => {
// //         if (err) throw err;
// //         if (!isMatch) return res.status(400).send('Invalid credentials');

// //         const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
// //         res.json({ message: 'Login successful', token });
// //     });
// // });

// // // Start server
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });


// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// // Mock database (in-memory)
// let users = [];

// app.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;
//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   // Check if email already exists (mock check)
//   const userExists = users.find(user => user.email === email);
//   if (userExists) {
//     return res.status(400).json({ success: false, message: 'Email already exists.' });
//   }

//   // Simulate creating the user
//   users.push({ name, email, password });
//   res.json({ success: true, message: 'Account created successfully!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// server.js
const http = require('http');
const socketIo = require('socket.io');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Socket.io events
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  // Handle signaling messages
  socket.on('offer', (offer, to) => {
    io.to(to).emit('offer', offer);
  });

  socket.on('answer', (answer, to) => {
    io.to(to).emit('answer', answer);
  });

  socket.on('ice-candidate', (candidate, to) => {
    io.to(to).emit('ice-candidate', candidate);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Listen for incoming requests
server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
