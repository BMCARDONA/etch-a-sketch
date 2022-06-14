
const container = document.querySelector('#container');
function makeCell (num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
}


function gridSize() {
  let number = prompt("How many squares per side? (Maximum: 69)", 10); 
   while (number > 69) {
       number = prompt("Please enter a number less than or equal to 69!");
   }
   makeCell(number);
   makeGrid(number, number);
}

gridSize();