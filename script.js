const container = document.getElementById("container");
let rows = document.getElementsByClassName('rblock')

//  ** sets intitial grid paremeters and runs it  **  //
function grid() {
    makeRows(16);
    makeColumns(16);
    changeColor()
}
grid();

//  **  Create rows in HTML, then based on rows creates columns off them  **  //
function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'rblock';
    }
}
function makeColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let cell = document.createElement('div');
            rows[j].appendChild(cell).className = 'cblock';

        }
    }
}

//  **  Changes color on each cell on mouseover  **//
function changeColor() {
    let cellBlock = document.querySelectorAll('.cblock');
    cellBlock.forEach(cellBlock => {
        cellBlock.onmouseover = function () {
            cellBlock.style.background = 'purple';
        };
        //  **  this was to clear grid, but new grid creation essentially does that by deleting old grid  **  //
        //let reset = document.querySelector('#reset')  
        //reset.addEventListener('click', () => {
        //cellBlock.style.background = 'transparent'
        //});
    });
}

//  **  Promtps new grid size, takes input, makes deciscion. ideally wipes old grid creates new if input is real number  **  //
let reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    let newGrid = prompt("Cool! Pick a new grid size");
    if (newGrid === null || newGrid === "") {
        return;
    } else if (isNaN(newGrid ) === true) {
        alert("so, thats wasn't a number which makes it kinda hard. Try a real number.");
        return;
    } else if (newGrid > 100) {
        alert("Thats actually kinda hard for me. Let's keep it under 100 . . . . jeez. Hit Reset again.")
        return
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        function grid() {
            makeRows(newGrid);
            makeColumns(newGrid);
        }
        grid();
        changeColor();
    }
})









//let columns = document.querySelector('.cblock');
//columns.onmouseover = function() {
//columns.style.background = 'green';
//};



//let columns = document.getElementsByClassName('cblock')
//for (var i = 0 ; i < columns.length; i++) {
        //columns[i].addEventListener('mouseover', function( event ) {
            // highlight the mouseenter target
         //   event.target.style.color = "purple";
     //})
   // }

//let rows = document.getElementsByClassName('rowClass')
//let columns = document.getElementsByClassName('columnClass')

//function grid() {
//makeRows(16);
//makeColumns(16);
//}

//function makeRows(rowNum) {
//    for(r = 0; r < rowNum; r++){
//        let row = document.createElement('div');
//        container.appendChild(row).classname = 'rowClass';
//
//    }
//};

//function makeColumns(colNum) {
//    for(i = 0; i < rows.length; i++) {
 //       for (j = 0; j < cellNum; j++) {
//        let newCell = document.createElement("div");
 //       rows[j].appendChild(newCell).className = "columnClass";
 //       }
//}
//}
