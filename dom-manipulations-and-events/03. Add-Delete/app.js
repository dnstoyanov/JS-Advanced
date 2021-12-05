function addItem() {
    const input = document.getElementById('newItemText');

    const liElement = document.createElement('li');

    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.textContent = '[Delete]';
    liElement.appendChild(button);
    button.href = '#';
    button.addEventListener('click', removeElement);

    document.getElementById('items').appendChild(liElement);

    input.value = '';

    function removeElement(ev) {
        const answear = confirm('Are you sure?');

        if (answear == true) {
            ev.target.parentNode.remove();
        }
    }
}
