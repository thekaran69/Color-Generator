const refreshButton = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");
const maxPaletteBoxes = 32;

const generatePalette = ()=>{

    for (let i = 0;i < maxPaletteBoxes; i++) {
        
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style = "background : ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
        
    }




}

refreshButton.addEventListener("click", generatePalette)