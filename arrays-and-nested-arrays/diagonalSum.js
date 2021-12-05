function diagonalSum(input) {
    let sum1 = 0;
    let sum2 = 0;
    const size = input.length;

    for (let i = 0; i < input.length; i++) {
        sum1 += input[i][i];
        sum2 += input[i][size - i - 1];
    }

    console.log(`${sum1} ${sum2}`);

}

diagonalSum([
    [20, 40],
    [10, 60],
]);

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);
