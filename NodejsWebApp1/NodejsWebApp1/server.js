var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    var random_number = getRandomArbitary(1, 10).toString()
    res.writeHead(200, { 'Content-Type': 'text/plain' });1
    res.end('_testcb(\"' + random_number + '\")');
}).listen(port);
function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}