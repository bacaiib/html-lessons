// console.log("Hallo");
// let a = 2;
// let b = 5;
// console.log(a+b);

const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "teilen durch null nicht möglich";
const ERROR_STR_GEN = "ungültiger Op";
const ERROR_STR_INVALID_NUMBER = "eingabe nicht gültig";

startApp();

function startApp() {
    let num1 = getNum("Num1?: ");
    let num2 = getNum("Num2?: ");
    if (num1 === null || num2 === null) {
        return ERROR_STR_INVALID_NUMBER;
    } else {
        output(calculator(num1,num2,getOp()))
    }
}

function getNum() {
    let num = parseInt(prompt("Bitte zahl eingeben: "));
    if(isNaN(num)){
        return null;
    }
    return num;
}

function getOp() {6
    return prompt("gib op ein: ")
}

function calculator(a,b,op) {

    switch (op) {
        case "+":
           return add(a,b);
        case "-":
            return sub(a.b);
        case "*":  
            return mul(a,b);
        case "/":
        case ":":
            return div(a,b);
        default:   
            return ERROR_STR_GEN;
    }

}

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {

    if (b == 0) {
        return ERROR_STR_DIV;
    }
    return a / b;    
}

function output(outputData) {
    console.log(outputData)
}
