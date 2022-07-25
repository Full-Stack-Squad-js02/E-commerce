'use strict';
require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/routes');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to Home Page')
//   })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

app.use(router);

function start() {
    app.listen(port, () => {
        console.log(`server up on ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
    
};
