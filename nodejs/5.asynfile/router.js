var http = require('http');
var url = require('url');
var handlers = require('./handlers.js'); 
var utils = require('../utils');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    if(utils.is_req_ico(request)==false){
        function write_page(page){  // 闭包回调
            response.write(page);
            response.end('\nbye');
        }
       var path = url.parse(request.url).pathname;
       path = path.replace(/\//, ''); 
       handlers[path](write_page); // 传入的闭包函数携带了它的执行环境，所以能使用 response 变量
       console.log('handle done.')
    }
}).listen(8000);
console.log("http server is running at http://127.0.0.1:8000");