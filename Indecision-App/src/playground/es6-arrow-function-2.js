// arguments object - no longer bound with arrow functions
// can not access arguments object with arrow function(only function)

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);

        const cityMessages = this.cities.map((city) => {
            return  city + '!';
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return cityMessages;
    }

};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());