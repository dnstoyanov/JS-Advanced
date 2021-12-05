function doubleSort(input) {
    const sorted = input.sort((a, b) => {
        if (a.length > b.length) {
            return 1;   
        } else if (a.length == b.length) {
           return a.localeCompare(b);
        } else {
            return -1;
        }
    });

    console.log(sorted.join('\n'))
}

doubleSort(['alpha', 'beta', 'gamma']);
doubleSort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
doubleSort(['test', 'Deny', 'omen', 'Default']);
