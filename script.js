const container = document.getElementById("container");
let gridSize = 16

function createGrid () {
    for(i = 0; i < (gridSize * gridsize); i++ ){
        let cell = document.createElement('gridCell');
        container.appendChild(cell);
    }
}