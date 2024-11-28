let eraseActive = false;
let modeActive = false;
const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener("click", () => {
    eraseActive = !eraseActive;
    if (modeActive) {
        modeActive = !modeActive;
        modeButton.classList.remove("enabled");
    }
    if (eraseActive) {
        eraseButton.classList.add("enabled");
    }
    else {
        eraseButton.classList.remove("enabled");
    }
})


const modeButton = document.querySelector(".mode");
modeButton.addEventListener("click", () => {
    modeActive = !modeActive;
    if (eraseActive) {
        eraseActive = !eraseActive;
        eraseButton.classList.remove("enabled");
    }
    if (modeActive) {
        modeButton.classList.add("enabled");
    }
    else {
        modeButton.classList.remove("enabled");
    }
});


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
const field = document.querySelector(".drawing-field");
const colorPicker = document.querySelector("#colorPicker");
for (i = 0; i < 256; i++) {
    const fieldBlock = document.createElement("div");
    fieldBlock.setAttribute("class", "field-block");
    fieldBlock.addEventListener("mouseenter", () => {
        if (mouseDown) {
            if (eraseActive) {
                fieldBlock.style.backgroundColor = 'antiquewhite';
            } else if (modeActive) {
                fieldBlock.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); //generate random hex code
                console.log('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
            }
            else {
                fieldBlock.style.backgroundColor = colorPicker.value
            }
        }
    });
    field.appendChild(fieldBlock);
}


const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => {
    const fieldBloks = document.querySelectorAll(".field-block");
    for (i = 0; i < fieldBloks.length; i++) {
        fieldBloks[i].style.backgroundColor = 'antiquewhite';
    }
})
