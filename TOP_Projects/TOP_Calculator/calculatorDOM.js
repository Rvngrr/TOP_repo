import {operation} from "./calculator.js";

const numBtn = document.querySelectorAll(".num-btn");
const displayedNum = document.querySelector("h1");
const operatorBtn = document.querySelectorAll(".operators");
const allClearBtn = document.querySelector(".AC-btn");
const backspaceBtn = document.querySelector(".bck-btn");
const equalBtn = document.querySelector(".eql-btn");
const decimalBtn = document.querySelector(".dec-btn");

let x = '';
let operator = '';
let y = '';
let ans = 0;
let decimal = false;

numBtn.forEach(element => {
    element.addEventListener("click",() => {
        //todo if(/^0-9$/.test(element.textContent)){
        if( operator === ''){
            // first num
            if (x.length > 16){return}
            if(x === ''){
                x = element.textContent;
                displayedNum.textContent = x;
            }
            else{
                x += element.textContent;
                displayedNum.textContent = x;
            }
        }
        else{
            //second num
            if (y.length > 16){return}
            if(y === ''){
                y = element.textContent;
                displayedNum.textContent = y;
            }
            else{
                y += element.textContent;
                displayedNum.textContent = y;
            }
        }
    });
});

allClearBtn.addEventListener("click",() => {
    displayedNum.textContent = 0;
    x = '';
    y = '';
    operator = '';
    ans = 0;
    decimal = false;
});

backspaceBtn.addEventListener("click", () => {
    if (operator === '') {
        x = x.slice(0, -1);
        displayedNum.textContent = x || 0;
    }
    else {
        y = y.slice(0, -1);
        displayedNum.textContent = y || 0;
    }
});

operatorBtn.forEach(element => {
    element.addEventListener("click", () => {
        displayedNum.textContent = element.textContent;
        if(operator === ''){
            operator = element.textContent;
            decimal = false;
        }
        else {
            equalBtn.click();
            x = ans;
            y = '';
            operator = element.textContent;
            displayedNum.textContent = operator;
            decimal = false;
        }
    });
});

decimalBtn.addEventListener("click", () => {    
    if(!decimal){
        decimal = true;
        if(operator === ''){
            displayedNum.textContent += '.';
            x += '.';
        }
        else {
            if(y === ''){
                displayedNum.textContent = '0.';
                y += "0.";
            }
            else{
                displayedNum.textContent += '.';
                y += '.';
            }
        }
    }
});

equalBtn.addEventListener('click', () => {
    const firstNum = Number(x);
    const secondNum = Number(y);

    ans = operation(firstNum,operator,secondNum);

    displayedNum.textContent = ans;

      // Make the answer the new number we're editing
    x = String(ans);
    y = '';
    operator = '';
    decimal = false;
});


document.addEventListener("keydown", (event) => {
    const key = event.key;
    const operatorKey = ["+", "-", "*", "/"];
    
    if (/[0-9]/.test(key)) {
         // Number keys
        numBtn.forEach(button => {
            if (button.textContent === event.key) {
                button.click();
            }
        });
    }

    if (key === ".") {
        decimalBtn.click();
    }

    if (key === "Backspace") {
        backspaceBtn.click();
    }

    if (key === "Enter") {
        equalBtn.click();
    }

    if (key === "Escape") {
        allClearBtn.click();
    }
});