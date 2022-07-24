'use strict';
require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
  })



function start() {
    app.listen(port, () => {
        console.log(`server up on ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
    
};
