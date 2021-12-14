function calculator() {

    let firstInput; 
    let secondInput; 
    let resultBoxt; 

    function init(selector1, selector2, selector3) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resultBoxt = document.querySelector(selector3);
    }

    function add() {
        resultBoxt.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultBoxt.value = Number(firstInput.value) - Number(secondInput.value);
    }
    return {
        init,
        add,
        subtract
    };
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



