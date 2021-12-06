const  myPers = {
    firstName: 'John',
    lastName: 'Jackson',
    age: 23,
    sayHi() {
        console.log(`${this.firstName} says hi!`)
    }
};

const mySayHi = myPers.sayHi;

const person = {
    firstName: 'George',
    lastName: 'Madison',
    age: 33,
}

person.sayHi = mySayHi;
myPers.sayHi();
person.sayHi();



