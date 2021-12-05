function sumFistLast(input) {
    // let first = Number(input[0]);
    // let last = Number(input[input.length-1]);

    // let sum = first + last;

    let first = Number(input.shift());
    let last = Number(input.pop());
    return first + last
    console.log(sum)

}

console.log(sumFistLast(['20', '30', '40']));
console.log(sumFistLast(['5', '10']));