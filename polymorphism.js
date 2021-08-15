class Person {
    // parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing`)
    }
}

class Cricketer extends Person {
    // sub class
    constructor (name, age, type, country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play(){
        super.play();
        console.log(`${this.name} is playing cricket`)
    }
}
let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");

sakib.play();

