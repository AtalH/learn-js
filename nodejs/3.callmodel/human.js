function Human(id, name, age, response){
    this.id=id;
    this.name=name;
    this.age=age;
    this.speaker=response;

    this.speak=function(msg){
        this.speaker.write(this.name+': '+msg);
    }
}
module.exports=Human;