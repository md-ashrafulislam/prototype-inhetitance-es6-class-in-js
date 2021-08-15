class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    eat(){// methods
        console.log(`${this.name} is eating`);
    }
   static isEqualAge(p1, p2){
       return p1.age === p2.age;
   }
}

let sakib = new Person("Sakib", 35);

let tamim = new Person("Tamim", 36);

console.log(sakib.name);

// static method call in Person class

console.log(Person.isEqualAge(sakib, tamim)) 