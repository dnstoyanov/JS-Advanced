function storeCatalogue(input) {
    const prodCatalogue = {};

    input.forEach((element) => {
        let [product, price] = element.split(' : ');
        price = Number(price);

        const index = product[0];

        if (!prodCatalogue[index]) {
            prodCatalogue[index] = {};
        }

        prodCatalogue[index][product] = price;
    });

    let initialSort = Object.keys(prodCatalogue).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (const key of initialSort) {
        let products = Object.entries(prodCatalogue[key]).sort((a, b) =>
            a[0].localeCompare(b[0])
        );
        console.log(key);
        products.forEach((element) => {
            console.log(`  ${element[0]}: ${element[1]}`);
        });
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);
