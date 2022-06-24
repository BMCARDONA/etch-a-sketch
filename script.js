
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

  let price = document.querySelector('#price');
  let output = document.querySelector('.price-output');
  let number = price.value
  output.textContent = price.value;

  price.addEventListener('input', function() {
    output.textContent = price.value;
    // This code is just adding extra cells -- that's not what we want
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    number = price.value 
    makeCell(number);
    makeGrid(number, number);
  });

  makeCell(number);
  makeGrid(number, number);


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
