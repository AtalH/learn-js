module.exports={  // 导出多个函数
    hi:function(res){
        res.write('hi bro\n');
    },
    hey:function(res){
        res.write("hey bro, what's up...\n");
    }
}