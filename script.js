const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.cssText = `
        display: flex; 
        justify-content: center;
        flex: 1;
    `;
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.style.cssText = `
            flex: 1;
            max-width: 40px;
            aspect-ratio: 1/1;
            border: 1px solid black;
        `;
        div.addEventListener("click", () => {
            div.style.backgroundColor = "black";
        })
        row.appendChild(div);
    }
}