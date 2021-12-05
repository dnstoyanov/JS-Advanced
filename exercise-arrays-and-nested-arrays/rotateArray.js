function rotateArray(input, n) {
    for (let i = 0; i < n; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
