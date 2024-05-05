const DEFAULT_SIZE = 16;
const body = document.querySelector("body");
function createGrid(size) {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.cssText = `
            display: flex; 
            max-width: 640px;
            flex: 1;
        `;
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.style.cssText = `
                flex: 1;
                aspect-ratio: 1/1;
                border: 1px solid black;
            `;
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            })
            row.appendChild(div);
        }
    }
}

createGrid(DEFAULT_SIZE);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const size = prompt("Grid Size: ");
    const container = document.querySelector("#container");
    container.remove();
    createGrid(size);
})