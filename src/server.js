'use strict';
require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/routes');
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middlewares/logger");


// const path = require('path');
const http = require('http');
const socketio = require('socket.io')(3030);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

//app.use(express.static(path.join(__dirname, 'public')));

// const server = http.createServer(app);
// const io = socketio(socketio);

// start connection with socket 
socketio.on('connection', (socket) => {
    console.log('Server connected to socketio server ', socket.id);

    socket.on('signin', (payload) => {
        console.log(`${payload.user.username} is Logged In `);
    });

    socket.on('confirm-order', (orderId,user) => {
        console.log(`User ${user.username} has ID :${user.id} confirm order ID : ${orderId}`);
    });

    socket.on('delivered-order', (allOrders) => {
        allOrders.forEach(order => {
            console.log(`Order/s related to user ID :${order.user_id} has been delivered`);
        })
    });

    socket.on('recive-order', (user) => {
        console.log(`User ${user.username} has ID :${user.id} recived his Order `);
    });

    socket.on("join_room", (room ,sender,reciver) => {
    socket.join(room);
    console.log(`User: ${sender.username} has joined room: ${room} with User : ${reciver.username}`);
    });
    
    socket.on("send_message", (message,sender,reciver) => {
        console.log(`${sender.username} send ${message.massage} to ${reciver.username}`);
  });
});


// public event 
//   io.emit('event-created', data);
//   socket.on("event-created", function(data) {

//   })


//privet event
// socket.on('private-event-created', data => {

//     data.users.forEach(username => io.in(username).emit('private-event', data));
// });

// socket.on('private-event', function(data) {
   
//  });







app.use(logger);

app.use(router);

app.use("*", notFoundHandler);
app.use(errorHandler);
    


function start() {
    app.listen(port, () => {
        console.log(`server up on ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
    
};
