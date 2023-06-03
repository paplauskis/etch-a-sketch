const containerDiv = document.querySelector('#container');
const buttonsDiv = document.querySelector('.buttons')
const clearButton = document.querySelector('.clear');
const penColor = document.querySelector('#pen-color');
const squareDiv = document.querySelector('.square');
clearButton.addEventListener('click', clearSquares);
let currentColor = '#000000';
let isMouseDown = false;

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
        let squareDiv = document.createElement('div');
        squareDiv.style.width = `${700 / gridSize}px`;
        squareDiv.style.height = `${700 / gridSize}}px`;
        squareDiv.className = 'square';
        containerDiv.appendChild(squareDiv);
        squareDiv.addEventListener('mousedown', () => isMouseDown = true)
        squareDiv.addEventListener('mouseup', () => isMouseDown = false)
        squareDiv.addEventListener('mouseover', () => {
            if(isMouseDown) squareDiv.style.backgroundColor = currentColor;
        })
        }
    }
}

createGrid(50);

penColor.addEventListener('input', (e) => {
    currentColor = e.target.value;
});

function removeGrid() {
    let squares = containerDiv.querySelectorAll('.square');
    squares.forEach((square) => {
      containerDiv.removeChild(square);
    });
}

function clearSquares() {
    let squares = containerDiv.querySelectorAll('.square');
    squares.forEach((square) => {
      square.style.backgroundColor = 'white';
    });
}

const dimensionsInput = document.getElementById('dimensions-input');
const value = document.getElementById('value');
dimensionsInput.addEventListener('input', updateInputValue);
value.textContent = '50 x 50';
value.style.margin = 'auto';

function updateInputValue() {
    value.textContent = `${dimensionsInput.value} x ${dimensionsInput.value}`;
    removeGrid();
    createGrid(dimensionsInput.value);
}




