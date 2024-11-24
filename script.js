let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
const field = document.querySelector(".drawing-field");
const colorPicker = document.querySelector("#colorPicker")

for (i = 0; i < 256; i++) {
    const fieldBlock = document.createElement("div");
    fieldBlock.setAttribute("class", "field-block");
    fieldBlock.addEventListener("mouseenter", () => {
        if (mouseDown) {
            fieldBlock.style.backgroundColor = colorPicker.value
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