function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelector('tbody').children).filter((row) => row.children[1].textContent == input.value);

    rows.forEach((row) => row.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted' : 'Not found.'
    
}


// function deleteByEmail() {
//     let input = document.querySelector('input[name="email"]');
//     let rows = Array.from(document.querySelector('tbody').children);
//     let result = document.getElementById('result');
//     let removed = false;
//     for (let row of rows) {
//         if (row.children[1].textContent == input.value) {
//             row.remove();
//             removed = true;
//         }
//     }

//     if (removed) {
//         result.textContent = 'Deleted.';
//     } else {
//         result.textContent = 'Not found.';
//     }
// }
