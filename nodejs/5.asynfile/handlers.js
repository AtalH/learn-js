var fs = require('fs');
var hello_page = './hello.html';
var index_page = './index.html';
module.exports={
    hello:function( write_page){
        var page = fs.readFileSync(hello_page, 'utf8'); // 同步读文件
        console.log('read file done');
        write_page(page);
    },
    index:function(write_page){
        var page = fs.readFile(index_page, function(err, page){ // 使用回调函数，当读取完文件后执行，
                                                                // 所以 read file return. 会先执行
            if(err){
                console.log(err);
            }else{
                console.log('read file done');
                write_page(page);
            }
        }); // 异步读文件
        console.log('read file return.');
    },
    save_hello:function(write_page){
        fs.writeFileSync(hello_page, 'hello saved in syn way.');  // 同步写文件
        write_page('hello saved in syn way.');
    },
    save_index:function(write_page){
        fs.writeFile(index_page, 'index saved in asyn way', function(err){ //异步写文件
            if(err){
                console.log(err);
            }else{
                write_page('index saved in asyn way');
            }
        });
    }
}