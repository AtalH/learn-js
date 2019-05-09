var http = require('http');
var url = require('url');
var handlers = require('./handlers.js'); 
var utils = require('../utils');
http.createServer(function(request, response){
    if(utils.is_req_ico(request)==false){
       var path = url.parse(request.url).pathname;
       path = path.replace(/\//, ''); 
       try {
            handlers[path](response);
       } catch (error) {
           console.log('error while handling: '+error.toString());
           handlers.notfound(response);
       }
    }
}).listen(8000);
console.log("http server is running at http://127.0.0.1:8000");