let container = document.querySelector(".container")
let inputElement = document.querySelector(".input-size")
let button = document.querySelector(".enter");
let main = document.querySelector("main");
let randomize = document.querySelector(".randomize")


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

const makeBlack = (e) => {
    e.target.style.backgroundColor = "black";
}

const makeRainbow = (e) => {
    let red = Math.round(Math.random()*256);
    let blue = Math.round(Math.random()*256);
    let green = Math.round(Math.random()*256);
    console.log(e.target.style.backgroundColor)
    if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = `rgba(${red},${green},${blue}, 0.8)`;
    }
    
}
container.addEventListener("mouseover", makeBlack);







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

isRandom = false;

randomize.addEventListener("click", (e) => {
    if (isRandom === false) {
        container.removeEventListener("mouseover", makeBlack);
        container.addEventListener("mouseover", makeRainbow);
        randomize.setAttribute("style", "background-color: rgb(70, 70, 70);")
        isRandom = true;
    }
    else {
        container.removeEventListener("mouseover", makeRainbow);
        container.addEventListener("mouseover", makeBlack);
        randomize.setAttribute("style", "background-color: rgb(211, 211, 211);");
        isRandom = false;
    }
    

})