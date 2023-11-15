// Variables 
let firstOperand;
let secondOperand;
let operator;

// Math Logic 
let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

// console.log("add", add(2,5));
// console.log("subtract", subtract(5, 4))
// console.log("multiply", multiply(3,6));
// console.log("divide", divide(6,7))

// Master Function
function operate (firstOperand, operator, secondOperand) { 
    let legend = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "x": multiply,
        "/": divide,
    }
    return legend[operator](+firstOperand, +secondOperand);
}

console.log("3 + 5 = ", operate("3", "/", "5"))

