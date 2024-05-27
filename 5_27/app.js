//app.js

const http = require('http');

http.createServer((request, Response) => {
    Response.statusCode = 200;
    Response.setHeader('content-Type', 'text/plain');
    Response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');