let firstNumber;
let secondNumber;
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
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
        firstNumber = display1.textContent;
        display2.textContent = firstNumber + operator.textContent;
        display1.textContent = firstNumber;
        op = operator.textContent;
    })
})

equal.addEventListener('click', ()=>{
    secondNumber = display1.textContent;
    display2.textContent = firstNumber + op + secondNumber + '=';
    display1.textContent = operate(firstNumber, secondNumber, op);
    firstNumber = display1.textContent;
})

clear.addEventListener('click', ()=>{
    display2.textContent = '';
    display1.textContent = '0';
    display = '';
})

function add(a, b) {
    return +a + +b;
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
        return add(x, y);
    }
    else if (op === '-') {
        return subtract(x, y);
    }
    else if (op === 'x') {
        return multiply(x, y);
    }
    else {
        return divide(x, y);
    }
}
