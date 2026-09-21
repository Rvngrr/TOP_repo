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
            if(x === ''){
                x = element.textContent;
                displayedNum.textContent = x;
            }
            else{
                console.log(x);
                x += element.textContent;
                displayedNum.textContent = x;
                console.log(x);

            }
        }
        else{
            //second num
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

operatorBtn.forEach(element => {
    element.addEventListener("click", () => {
        displayedNum.textContent = element.textContent;
        if(operator === ''){
            operator = element.textContent;
            decimal = false;

            console.log('x: ', x);
            console.log('y: ', y);
            console.log('op: ', operator);
        }
        else {
            equalBtn.click();
            x = ans;
            y = '';
            operator = element.textContent;
            decimal = false;
            console.log('x: ', x);
            console.log('y: ', y);
            console.log('op: ', operator);
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
            console.log(y);
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