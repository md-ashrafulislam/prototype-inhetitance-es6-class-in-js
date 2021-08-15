class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    eat(){// methods
        console.log(`${this.name} is eating`);
    }
    get setName() {
        // getter
        return this.name;
        // return "rakib";
    }
    set setName() {
        // setter
        this.name = name;
    }
}

let sakib = new Person("Sakib", 35);

console.log(sakib.getName);

sakib.setName = "Tamim";

console.log(sakib.name);
