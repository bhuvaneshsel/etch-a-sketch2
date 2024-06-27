let container = document.querySelector(".container")
let inputElement = document.querySelector(".input-size")
let button = document.querySelector(".enter");
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

inputElement.addEventListener("keydown", (e) => {
    if (e.key ==="Enter") {
        drawCanvasEvent(e)
    }
   
})

button.addEventListener("click", (e) => {
    drawCanvasEvent(e)
});

function drawCanvasEvent(e) {
    let num = +inputElement.value;
    if (isNaN(num)) {
            inputElement.value ="";
            inputElement.placeholder = "Enter a number!";
    }
    else {
        if (+inputElement.value > 100) {
            inputElement.value ="";
            inputElement.placeholder = "Too big!"
        }
        else if (inputElement.value <=0) {
            inputElement.value ="";
            inputElement.placeholder = "Too small!"
        }
        else {
            container.replaceChildren();
            drawCanvas(+inputElement.value);
        }
        
    }
        
}