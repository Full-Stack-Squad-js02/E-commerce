'use strict';
require('dotenv').config();
const port = process.env.PORT || 3000;
// const path = require('path');
const http = require('http');
const express = require('express');
const ioServer = require('socket.io')(port)
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/routes');
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middlewares/logger");


app.use(express.json());

const server = http.createServer(app);
const sooqServer= ioServer.of(server);

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

//app.use(express.static(path.join(__dirname, 'public')));


// start connection with socket 
ioServer.on('connection', (socket) => {
    console.log('Server connected to socketio server ', socket.id);
    console.log("ssssssssssssssssssss",socket);
    
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
