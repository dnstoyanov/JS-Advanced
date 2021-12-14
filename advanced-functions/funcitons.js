function start() {
    let counter = 0;

    function increment(a) {
        counter += a;
        console.log(counter);
    }

    function pureIncrement(a) {
        console.log(a + 1);
    }
    
    return increment;


    // increment(2);
    // increment(2);
    // increment(2);

}

const myInc = start();

myInc(2)
myInc(2)
myInc(2)
