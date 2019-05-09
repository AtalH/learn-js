var http = require('http');  // 导入 http 包
var Human = require('./Human');  // 导入其他文件的函数
var Woman = require('./Woman');
var utils = require('../utils');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    if(utils.is_req_ico(request)==false){
        var human = new Human(1,'tao',18, response);
        var woman = new Woman(2,'bao',16, response);
        human.speak('hi nice to meet you !\n');
        woman.speak('nice to meet you too !\n');
        woman.smile();
    }
    response.end('\nbye');
}).listen(8000);
console.log("http server is running at http://127.0.0.1:8000");
