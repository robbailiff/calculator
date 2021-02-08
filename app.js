// Calculator //

//Variables
let displayValue = "";
let operatorActive = false;

// Selectors
const display = document.querySelector('#input-display')

// Listener Events

const numberButtons = document.querySelectorAll('button.number')
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let pressedButton = e.target.id;

        displayValue += pressedButton;
        console.log(displayValue);
        display.textContent = displayValue;
    })
});

const operatorButtons = document.querySelectorAll('button.operation')
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let pressedButton = e.target.value;
        
        displayValue += ` ${pressedButton} `;
        console.log(displayValue);
        display.textContent = displayValue;
    })
});

const functionButtons = document.querySelectorAll('button.function')
functionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let pressedButton = e.target.id;
        window[pressedButton]();
    })
});

// Operator functions

function operate(operator, x, y) {
    return operator(x, y);
};

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function back() {
    console.log("The back button was pressed.")
}

function clear() {
    console.log("The clear button was pressed.")
}

function percentage() {
    console.log("The % button was pressed.")
}

function plusMinus() {
    console.log("The +/- button was pressed.")
}

function decimal() {
    console.log("The decimal button was pressed.")
}

function equals() {
    console.log("The = button was pressed.")
}