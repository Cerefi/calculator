let firstNumber;
let secondNumber;
const screen = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op')
let display = '';

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        if (screen.textContent === '0' && number.textContent === '0') {
            screen.textContent = '0';
        }
        else {
            display += number.textContent;
            screen.textContent = display;
        }
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
