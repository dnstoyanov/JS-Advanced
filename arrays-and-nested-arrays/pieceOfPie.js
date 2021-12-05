function pieceOfPie(pies, startPie, endPie) {

    let indexOfStartPie = pies.indexOf(startPie);
    let indexOfEndPie = pies.indexOf(endPie);

    let newArr = pies.slice(indexOfStartPie, indexOfEndPie + 1);
    return newArr

}

console.log(pieceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie',
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
