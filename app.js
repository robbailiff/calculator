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
        if (displayValue.length <= 1 && displayValue.charAt(0) == 0) {
            displayValue = pressedButton;
        } else {
            displayValue += pressedButton;
        }
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

        if(e.target.id == 'equals') {
            console.log('Equals Button');
        } else {
            let displayArray = displayValue.split(' ');

            if (displayArray.length < 3) {
                //change index 0
                displayArray[0] = window[pressedButton](displayArray[0]);
                console.log(displayArray[0])
            } else {
                //change index 2
                displayArray[2] = window[pressedButton](displayArray[2]);
                console.log(displayArray[0])
        }
        displayValue = displayArray.join(' ');
        display.textContent = displayValue;
        }
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

function exponent(x, y) {
    return x ** y;
}

function back() {
    if (displayValue.charCodeAt(displayValue.length-1) == 32) {
        displayValue = displayValue.slice(0, -3);
    } else if (displayValue.length == 1) {
        displayValue = '0';
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    display.textContent = displayValue;
}

function clear() {
    displayValue = '0';
    display.textContent = displayValue;
}

function plusMinus(value) {
    if(value.charCodeAt(0) == 45){
        return value.slice(1);
    } else {
        return '-' + value;
    }
}

function decimal(value) {
    if(!value.includes('.')) {
        return value + '.'
    } else {
        return value
    }
}

function equals() {
    console.log("The = button was pressed.")
}