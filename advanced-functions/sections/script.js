function create(words) {
    const content = document.getElementById('content');

    for (let word of words) {
        const div = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.style.display = 'none';
        paragraph.textContent = word;
        div.appendChild(paragraph);
        content.appendChild(div);
        div.addEventListener('click', reveal.bind(paragraph));
    }

    function reveal() {
        // ev.currentTarget.children[0].style = '';
        this.style.display = '';
    }
}
