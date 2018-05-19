class Person { //class declarations with capital letter
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        //return "Hi! This is " + this.name; //Outdated
        return `Hi! This is ${this.name} and I am ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    greeting() {
        let description = super.greeting();
        if(this.hasMajor()){
            return `${description} I am studying ${this.major}!`; //Overriding
        }
        return `${description}`;
    }
}

class Traveller extends Person {
    constructor(name, age, location="US"){
        super(name, age);
        this.location = location;
    }

    greeting(){
        let description = super.greeting();
        return `${description} I'm from ${this.location}!`;
    }
}

const me = new Person("Name", 27);
console.log(me.greeting());

const other = new Person();
console.log(other.greeting());

const new_me = new Student("Name", 27, "Computer Science")
console.log(new_me.greeting());

const new_other = new Student();
console.log(new_other.greeting());

const new_me2 = new Traveller("Name", 27, "India")
console.log(new_me2.greeting());

const new_other2 = new Traveller();
console.log(new_other2.greeting());