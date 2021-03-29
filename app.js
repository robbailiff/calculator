// =========
// Variables
// =========

let displayValue = "";
let operatorActive = false;

// =========
// Selectors
// =========

const display = document.querySelector('#input-display');
const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operation');
const functionButtons = document.querySelectorAll('button.function');

// ===============
// Listener Events
// ===============

numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let pressedButton = e.target.id;

        if (displayValue.length <= 1 && displayValue.charAt(0) == 0) {
            displayValue = pressedButton;

        } else {
            displayValue += pressedButton;
        }
        display.textContent = displayValue;
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let pressedButton = e.target.value;

        if(!operatorActive) {
            displayValue += ` ${pressedButton} `;
            display.textContent = displayValue;
            operatorActive = true;
        }
    })
});

functionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let pressedButton = e.target.id;

        if(e.target.id == 'equals') {

            let displayArray = displayValue.split(' ');
            let result = operate(displayArray[1], displayArray[0], displayArray[2]);

            displayValue = String(Math.round(result * 1000) / 1000);
            display.textContent = displayValue;
            operatorActive = false;

        } else if (e.target.id == 'back' || e.target.id == 'clear') {
            window[pressedButton]();

        } else {
            let displayArray = displayValue.split(' ');
            
            if (displayArray.length < 3) {
                displayArray[0] = window[pressedButton](displayArray[0]);

            } else {
                displayArray[2] = window[pressedButton](displayArray[2]);
        }
        displayValue = displayArray.join(' ');
        display.textContent = displayValue;
        }
    })
});

// ================
// Button functions
// ================

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        case '^':
            return exponent(x, y);
        default:
            return null;
    }
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function exponent(x, y) {
    return x ** y;
};

function back() {
    if (displayValue.charCodeAt(displayValue.length-1) == 32) {
        displayValue = displayValue.slice(0, -3);
        operatorActive = false;

    } else if (displayValue.length == 1) {
        displayValue = '0';
        
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    display.textContent = displayValue;
};

function clear() {
    displayValue = '0';
    display.textContent = displayValue;
    operatorActive = false;
};

function plusMinus(value) {
    if(value.charCodeAt(0) == 45){
        return value.slice(1);
    } else {
        return '-' + value;
    }
};

function decimal(value) {
    if(!value.includes('.')) {
        return value + '.'
    } else {
        return value
    }
};