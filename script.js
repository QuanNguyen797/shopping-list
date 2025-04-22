console.log("Hello, world!");

let list = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

function onClick() {
    let content = input.value;
    input.value="";
    let item = document.createElement("li");
    let span = document.createElement("span");
    let button1 = document.createElement("button");
    item.appendChild(span);
    item.appendChild(button1);
    span.textContent = content;
    button1.textContent = "Delete";
    list.appendChild(item);
    button1.addEventListener('click', () => { item.remove() });
    input.focus();
}

button.addEventListener('click', onClick);

