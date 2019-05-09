var fs = require('fs');
var img17 = '../images/18.jpg';
module.exports={
    get17:function(res){
        try {
            fs.readFile(img17, 'binary', function(err, img){ 
                if(err){
                    console.log('error while reading '+img17);
                    console.log(err);   // 回调函数包含 err，已经错误处理
                }else{
                    res.writeHead(200, {'Content-Type':'image/jpeg'}); 
                    res.write(img, 'binary'); 
                    res.end();
                }
            });
            throw 'error test!'; // 人工抛异常
        } catch (error) {
            console.log('error while geting 17');
            throw error; // 继续抛出
        }
    },
    notfound:function(res){
        res.writeHead(404, {'Content-Type':'text/html;charset=utf-8'});
        res.write('page not found');
        res.end();
    }
}