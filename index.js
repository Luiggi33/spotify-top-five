var express = require("express");
const http = require("http");

app = express();

http.createServer(app).listen(8889).on('listening', function () {
    console.log('HTTP: Listening on port 8889');
});