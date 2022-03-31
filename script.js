const container = document.getElementById("container");
let rows = document.getElementsByClassName('rblock')
//  ** runs grid on HTML
grid();

//  ** sets A x B grid paremeters  **  //
function grid() {
makeRows(16);
makeColumns(16);
}

//  **  Create rows in HTML, then based on rows creates columns off them  **  //
function makeRows(rowNum){
    for(r = 0; r < rowNum; r++){
        let row = document.createElement('div');
        container.appendChild(row).className = 'rblock';
    }    
}
function makeColumns(colNum){
    for(i = 0; i < rows.length; i++){
        for(j = 0; j < colNum; j++){
            let cell = document.createElement('div');
            rows[j].appendChild(cell).className = 'cblock';

        }
    }
}

//  **  Changes color on each cell on mouseover  **//
let cellBlock = document.querySelectorAll('.cblock');
cellBlock.forEach(cellBlock => {
    cellBlock.onmouseover = function() {
        cellBlock.style.background = 'purple';
        };       
});









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
