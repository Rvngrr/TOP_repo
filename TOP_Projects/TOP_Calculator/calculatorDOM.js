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

numBtn.forEach(element => {
    element.addEventListener("click",() => {
        //todo if(/^0-9$/.test(element.textContent)){
        if( displayedNum.textContent === '0' ||
            displayedNum.textContent === '+' ||
            displayedNum.textContent === '-' ||
            displayedNum.textContent === 'x' ||
            displayedNum.textContent === '/' 
        ){
            displayedNum.textContent = element.textContent;
            if(x === ''){
                x = element.textContent;
            }
            else{
                x += element.textContent;
            }
        }
        else{
            displayedNum.textContent += element.textContent;
            if(y === ''){
                y = element.textContent;
            }
            else{
                y += element.textContent;
            }
        }
    });
});

allClearBtn.addEventListener("click",() => {
    displayedNum.textContent = 0;
});

operatorBtn.forEach(element => {
    element.addEventListener("click", () => {
        displayedNum.textContent = element.textContent;
        operator = element.textContent;
    });
});

decimalBtn.addEventListener("click", () => {
    displayedNum.textContent += decimalBtn.textContent;
});

equalBtn.addEventListener('click', () => {
    const firstNum = Number(x);
    const secondNum = Number(y);

    let ans = operation(firstNum,operator,secondNum);

    displayedNum.textContent = ans;
    x = ans;
    y = '';
    operator = '';
});