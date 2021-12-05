function everyElement(myArr, n) {
    let resultArr = [];

    for (let i = 0; i < myArr.length; i += n) {
        resultArr.push(myArr[i]);
    }

    return resultArr;
}

console.log(everyElement(['5', '20', '31', '4', '20'], 2));
// everyElement(['dsa', 'asd', 'test', 'tset'], 2);
// everyElement(['1', '2', '3', '4', '5'], 6);
