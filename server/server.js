var path = require('path');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');
var app = require('express')();
const port = process.env.PORT || 4000;


const publicPath = path.join(__dirname, '../public');
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
})



app.use(express.static(publicPath));

server.listen(port, function () {
  console.log('Server is running on', port);
})
