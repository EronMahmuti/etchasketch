// const container = document.querySelector('#container')
// const content = document.createElement('div')
// const grid = document.createElement('div')
// const grid1 = document.createElement('div')
// content.classList.add('content');
// grid.classList.add('grid')
// grid.innerHTML = "<p> hey hey </p>"


// for(let i = 0; i < 3; i++){
    //     document.getElementsByClassName('content').append(grid);
    // }
    
const container = document.querySelector('#container')
window.addEventListener("load",setDefaultGrid());
function setDefaultGrid(){
    setGsize(16)
    fill(16);
}

function setGsize(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


function fill(size){
    for(let i = 0; i < size * size; i++){
        let gridEl = document.createElement("div");
        gridEl.classList.add = "grid-element";
        gridEl.addEventListener("mousemove",changeColor);
        container.appendChild(gridEl);
    }

}
function makeGrid(size){
    size = parseInt(prompt("type a number"))
    for(let i = 0;i < size;i++){
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        let rows = document.createElement('div');
        rows.classList = ('grid');
        document.getElementsByClassName('grid').innerHtml = "asd"
        container.append(rows);
    }
}

makeGrid();




