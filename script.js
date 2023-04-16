const containerDiv = document.querySelector('#container');
const squareAmountButton = document.querySelector('#dimensions')
squareAmountButton.addEventListener('click', removeGrid)
squareAmountButton.addEventListener('click', gridSelection)

createGrid(50)

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
        let squareDiv = document.createElement('div');
        squareDiv.style.width = `${800 / gridSize}px`;
        squareDiv.style.height = `${800 / gridSize}}px`;
        squareDiv.className = 'square'
        containerDiv.appendChild(squareDiv)
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = "lightblue";
        })
        }
    }
}

function gridSelection() {
    let selectDimensions = prompt('Select how many squares you want in one direction (max value: 100)', '1')
    if (selectDimensions > 100) {
        alert('Error: maximum input is 100')
    } else createGrid(selectDimensions);   
    }

function removeGrid() {
        let squares = containerDiv.querySelectorAll('.square');
        squares.forEach((square) => {
          containerDiv.removeChild(square);
        });
}