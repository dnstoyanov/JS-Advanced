class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compareTo(a, b) {
        return a.age - b.age;
    } 
};

const person1 = new Person('Peter', 23);
const person2 = new Person('Milen', 33);
const person3 = new Person('Anya', 15);


const people = [person1, person2, person3];

people.sort(Person.compareTo);


console.log(people)