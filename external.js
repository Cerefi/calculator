let firstNumber;
let secondNumber;
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.op');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
let display = '';
let temp = '';

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        if (display2.textContent === ''){
            if (display1.textContent === '0' && number.textContent === '0') {
                display1.textContent = '0';
            }
            else {
                display += number.textContent;
                display1.textContent = display;
                firstNumber = display;
            }
        }
        else {
            display = display1.textContent;
            display1.textContent = temp + number.textContent;
            temp = display1.textContent;
        }       
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
    if (!display2.textContent){
        
    }
    else {
        secondNumber = display1.textContent;
        display2.textContent = firstNumber + op + secondNumber + '=';
        display1.textContent = operate(firstNumber, secondNumber, op);
        temp = '';
        on_off = 1;
    }
})

clear.addEventListener('click', ()=>{
    display2.textContent = '';
    display1.textContent = '0';
    display = '';
    temp = '';
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
    if (b === '0'){
        return 'Error';
    }
    else {
        return a / b;
    }
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
