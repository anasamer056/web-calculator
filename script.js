// Variables 
let prevOperand;
let currentOperand;
let operator;


const numbers = document.querySelectorAll(".num");
const bottomDisplay = document.querySelector(".bottom");
const topDisplay = document.querySelector(".top");
const clearBtn = document.querySelector(".clear");

console.dir(clearBtn)


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
        bottomDisplay.textContent += number.textContent;
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
// topDisplay.textContent = "";
//     bottomDisplay.textContent = "";
    