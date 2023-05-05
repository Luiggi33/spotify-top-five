var express = require("express");
const http = require("http");
const mysql = require('mysql2');
var Jimp = require("jimp");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'spotify-images'
});

async function convertBlobToImage(blob) {
    const buffer = await blob.arrayBuffer();
    const image = await Jimp.read(buffer);
    return image;
}

app = express();

app.get("/spotify-top/get-user", function(req, res ) {
    if (connection) {
        connection.query('SELECT * FROM `users` WHERE `username` = ' + req.query.username,
        function(err, results, fields) {
            if (err) throw err;

            const result = results[0];
            let picture = results.blob;
        });
    }
});

http.createServer(app).listen(8889).on('listening', function () {
    console.log('HTTP: Listening on port 8889');
});