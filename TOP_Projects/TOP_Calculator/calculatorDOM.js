// import {operation} from "./calculator.js";

const Button = document.querySelectorAll("button");
const displayedNum = document.querySelector("h1");

Button.forEach(element => {
    element.addEventListener("click",() => {
        displayedNum.textContent = element.textContent;
    })
});

