var fs = require('fs');
var img17 = '../images/17.jpg';
module.exports={
    get17:function(res){
        fs.readFile(img17, 'binary', function(err, img){ // 图片属于二进制文件
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'image/jpeg'});  // 响应头声明响应文件类型是二进制图片
                res.write(img, 'binary'); //输出二进制文件，此时不能输出字符串否则图片无法显示
                res.end();
            }
        }); // 异步读文件
    }
}