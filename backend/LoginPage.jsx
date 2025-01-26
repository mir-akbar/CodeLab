// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the backend server

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  // Handle login
  const handleLogin = () => {
    if (username) {
      socket.emit('login', { username });
      socket.on('login-success', (data) => {
        setMessage(data.message);
      });
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
