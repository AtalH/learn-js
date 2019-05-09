var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var img17 = '../images/17.jpg';
module.exports={
    get17:function(req, res){
        fs.readFile(img17, 'binary', function(err, img){ // 图片属于二进制文件
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'image/jpeg'});  // 响应头声明响应文件类型是二进制图片
                res.write(img, 'binary'); //输出二进制文件，此时不能输出字符串否则图片无法显示
                res.end();
            }
        }); // 异步读文件
    },
    notfound:function(req, res){
        res.writeHead(404, {'Content-Type':'text/html;charset=utf-8'});
        res.write('page not found');
        res.end();
    },
    index:function(req, res){
        fs.readFile('../views/simpleform.html', function(err, page){
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
                res.write(page);
                res.end();
            }
        });
    },
    getlogin:function(req, res){
        var reqParam = url.parse(req.url, true).query;  // 获取 get 方式提交表单的参数
        var uid = reqParam['uid'];
        var pwd = reqParam['password'];
        if(uid!=undefined){
            console.log('get uid: '+uid);
        }
        if(pwd!=undefined){
            console.log('get pwd: '+pwd);
        }
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write('login success with uid='+uid+' password='+pwd);
        res.end();
    },
    postlogin:function(req, res){
        var postParam = '';
        req.on('data', function(chunk){ // 异步方式接收 post 表单参数
            postParam += chunk;
        });
        req.on('end', function(){   // 异步判断是否接收完参数
            postParam = querystring.parse(postParam);
            var uid = postParam['uid'];
            var pwd = postParam['password'];
            if(uid!=undefined){
                console.log('post uid: '+uid);
            }
            if(pwd!=undefined){
                console.log('post pwd: '+pwd);
            }
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
            res.write('login success with uid='+uid+' password='+pwd);
            res.end();
        });
    }
}