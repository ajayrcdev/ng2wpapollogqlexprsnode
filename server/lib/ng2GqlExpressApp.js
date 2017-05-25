const express = require("express");

let expressApp = express();

expressApp.all("/", (request, response, next) => {
    response.send("we heard you mr slash");
});

module.exports = expressApp;