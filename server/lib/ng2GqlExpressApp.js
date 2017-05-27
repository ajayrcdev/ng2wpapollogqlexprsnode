const express = require("express");
const cors = require("cors");

let expressApp = express();

expressApp.use(cors());

expressApp.all("/", (request, response, next) => {
    response.send("Mr Slash");
});

module.exports = expressApp;