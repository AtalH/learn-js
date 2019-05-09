var http = require('http');  // 导入 http 包
var what_the_f = require('./singlefunction.js');  // 导入其他文件的函数
var say_hi = require('./multifunction.js');
var hi_way = 'hey';
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    if(is_req_ico(request)==false){
        say_hi.hi(response);  // 直接调用
        say_hi[hi_way](response);  // 变量的方式调用，灵活
    }else{
        what_the_f(); // 只能使用本地别名，不能使用真正的函数名 wtf
    }
    response.end('bye');
}).listen(8000);
console.log("http server running at http://127.0.0.1:8000");


function is_req_ico(req){  // 判断是否是第二次访问
    if(req.url!=='/favicon.ico'){
        return false;
    }else{
        return true;
    }
}