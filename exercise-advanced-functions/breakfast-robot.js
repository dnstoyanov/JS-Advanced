function breakfastRobot() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    };

    function restock(element, qtyty) {
        storage[element] += Number(qtyty);
        return `Success`;
    }

    function prepare(recipe, qtyty) {
        const remainingStorage = {};

        for (let element in recipes[recipe]) {
            const remaining =
                storage[element] - recipes[recipe][element] * Number(qtyty);
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`;
            } else {
                remainingStorage[element] = remaining;
            }
        }
        Object.assign(storage, remainingStorage);
        return `Success`;
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    function control(str) {
        const [command, item, qtyty] = str.split(' ');

        switch (command) {
            case 'restock':
                return restock(item, qtyty);
            case 'prepare':
                return prepare(item, qtyty);
            case 'report':
                return report();
        }
    }

    return control;
}

let manager = breakfastRobot();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
