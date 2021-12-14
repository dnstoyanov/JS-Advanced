function argInfo(...input) {
    console.log(input)
}

argInfo('cat', 42, 
function () {
    console.log('Hello world!');
});
    