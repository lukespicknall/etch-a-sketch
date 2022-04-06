
function createGrid(size) {
    const sketchPad = document.getElementById("sketchPad");
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        sketchPad.appendChild(cell).className = 'cellBlock';
    }
    toggleOn();
}

//  ** Creates defualt 60 x 60 grid on page launch  ** //
createGrid(60);



//  **  Changes color on each cell on mouseover after click on container **//
//  **  then turn pen off when you click again, then calls color change again  **  //
function toggleOn() {
    sketchPad.onclick = function () {
        let cellBlock = document.querySelectorAll('.cellBlock');
        cellBlock.forEach(cellBlock => {
            cellBlock.onmouseover = function () {
                cellBlock.style.background = 'purple';
            };
        });
        sketchPad.onclick = function () {
            let cellBlock = document.querySelectorAll('.cellBlock');
            cellBlock.forEach(cellBlock => {
                if (cellBlock.style.background == '') {
                    cellBlock.onmouseover = function () {
                        cellBlock.style.background = '';
                    }
                }
            });
            toggleOn();
        }
    }

}

//  **  Promtps new grid size, takes input, makes deciscion. ideally wipes old grid creates new if input is real number  **  //
reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    let newGrid = prompt("Cool! Pick a new grid size 1 - 100.");
    if (newGrid === null) {
        return;
    } else if (isNaN(newGrid) === true) {
        alert("so, thats wasn't a number which makes it kinda hard. Try a real number.");
        return;
    } else if (newGrid > 100) {
        alert("Thats actually kinda hard for me. Let's keep it under 100 . . . . jeez. Hit Reset again.")
        return
    } else if (newGrid === "") {
        while (sketchPad.hasChildNodes()) {
            sketchPad.removeChild(sketchPad.firstChild);
        }
        createGrid(60);
    } else {
        while (sketchPad.hasChildNodes()) {
            sketchPad.removeChild(sketchPad.firstChild);
        }
        createGrid(newGrid);
    }
})

//  **  This was an attempt to get value of an HTML range input to set grid size  **  //
//let slider = document.getElementById('#slider').value;
//slider.addEventListener('change', () => {    
//    let newGrid = slider.nodeValue;
//    createGrid(newGrid);
//    toggleOn()})

//  **  this was to clear grid, but new grid creation essentially does that by deleting old grid  **  //
//let reset = document.querySelector('#reset')
//reset.addEventListener('click', () => {
//cellBlock.style.background = 'transparent'
//});








