module.exports={
    is_req_ico:function (req){  // 判断是否是第二次访问
        if(req.url!=='/favicon.ico'){
            return false;
        }else{
            this.wtf();
            return true;
        }
    },
    wtf:function (){
        console.log('what the fuck is it doing !!!');
    }
}