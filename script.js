// Global variables
const numberData = document.querySelectorAll('[data-numbers]');
const btnNumber = document.querySelectorAll('.btnNums');
const currResult = document.querySelector('.curr-Result');

// Object with group of operate functions
const mathFunction = {
    add,
    subtract,
    multiply,
    divide,
}

// Math basic functions
// Add function
function add(a, b){
    return a + b;
}

// Subtract function 
function subtract(a, b){
    return a - b;
}

// Multiply function
function multiply(a, b){
    return a * b;
}

// Divide function
function divide(a, b){
    return a / b;
}

// Operate function
function operate(operator, a, b){
    switch (operator) {
        case '+':
            return mathFunction.add(a, b)
        case '-':
            return mathFunction.subtract(a, b);
        case '*':
            return mathFunction.multiply(a, b);
        case '/':
            return mathFunction.divide(a, b);
        default:
            return null;
    }
}

// UI - Display
numberData.forEach(btnNumber => {
    btnNumber.addEventListener('click', () => {
        const number = btnNumber.getAttribute('data-numbers');
        if (currResult.textContent === "0") {
            currResult.textContent = number;
        } else {
            currResult.textContent += number;
        }
        let currNum = currResult.textContent;
        console.log(currNum);
    });
});