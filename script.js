// Variables 
let prevOperand;
let currentOperand;
let operator;
let isPreceededByOperator = false;


const numbers = document.querySelectorAll(".num");
const bottomDisplay = document.querySelector(".bottom");
const topDisplay = document.querySelector(".top");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const operators = document.querySelectorAll(".operator");


console.dir(operators)


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
        "÷": divide,
    }
    return legend[operator](+firstOperand, +secondOperand);
}

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        if (!isPreceededByOperator) {
            bottomDisplay.textContent += number.textContent;
        } else {
            bottomDisplay.textContent = number.textContent;
            isPreceededByOperator = false; 
        }
    });
})

clearBtn.addEventListener("click", ()=> {
    prevOperand = currentOperand = null;
    updateDisplay(); 
})
equalBtn.addEventListener("click", ()=> {
    if (!operator) return;
    currentOperand = bottomDisplay.textContent;
    let result = operate(prevOperand, operator, currentOperand);
    // front 
    topDisplay.textContent = prevOperand + operator + currentOperand + "="
    bottomDisplay.textContent = result;
    prevOperand = operator = currentOperand = null;
})

function updateDisplay() {
    topDisplay.textContent = prevOperand ? prevOperand + operator : "";
    bottomDisplay.textContent = currentOperand ?? "";
}

operators.forEach((op)=>{
    op.addEventListener("click", ()=>{
        
        if (!prevOperand) {
            // logic
            prevOperand = bottomDisplay.textContent;
            operator = op.textContent;
            isPreceededByOperator = true;

            // front 
            topDisplay.textContent = prevOperand + operator
        } else {
            // logic
            currentOperand = bottomDisplay.textContent;
            
            prevOperand = operate(prevOperand, operator, currentOperand);
            isPreceededByOperator = true;

            operator = op.textContent;

            // front 
            topDisplay.textContent = prevOperand + operator
            bottomDisplay.textContent = prevOperand;
        }
    })
})