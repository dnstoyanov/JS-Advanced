function sortArr(input, command) {
    if (command === 'asc') {
        return input.sort((a, b)=>{
            return a - b;
        });
    } else {
        return input.sort((a, b)=>{
            return b - a;
        });
    }
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));