const field = document.querySelector(".drawing-field");

for (i = 0; i < 256; i++) {
    const fieldBlock = document.createElement("div");
    fieldBlock.setAttribute("class", "field-block");
    fieldBlock.addEventListener("mouseenter", () => {
        fieldBlock.style.backgroundColor = 'black'
    });
    field.appendChild(fieldBlock);
}