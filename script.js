// Global variables
const numberData = document.querySelectorAll('[data-numbers]');
const btnNumber = document.querySelectorAll('.btnNums');
const currResult = document.querySelector('.curr-Result');
const numberOperator = document.querySelectorAll('[data-operator]');
const btnOperator = document.querySelectorAll('.btnOper');
const prevResult = document.querySelector('.prev-Result');
const equalsBtn = document.querySelector('.btnEqual');
let a;
let b;
let currValue = 0;
let operatorType = '';
let multiOperaOn = false;
let result;
class Calculator {
  add(a, b) {
    return a + b;
  }

  // Subtract function
  subtract(a, b) {
    return a - b;
  }

  // Multiply function
  multiply(a, b) {
    return a * b;
  }

  // Divide function
  divide(a, b) {
    return a / b;
  }
}

// Object with group of operate functions
const mathFunction = new Calculator();

// Operate function
function operate(operator, a, b) {
  switch (operator) {
    case 'x':
      return mathFunction.multiply(a, b);
    case '÷':
      return mathFunction.divide(a, b);
    case '+':
      return mathFunction.add(a, b);
    case '-':
      return mathFunction.subtract(a, b);
    default:
      return null;
  }
}

// Get result function
function getResult() {
  b = currValue;
  result = operate(operator, a, b);
  currResult.textContent = result;
  prevResult.textContent = '';
  a = result;
  b = 0;
  currValue = result;
}

// Clear function
function clearBoard() {
  currResult.textContent = '0';
  prevResult.textContent = '';
  currValue = 0;
  a = 0;
  result = 0;
  multiOperaOn = false;
}

// UI - Display
// Add numbers to display once number buttons are clicked
numberData.forEach((btnNumber) => {
  btnNumber.addEventListener('click', () => {
    const number = btnNumber.getAttribute('data-numbers');
    if (currResult.textContent === '0') {
      currResult.textContent = number;
    } else {
      currResult.textContent += number;
    }
    currValue = parseFloat(currResult.textContent);
  });
});

numberOperator.forEach((btnOperator) => {
  btnOperator.addEventListener('click', () => {
    const operatorType = btnOperator.getAttribute('data-operator');
    if (multiOperaOn == true) {
      b = currValue;
      result = operate(operator, a, b);
      a = result;
      b = 0;
      currValue = result;
    } else {
      a = currValue;
    }
    multiOperaOn = true;
    if (currResult.textContent !== '') {
      currResult.textContent += operatorType;
      prevResult.textContent += currResult.textContent;
      currResult.textContent = '';
      operator = operatorType;
    } else {
      return null;
    }
  });
});

equalsBtn.addEventListener('click', () => {
  getResult();
  multiOperaOn = false;
});
