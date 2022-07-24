'use strict';

const PORT = process.env.PORT || 3000;
const express = require("express");


const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
  })


app.use("*", notFoundHandler);
app.use(errorHandler); 

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`server up on ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};
