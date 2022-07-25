'use strict';
require('dotenv').config();
const server = require('./src/sever');
const { db } = require('./src/models/index-model');

db.sync().then(() => {
    server.start();
});

