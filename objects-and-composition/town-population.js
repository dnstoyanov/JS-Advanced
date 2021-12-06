function townPopulation(input) {
    const towns = {};

    for (let element of input) {
        const tokens = element.split(' <-> ');
        const population = Number(tokens[1]);
        const name = tokens[0];


        if (towns.hasOwnProperty(name)) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
        
        // if (towns[name] == undefined) {
        //     towns[name] = population;
        // } else {
        //     towns[name] += population;
        // }
    }

    
    // for (const name in towns) {
    //     console.log(`${name} : ${towns[name]}`)
    // }

    for (const [name, pop] of Object.entries(towns)) {
        console.log(`${name} : ${pop}`)
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
]);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000',
]);
