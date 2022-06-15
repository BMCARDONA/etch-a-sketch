
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

function makeGrid(numRows, numCols) {
    container.style.setProperty('--numRows', numRows); 
    container.style.setProperty('--numCols', numCols); 
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

// black button
function changeColorBlack (target) {
  target.style.backgroundColor = 'black';
}
container.addEventListener("mouseover", function (e) {
  let target = e.target;
  if (target.matches('.cell')) {
      changeColorBlack(target);
  }
});
const blackBtn = document.querySelector('.blackBtn');
blackBtn.addEventListener("click", function (e) {
  container.addEventListener("mouseover", function (e) {
      let target = e.target;
      if (target.matches('.cell')) {
          changeColorBlack(target);
      }
  });
}); 

// reset button
const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', function() {
     window.location.reload();
});


// rainbow button
function changeColorRandom (target) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  target.style.backgroundColor = bgColor;
}
const rainbowBtn = document.querySelector('.rainbowBtn');
rainbowBtn.addEventListener("click", function (e) {
  container.addEventListener("mouseover", function (e) {
      let target = e.target;
      if (target.matches('.cell')) {
          changeColorRandom(target);
      }
  });
});  



// eraser button
function changeColorWhite (target) {
  target.style.backgroundColor = 'white';
}
const eraseBtn = document.querySelector('.eraseBtn');
eraseBtn.addEventListener("click", function (e) {
  container.addEventListener("mouseover", function (e) {
      let target = e.target;
      if (target.matches('.cell')) {
          changeColorWhite(target);
      }
  });
});  git 
