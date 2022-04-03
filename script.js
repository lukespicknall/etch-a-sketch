const container = document.getElementById("container");
let gridSize = 16;



function createGrid() {
    for(i = 0; i < (gridSize * gridSize); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}
createGrid();
//function makeRows(rowNum) {
//    for (r = 0; r < rowNum; r++) {
//        let row = document.createElement('div');
//        container.appendChild(row).className = 'rblock';
//    }
//}