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

console.log(mathFunction.add(2, 3));
console.log(mathFunction.subtract(2, 3));
console.log(mathFunction.multiply(2, 3));
console.log(mathFunction.divide(8, 2));