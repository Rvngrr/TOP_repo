const container = document.querySelector('#container');

//create element
const content = document.createElement('div');
const p = document.createElement('p');
const p1 = document.createElement('p');
const h3 = document.createElement('h3');

const div = document.createElement('div');
const h1 = document.createElement('h1');


//add class name
content.classList.add('content');

//add/edit text content
p.textContent = "Hey I'm red";
h3.textContent = "I'm a blue h3!";

//style
p.setAttribute("style","color: red;");
h3.style.color = 'blue';

//append or add the created element to the container
container.appendChild(content);
content.appendChild(p);
content.appendChild(h3);

h1.textContent = "I'm in a div";
p1.textContent = "ME TOO!"

div.setAttribute("style", `
    border-color: black;
    background-color: pink;
    border-style:solid;
    border-color: black;
    border-width: 3px;
    `)

div.appendChild(h1);
div.appendChild(p1);
content.appendChild(div);