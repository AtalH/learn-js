var http = require('http');
var url = require('url');
var handlers = require('./handlers.js'); 
var utils = require('../utils');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    if(utils.is_req_ico(request)==false){
       var path = url.parse(request.url).pathname;
       path = path.replace(/\//, ''); // 去掉请求连接中的斜杠/
       handlers[path](request, response);
    }
    response.end('\nbye');
}).listen(8000);
console.log("http server is running at http://127.0.0.1:8000");