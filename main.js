let http = require('http'); // built in module

/* Returns a new web server object*/
let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hello World</h1>')
});

server.listen(3000);
console.log('server listening on localhost:3000');