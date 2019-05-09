var http = require('http');  // 导入 http 包
http.createServer(function(request, response){
    if(request.url!=='/favicon.ico'){ // 第二次访问不做任何事
        console.log('request handling...')
        response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        response.write('hello nodejs');
        response.end('bye');  //关闭 response, 输出 http 协议尾, 否则浏览器一直等待
        console.log('request done...')
    }
}).listen(8000);
console.log("http server running at http://127.0.0.1:8000");