var Human = require('./Human');

function Woman(id, name, age, response){
    Human.apply(this, [id, name, age, response]); // 继承
    this.smile=function(){
        this.speaker.write(this.name+': lol\n');
    }
}
module.exports=Woman;