function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cell = rows[i].lastElementChild;
        const input = cell.firstElementChild;
        sum += Number(input.value);
    }

    document.getElementById('sum').children[0].value = sum;  
}
