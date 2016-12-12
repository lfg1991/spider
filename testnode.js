

var http = require('http');

http.createServer((req, resp) => {

    resp.write("666");
    resp.end();
}).listen(8000)

