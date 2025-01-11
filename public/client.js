const socket = io();

// DOM elements
const joinContainer = document.getElementById('join-container');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username');
const joinBtn = document.getElementById('join-btn');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messagesDiv = document.getElementById('messages');
const usersList = document.getElementById('users-list');

// Join chat
joinBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        socket.emit('join', username);
        joinContainer.style.display = 'none';
        chatContainer.style.display = 'block';
    }
});

// Send message
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
}

// Socket event handlers
socket.on('message', (data) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(data.username === usernameInput.value ? 'sent' : 'received');
    
    messageDiv.innerHTML = `
        <div class="header">
            <strong>${data.username}</strong>
            <span class="time">${data.time}</span>
        </div>
        <div class="content">${data.text}</div>
    `;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

socket.on('userJoined', (data) => {
    addSystemMessage(`${data.username} joined the chat`);
    updateUsersList(data.users);
});

socket.on('userLeft', (data) => {
    addSystemMessage(`${data.username} left the chat`);
    updateUsersList(data.users);
});

function addSystemMessage(text) {
    const div = document.createElement('div');
    div.classList.add('system-message');
    div.textContent = text;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function updateUsersList(users) {
    usersList.innerHTML = users
        .map(user => `<li>${user}</li>`)
        .join(', ');
}
