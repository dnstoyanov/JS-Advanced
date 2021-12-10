function calcPrice(fruit, weight, price) {

    let kgs = weight/1000;
    let money = kgs * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`)
}

calcPrice('orange', 2500, 1.80);
calcPrice('apple', 1563, 2.35);
