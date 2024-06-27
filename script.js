let container = document.querySelector(".container")
let inputElement = document.querySelector(".input-size")
let button = document.querySelector("button");
let main = document.querySelector("main");


drawCanvas(16);

function drawCanvas(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (j = 0; j< size; j++) {
            const pixel = document.createElement("div");
            pixel.classList.toggle("pixel");
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}



container.addEventListener("mouseover", (e) => { 
    e.target.style.backgroundColor = "black";
})

button.addEventListener("click", (e) => {
    container.replaceChildren();
    drawCanvas(+inputElement.value);
})