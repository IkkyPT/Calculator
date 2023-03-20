// Global variables
const numberData = document.querySelectorAll('[data-numbers]');
const btnNumber = document.querySelectorAll('.btnNums');
const currResult = document.querySelector('.curr-Result');
const numberOperator = document.querySelectorAll('[data-operator]');
const btnOperator = document.querySelectorAll('.btnOper');
const prevResult = document.querySelector('.prev-Result');
const equalsBtn = document.querySelector('.btnEqual');
let a = 0;
let b = 0;
let currValue = 0;
let nextValue = 0;
let operatorType = '';

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
};

// Operate function
function operate(operator, a, b){
    switch (operator) {
        case '+':
            return mathFunction.add(a, b)
        case '-':
            return mathFunction.subtract(a, b);
        case 'x':
            return mathFunction.multiply(a, b);
        case '÷':
            return mathFunction.divide(a, b);
        default:
            return null;
    };
};

// Get result function
function getResult(){
    let { a, b, operator } = getValues();
    b = currValue;
    let result = operate(operator, a, b);
    currResult.textContent = result;
    prevResult.textContent = '';
    a = result;
    b = 0;
    currValue = result;
}

// Return values function
function getValues() {
    return {
      a,
      b,
      operator
    }
}

// Clear function

function clearfunc(){
    currResult.textContent = "0";
    prevResult.textContent = "";
    currValue = 0;
};


// UI - Display
  // Add numbers to display once number buttons are clicked
numberData.forEach(btnNumber => {
    btnNumber.addEventListener('click', () => {
        const number = btnNumber.getAttribute('data-numbers');
        if (currResult.textContent === "0") {
            currResult.textContent = number;
        } else {
            currResult.textContent += number;
        }
        currValue = parseFloat(currResult.textContent);
    });
});

numberOperator.forEach(btnOperator => {
    btnOperator.addEventListener('click', () => {
        const operatorType = btnOperator.getAttribute('data-operator');
        if (currResult.textContent !== ""){
            currResult.textContent += operatorType;
            prevResult.textContent += currResult.textContent;
            currResult.textContent = "";
            operator = operatorType;
        }
        else {
            return null;
        }
        a = currValue;
    });
});

equalsBtn.addEventListener('click', () => {
    getResult();
});
