function subsequence(input) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const myArr = [];
    input.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
        return accumulated
    }, myArr);

    return myArr;

    // ---------------------------------

    // const result = input.filter((element) => {
    //     if (element >= biggest) {
    //         biggest = element;
    //         return true;
    //     }

    //     return false;
    // })

    // return result;

    // ---------------------------------

    // input.forEach(element => {
    //     if (element >= biggest) {
    //         biggest = element;
    //         myArr.push(element);
    //     }
    // });
    // ---------------------------------
    // for (let element of input) {
    //     if (element >= biggest) {
    //         biggest = element;
    //         myArr.push(element);
    //     }
    // }

    // return myArr;5
}

console.log(subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(subsequence([1, 2, 3, 4]));
console.log(subsequence([20, 3, 2, 15, 6, 1]));
