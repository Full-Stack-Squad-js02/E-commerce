'use strict';
require('dotenv').config();
const port = process.env.PORT || 3000;
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/routes');
const app = express();


const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middlewares/logger");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, 'public'))); For Frontend

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
