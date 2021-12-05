function addAndRemove(input) {
    let number = 1;
    let result = [];

    for (let element of input) {
        if (element === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
