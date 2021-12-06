function heroic(input) {

    const result = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');

        result.push({
            name, 
            level: Number(level),
            items: items? items.split(', ') : []
        })
    });

    console.log(JSON.stringify(result))
}

heroic([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
