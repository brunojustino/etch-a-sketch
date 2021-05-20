let containerDiv = document.querySelector(".grid-container");
let root = document.querySelector(':root');

// document.documentElement.style.setProprety("--rowNum", 6) change css variable

function createDiv(){
    let createdDiv = document.createElement("div");
    createdDiv.classList.add("createdDiv");
    containerDiv.appendChild(createdDiv);
    createdDiv.addEventListener("mouseover", changeColor);
}

function changeColor(e){
    //console.log(e.target);
    e.target.style.background = generateRGBColor();
}

function generateRGBColor(){
    let r,g,b, rgbColor;
    r =  Math.floor(Math.random() * 256);
    g =  Math.floor(Math.random() * 256);
    b =  Math.floor(Math.random() * 256);
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor
}

for(i=0; i< 16; i++){
    createDiv();
}

