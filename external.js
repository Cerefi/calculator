let firstNumber;
let secondNumber;
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
let display = '';

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        if (!display2.textContent){
            if (display1.textContent === '0' && number.textContent === '0') {
                display1.textContent = '0';
            }
            else {
                display += number.textContent;
                display1.textContent = display;
            }
        }
        else {
            display1.textContent = number.textContent;
        }       
        firstNumber = display;
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        display2.textContent = firstNumber + operator.textContent;
        display1.textContent = firstNumber;
    })
})




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(x, y, op) {
    if (op === '+'){
        add(x, y);
    }
    else if (op === '-') {
        subtract(x, y);
    }
    else if (op === '*') {
        multiply(x, y);
    }
    else {
        divide(x, y);
    }
}
