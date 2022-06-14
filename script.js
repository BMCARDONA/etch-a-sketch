
function gridSize() {
  let number = prompt("How many squares per side? (Maximum: 69)", 10); 
   while (number > 69) {
       number = prompt("Please enter a number less than or equal to 69!");
   }
   makeCell(number);
   makeGrid(number, number);
}

gridSize();