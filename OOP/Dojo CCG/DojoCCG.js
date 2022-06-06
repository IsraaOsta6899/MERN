class Card{
    constructor(name , cost){
        this.name=name;
        this.cost=cost;

    }
}
class Unit extends Card{
    constructor(name , cost , power , res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res-=this.power;
            console.log("5555")

            

        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Effect extends Card{
    constructor(name,cost,state,magnitud,text){
        super(name,cost); 
        this.state=state; 
        this.magnitud=magnitud; 
        this.text=text; 
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.cost==2){
                console.log("11111")
                target.res+=3;
                this.text="increase target's resilience by 3";
            }
            else if(this.cost==1){
                console.log("2222")

                target.res-=2;
                this.text="reduce target's resilience by 2";
            }
            else{
                console.log("333")

                target.power+=2;
                this.text="increase target's power by 2";
            }
            

        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}

RedBeltNinja = new Unit("RedBeltNinja",3,3,4);
BlackBeltNinja = new Unit("BlackBeltNinja",4,5,4);
HardAlgorithm= new Effect("Hard Algorithm" ,2,"resilience",3);
UnhandledPromiseRejection= new Effect("Unhandled Promise Rejection",1,"resilience",-2);
PairProgramming= new Effect("Pair Programming",3,"power",2);
HardAlgorithm.play(RedBeltNinja);
UnhandledPromiseRejection.play(RedBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja)