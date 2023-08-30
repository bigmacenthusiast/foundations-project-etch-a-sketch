const gridContainer = document.querySelector('#grid-container');
const buttonContainer = document.querySelector('#button-container');

const buttonCreateNewGrid = document.createElement('button');
buttonCreateNewGrid.textContent = 'Create New Grid';
const buttonRainbowMode = document.createElement('button');
buttonRainbowMode.textContent = 'Toggle Rainbow Mode';

buttonContainer.appendChild(buttonCreateNewGrid);
buttonContainer.appendChild(buttonRainbowMode);

let rainbowMode = false;
buttonRainbowMode.addEventListener('click', () => {
    rainbowMode = !rainbowMode; // Toggle the rainbow mode

    if  (rainbowMode) {
        buttonRainbowMode.style.backgroundColor = getRandomColor();
    } else {
        buttonRainbowMode.style = '';
    }
});

function createGrid(num) {
    num = prompt('Enter number of squares per side:');
    if (num <= 100) {
        gridContainer.innerHTML = '';

        for (i = 0; i < num * num; i++) {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square');
            squareElement.style.width = `calc(100% / ${num})`;
            squareElement.style.height = `calc(100% / ${num})`;
            gridContainer.appendChild(squareElement);
            
            squareElement.addEventListener('mouseover', () => {
                if (rainbowMode) {
                    squareElement.style.backgroundColor = getRandomColor();
                } else {
                    squareElement.style.backgroundColor = 'black';
                }
            });
        }
    } else {
        alert('Please enter a number less than 100.');
    }
}

buttonCreateNewGrid.addEventListener('click', createGrid);

function getRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}






