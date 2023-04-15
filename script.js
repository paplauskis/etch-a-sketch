const containerDiv = document.querySelector('#container');
const squareAmountButton = document.querySelector('#dimensions')
squareAmountButton.addEventListener('click', removeGrid)
squareAmountButton.addEventListener('click', gridSelection)
function createGrid(gridSize) {
    // containerDiv.style.gridTemplateColumns = `repeat (${gridSize}, 1fr)`;
    // containerDiv.style.gridTemplateRows = `repeat (${gridSize}, 1fr)`;  
    for (i = 0; i < (gridSize ** 2); i++) {
        let squareDiv = document.createElement('div');
        squareDiv.className = 'square'
        squareDiv.textContent = 'o'
        containerDiv.appendChild(squareDiv)
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = "black";
        })
    }
}

function gridSelection() {
    let selectDimensions = prompt('Select how many squares you want in one direction (max value: 100)', '1')
    if (selectDimensions > 100) {
        alert('Error: maximum input is 100')
    }else createGrid(selectDimensions);   
    }

function removeGrid() {
        let squares = containerDiv.querySelectorAll('.square');
        squares.forEach((square) => {
          containerDiv.removeChild(square);
        });
      }