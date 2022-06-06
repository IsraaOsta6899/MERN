class Ninja{
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log("my name is"+this.name);
    }
    showStats(){
        console.log("my name is"+"  "+this.name +"  my strength = "+this.strength+"  , my speed = "+this.speed +"   health="+this.health)
    }
    drinkSake(){
        this.health+=10
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10);
        
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What can programmer do in one month,two programmers can do it in two months");
    }
}
