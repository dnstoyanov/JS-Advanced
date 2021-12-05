function sortingNumbers(input) {
    const sorted = input.sort((a, b) => a - b);
    const count = Math.floor(sorted.length /2);

    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(sorted[i]);
        result.push(sorted[sorted.length - 1 -i]);
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
