// Web Server Example

const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });
var html = fs.readFileSync(__dirname + '/test.txt', 'utf8');
var message = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhs!';
html = html.replace('{Message}', message);
res.end(html);
}).listen(1337, '127.0.0.1');