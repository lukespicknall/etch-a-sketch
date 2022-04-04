function createGrid(size) {
    const sketchPad = document.getElementById("sketchPad");
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        sketchPad.appendChild(cell).className = 'cellBlock';
    }
    changeColor()
}

createGrid(60);

//  **  Changes color on each cell on mouseover  **//
function changeColor() {
    let cellBlock = document.querySelectorAll('.cellBlock');
    cellBlock.forEach(cellBlock => {
        cellBlock.onmouseover = function () {
            cellBlock.style.background = 'purple';
        };
    });
}

//  **  Promtps new grid size, takes input, makes deciscion. ideally wipes old grid creates new if input is real number  **  //
let reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    let newGrid = prompt("Cool! Pick a new grid size");
    if (newGrid === null || newGrid === "") {
        return;
    } else if (isNaN(newGrid) === true) {
        alert("so, thats wasn't a number which makes it kinda hard. Try a real number.");
        return;
    } else if (newGrid > 100) {
        alert("Thats actually kinda hard for me. Let's keep it under 100 . . . . jeez. Hit Reset again.")
        return
    } else {
        while (sketchPad.hasChildNodes()) {
            sketchPad.removeChild(sketchPad.firstChild);
        }
    createGrid(newGrid);
    changeColor();
    }
})


        //  **  this was to clear grid, but new grid creation essentially does that by deleting old grid  **  //
        //let reset = document.querySelector('#reset')  
        //reset.addEventListener('click', () => {
        //cellBlock.style.background = 'transparent'
        //});








