const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Enable CORS
app.use(cors());

// Serve static files from public directory
app.use(express.static('public'));

// Store connected users
const users = new Set();

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle user joining
    socket.on('join', (username) => {
        socket.username = username;
        users.add(username);
        io.emit('userJoined', { username, users: Array.from(users) });
    });

    // Handle chat messages
    socket.on('chatMessage', (message) => {
        io.emit('message', {
            username: socket.username,
            text: message,
            time: new Date().toLocaleTimeString()
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        if (socket.username) {
            users.delete(socket.username);
            io.emit('userLeft', { username: socket.username, users: Array.from(users) });
        }
        console.log('A user disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
