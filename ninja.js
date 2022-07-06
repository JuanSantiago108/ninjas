class Ninja{
    constructor(firstname, health,speed, strength){
        this.firstname = firstname
        this.health = health
        this.speed = speed
        this.strength=strength
    }
    sayName(){
        console.log("The firstname is", this.firstname)
    }
    showStats(){
        console.log("these are the stats", this.health,this.speed,this.strength)
    }
    drinkSake(){
        console.log("add 10 health", this.health +10 )
    }
}

const newNinja = new Ninja("Chris", 95, 100, 9000);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
console.log(newNinja)

