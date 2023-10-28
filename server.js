const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  //  chat messages from the client
  socket.on('chat message', (message) => {
    console.log(`Received message: ${message}`);
    
    //  the message to all connected clients
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = process.env.PORT || 4200;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
