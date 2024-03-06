var http = require('http');
var dt = require('./module.js') 
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type' : 'text/html'}); 

res.write("The date and time is : " + dt.myDateTime());
res.end("hello !");
}).listen(5458);