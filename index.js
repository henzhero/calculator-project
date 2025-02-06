const num1 = parseInt(prompt("first number?"));
const operator = prompt("operator ( + | - | * | / )");
const num2 = parseInt(prompt("second number?"));

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
    
        case '-':
            return num1- num2;

        case '*':
            return num1 * num2;
        
        case '/':
            return num1 / num2;
    }
}

let answer = operate (num1, operator, num2)

console.log("Answer: "+ answer);