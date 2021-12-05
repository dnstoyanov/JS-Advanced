function odd(arr) {
    const oddNums = arr.filter((v, i) => i % 2 == 1);

    const doubled = oddNums
        .map((x) => x * 2)
        .reverse()
        .join(' ');

    console.log(doubled);
}
odd([10, 15, 20, 25]);
