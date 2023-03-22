// Global variables
const numberData = document.querySelectorAll('[data-numbers]');
const btnNumber = document.querySelectorAll('.btnNums');
const currResult = document.querySelector('.curr-Result');
const numberOperator = document.querySelectorAll('[data-operator]');
const btnOperator = document.querySelectorAll('.btnOper');
const prevResult = document.querySelector('.prev-Result');
const equalsBtn = document.querySelector('.btnEqual');
let a ;
let b ;
let currValue = 0;
let operatorType = '';
let modifyResult = '';
let multipleOperators = false;
let result;

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
        case 'x':
            return mathFunction.multiply(a, b);
        case '÷':
            return mathFunction.divide(a, b);
        case '+':
            return mathFunction.add(a, b)
        case '-':
            return mathFunction.subtract(a, b);
        default:
            return null;
    };
};

// Get result function
function getResult(){
    result = operate(operator, a, b);
    a = result;
    b = 0;
    currValue = result;
}

// Clear function
function clearBoard(){
    currResult.textContent = "0";
    prevResult.textContent = "";
    currValue = 0;
    a = undefined;
    result = 0;
    multipleOperators = false;
};

// Delete function
function deletePrev() {
    modifyResult = currResult.textContent;
    modifyResult = modifyResult.slice(0, modifyResult.length - 1);
    currResult.textContent = modifyResult;
    currValue = parseFloat(currResult.textContent);
}

// Round number function
function roundNum(){
    modifyResult = currResult.textContent;
    if (modifyResult.length > 12) {
        modifyResult = modifyResult.slice(0, - (modifyResult.length - 12));
        currResult.textContent = modifyResult;
    }
}

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
        if (a) {
            b = currValue;
        }
    });
});

numberOperator.forEach(btnOperator => {
    btnOperator.addEventListener('click', () => {
        const operatorType = btnOperator.getAttribute('data-operator');
        if (multipleOperators == true){
            getResult();
        }
        else {
            a = currValue;
        }
        multipleOperators = true;
        if (currResult.textContent !== ""){
            currResult.textContent += operatorType;
            prevResult.textContent += currResult.textContent;
            currResult.textContent = "";
            operator = operatorType;
        }
    });
});

equalsBtn.addEventListener('click', () => {
    if (isNaN(a) || isNaN(b)) {
        return; // Exit early if expression is incomplete
    }
    getResult();
    currResult.textContent = result;
    prevResult.textContent = '';
    roundNum();
    multipleOperators = false;
});
