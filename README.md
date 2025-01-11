# Real-Time Chat Application

A real-time chat application built with Node.js and Socket.IO, enabling instant messaging capabilities with a clean and modern interface.

## Features

- Real-time messaging
- User join/leave notifications
- Online users list
- Clean, responsive UI
- Message timestamps
- System notifications for user activity

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- HTML5
- CSS3
- JavaScript (Vanilla)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd real-time-chat
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Enter your username to join the chat room
4. Start chatting!

## Project Structure

```
├── server.js           # Main server file
├── package.json        # Project dependencies
└── public/            # Static files
    ├── index.html     # Main HTML file
    ├── style.css      # Styles
    └── client.js      # Client-side JavaScript
```

## Features Explained

### Real-Time Communication
- Utilizes Socket.IO for bidirectional communication
- Instant message delivery
- User presence detection

### User Interface
- Clean and responsive design
- Message history with timestamps
- Active users list
- Join/Leave notifications

### Message Features
- Text messages with timestamps
- System notifications for user events
- Visual distinction between sent and received messages

## Contributing

Feel free to fork the project and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.