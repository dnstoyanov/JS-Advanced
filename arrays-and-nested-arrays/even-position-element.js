function even(input) {
    let result = [];
    for (let i = 0; i < input.length; i += 2) {
        result.push(input[i]);
    }

    console.log(result.join(' '));
}

even(['20', '30', '40', '50', '60']);
even(['5', '10']);
