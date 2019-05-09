module.exports={
    hi:function(req, res){
        res.write('hi there\n');
    },
    hey:function(req,res){
        res.write("hey, what's up bro\n");
    }
}