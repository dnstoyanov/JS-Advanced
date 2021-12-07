class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }
    

    set diameter(value) {
        if (typeof value != 'number'){
            throw TypeError('Value must be a number');
        }
        this.radius = value /2;
    }

    setDiameter(value) {
        this.radius = value /2;
    }
}

const c = new Circle(4);
console.log(c)

console.log(c.getDiameter());

c.setDiameter(5);
console.log(c)

c.diameter = 'aha';