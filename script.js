// Variables 
let prevOperand;
let currentOperand;
let operator;
let isPreceededByOperator = false;


const numbers = document.querySelectorAll(".num");
const bottomDisplay = document.querySelector(".bottom");
const topDisplay = document.querySelector(".top");
const clearBtn = document.querySelector(".clear");
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

function updateDisplay() {
    topDisplay.textContent = prevOperand ? prevOperand + operator : "";
    bottomDisplay.textContent = currentOperand ?? "";
}

operators.forEach((op)=>{
    op.addEventListener("click", ()=>{
        operator = op.textContent;
        if (!prevOperand) {
            // logic
            prevOperand = bottomDisplay.textContent;
            isPreceededByOperator = true;

            // front 
            topDisplay.textContent = prevOperand + operator
        } else {
            // logic
            currentOperand = bottomDisplay.textContent;
            
            prevOperand = operate(prevOperand, operator, currentOperand);
            isPreceededByOperator = true;

            // front 
            topDisplay.textContent = prevOperand + operator
            bottomDisplay.textContent = prevOperand;
        }
    })
})