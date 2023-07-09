
const display = document.querySelector('.display')
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const allClear = document.querySelector('#allClear');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percent');

let currentNumber = '';
let lastNumber = '';
let operation = '';
let result;

nums.forEach(num => {
    num.addEventListener('click', e => {        
        
        currentNumber += e.currentTarget.innerText;
        display.innerText = currentNumber;
        
    });
});

operators.forEach(op => {
    op.addEventListener('click', e => {
        
        lastNumber = currentNumber;
        currentNumber = '';
        operation = op.innerText;
        clearDisplay(); 

    });
});

percent.addEventListener('click', () => {
    if(currentNumber) {
        currentNumber = parseFloat(currentNumber) * 0.01;
        display.innerText = currentNumber;
    }
});

equals.addEventListener('click', () => {
    if (!lastNumber)
        return;

    mathOperation();

    result = result.toString();

    if(result.length > 5) 
        display.style.fontSize = "2rem";
    
    display.innerText = result;

    currentNumber = '';
    lastNumber = '';
});

allClear.addEventListener('click', () => {
    currentNumber = '';
    lastNumber = '';
    operation = '';
    result = null;    
    display.innerText = '';
    display.style.fontSize = "6rem";
});

clear.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);    
    display.innerText = currentNumber;    
});


function clearDisplay() {
    display.innerText = '';
    result = null;
}


function mathOperation() {
    if (operation === '+')
        result = parseFloat(lastNumber) + parseFloat(currentNumber);

    if (operation === '-')
        result = parseFloat(lastNumber) - parseFloat(currentNumber);

    if (operation === 'x')
        result = parseFloat(lastNumber) * parseFloat(currentNumber);

    if (operation === '÷')
        result = parseFloat(lastNumber) / parseFloat(currentNumber);
}

