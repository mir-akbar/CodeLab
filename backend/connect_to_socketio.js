import { useEffect } from 'react';
import io from 'socket.io-client';

// Create a socket connection
const socket = io('http://localhost:5000');

useEffect(() => {
  socket.on('offer', (offer) => {
    // Handle the incoming offer
  });
  
  socket.on('answer', (answer) => {
    // Handle the incoming answer
  });

  socket.on('ice-candidate', (candidate) => {
    // Handle ICE candidates
  });
}, []);
