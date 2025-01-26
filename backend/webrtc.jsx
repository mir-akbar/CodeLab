// src/components/CollaborationPanel.jsx
import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the backend server

const CollaborationPanel = () => {
  const videoRef = useRef();
  const peerConnection = useRef(null);

  useEffect(() => {
    // Initialize WebRTC Peer Connection
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', event.candidate);
      }
    };

    peerConnection.current.ontrack = (event) => {
      videoRef.current.srcObject = event.streams[0];
    };

    // Listen for WebRTC signaling
    socket.on('offer', async (offer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('answer', answer);
    });

    socket.on('answer', (answer) => {
      peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('candidate', (candidate) => {
      peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    // Get user media (video/audio)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        peerConnection.current.addStream(stream);
      })
      .catch((err) => console.error('Error getting media: ', err));

    return () => {
      socket.disconnect();
    };
  }, []);

  // Call to initiate WebRTC connection
  const handleStartCall = async () => {
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit('offer', offer);
  };

  return (
    <div>
      <h2>Collaboration Panel</h2>
      <video ref={videoRef} autoPlay playsInline></video>
      <button onClick={handleStartCall}>Start Call</button>
    </div>
  );
};

export default CollaborationPanel;
