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
                displayedNum.textContent = x;
            }
            else{
                y += element.textContent;
                displayedNum.textContent = y;

            }
        }
        else{
            displayedNum.textContent += element.textContent;
            if(x === ''){
                x = element.textContent;
                displayedNum.textContent = x;

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
});

operatorBtn.forEach(element => {
    element.addEventListener("click", () => {
        displayedNum.textContent = element.textContent;
        if(operator === ''){
            operator = element.textContent;
            console.log('x: ', x);
            console.log('y: ', y);
            console.log('op: ', operator);
        }
        else {
            equalBtn.click();
            x = ans;
            y = '';
            operator = element.textContent;
            console.log('x: ', x);
            console.log('y: ', y);
            console.log('op: ', operator);
        }
    });
});

decimalBtn.addEventListener("click", () => {
    displayedNum.textContent += decimalBtn.textContent;
});

equalBtn.addEventListener('click', () => {
    const firstNum = Number(x);
    const secondNum = Number(y);

    ans = operation(firstNum,operator,secondNum);

    displayedNum.textContent = ans;

    console.log('x: ', x);
    console.log('y: ', y);
    console.log('op: ', operator);

    // x = '';
    // y = ''
    // operator = '';
    // console.log('x: ', x);
    // console.log('y: ', y);
    // console.log('op: ', operator);
});