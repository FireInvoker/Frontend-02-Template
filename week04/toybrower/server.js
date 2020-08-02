const http = require('http');
const { builtinModules } = require('module');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('body',body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(' Hello World\n');
    })
}).listen(8888);

console.log("server started");