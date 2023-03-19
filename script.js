// Math basic functions
const mathFunction = {
    add,
    subtract,
    multiply,
    divide,
}

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

console.log(operate('/', 4, 5));