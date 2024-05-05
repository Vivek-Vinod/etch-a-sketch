const container = document.querySelector("#container");
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.cssText = `
            display: flex; 
            justify-content: center;
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
createGrid(10);