class Ninja{
    constructor(name , health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
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
const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
