const peerConnection = new RTCPeerConnection();

// When you want to send an offer:
const offer = await peerConnection.createOffer();
await peerConnection.setLocalDescription(new RTCSessionDescription(offer));
socket.emit('offer', offer, recipientSocketId);

// When you receive an answer:
const answer = new RTCSessionDescription(answer);
peerConnection.setRemoteDescription(answer);
