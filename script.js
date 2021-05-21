let containerDiv = document.querySelector(".grid-container");
let root = document.documentElement;
let resetBtn =  document.querySelector('#resetBtn');
let gridBtn =  document.querySelector('#gridBtn');
let gridNumberInput = document.getElementById("gridNumberInput");
let gridNumber;
let pInputReturn =  document.getElementById("inputValReturn");

// root.setProprety("--rowNum", 6) change css variable

function createDiv(){
    let createdDiv = document.createElement("div");
    createdDiv.classList.add("createdDiv");
    containerDiv.appendChild(createdDiv);
    createdDiv.addEventListener("mouseover", changeColor);
}

function changeColor(e){
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

gridBtn.addEventListener("click", changeGrid);

function changeGrid(e){   
    if(gridNumberInput.value > 99 || gridNumberInput.value < 1){
        pInputReturn.classList.remove("hidden");
        pInputReturn.textContent = "Choose a number between 1 and 99";
    } else {
        removeGrid();
        pInputReturn.classList.add("hidden");
        pInputReturn.textContent = "";
        root.style.setProperty("--rowNum", gridNumberInput.value);
        root.style.setProperty("--colNum", gridNumberInput.value);
        createGrid(gridNumberInput.value*gridNumberInput.value);
    }
    
}

function resetGrid(){
    removeGrid();
    createGrid(gridNumberInput.value*gridNumberInput.value);
}

function removeGrid(){
    divs = document.querySelectorAll(".createdDiv")
    divs.forEach(e => e.remove());
}

function createGrid(gridNumber) {
    for(i=0; i < gridNumber; i++){
        createDiv();
    }
}

for(i=0; i < 16; i++){
    createDiv();
}


