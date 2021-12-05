function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));
    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onBlur(ev){
        ev.target.parentNode.className = ''
    }

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused'
    }

}   
