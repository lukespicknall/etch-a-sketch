const sketchPad = document.getElementById("sketchPad");
sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)'
sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)'
//let gridSize = 16;

createGrid();

function createGrid() {
    for(i = 0; i < 256; i++){
        let cell = document.createElement('div');
        sketchPad.appendChild(cell).className = 'cellBlock';
    }
}

//function makeRows(rowNum) {
//    for (r = 0; r < rowNum; r++) {
//        let row = document.createElement('div');
//        container.appendChild(row).className = 'rblock';
//    }
//}