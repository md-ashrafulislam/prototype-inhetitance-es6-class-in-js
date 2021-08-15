class Person {
    constructor(name, age, email) {
        this._name = name; // property
        this._age = age;
        this._email = email;
        
    }
    eat(){// methods
        console.log(`${this._name} is eating`);
    }
    get setName() {
        // getter
        return this._name;
        // return "rakib";
    }

    set setName(name) {
        // setter
        this._name = name;
    }

    setEmail(email) {
        this._email = email;
    }

    sendMail(msg) {
        console.log('To:', this._email);
        console.log('MSG:', this._sanitizerMsg(msg));

    }

    _sanitizerMsg(msg) {
        return msg.trim().toLowerCase()
    }


    print() {
        console.log('className = Person, ' + this + '');
    }

    
    toString() {
        // return 'Person class';
        return `Name: ${this._name}, Email: ${this._email}`;
    }
}

let sakib = new Person("Sakib", 35, 'sakib@gmail.com');

// console.log(sakib.getName);

// sakib.setName = "Tamim";

// console.log(sakib.name);

sakib.print()

sakib.sendMail('    WOW! It Is Working    ');

console.log(sakib + '')

console.log(sakib instanceof Person);