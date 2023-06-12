class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }

    getGretting() {
        //return ('Hello ' + this.name);
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGretting() {
        let greeting = super.getGretting();
        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` majored in ${this.major}`;
        }
        return description;
    }
}



const me = new Traveler('Jason Wang', 25, 'New York');
console.log(me.getGretting());
const ano = new Traveler();
console.log(ano.getGretting());