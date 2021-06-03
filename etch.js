const container = document.querySelector('#container')
const restart = document.querySelector('#restart-btn');
const content = document.createElement('div')
content.classList.add('content')

container.append(content)

window.addEventListener("load",setDefaultGrid);
restart.addEventListener("click",changeSize);

function setDefaultGrid(){
    setGrid(16);
    fillGrid(16);
}

function setGrid(size){
    content.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
    for(let i = 0; i< size * size;i++){
        const gridEl = document.createElement('div');
        gridEl.classList = "grid-element";
        gridEl.addEventListener("mouseover", changeColor);
        content.appendChild(gridEl);
    }
}
function changeColor(e){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize(){
    let newSize = prompt("enter how many rectangles do you want");
    if(newSize !== null){
        newSize = parseInt(newSize);
        if(newSize < 1 || newSize > 64 || Number.isNaN(newSize)){
            alert("enter a number between 1-64");
            changeSize();
        }
        else{
            clearGrid();
            setGrid(newSize);
            fillGrid(newSize);
        }
    }
}
function clearGrid(){
    const gridArr = Array.from(content.childNodes);
    gridArr.forEach((element) => {
        content.removeChild(element);
    });
}




