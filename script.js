const gridContainer = document.querySelector('#grid-container');
const buttonContainer = document.querySelector('#button-container');

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Create New Grid';
buttonContainer.appendChild(buttonElement);

function createGrid(num) {
    num = prompt('Enter number of squares per side:');
    if (num <= 100) {
        for (i = 0; i < num * num; i++) {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square');
            squareElement.style.width = `calc(100% / ${num})`;
            squareElement.style.height = `calc(100% / ${num})`;
            gridContainer.appendChild(squareElement);

            squareElement.addEventListener('mouseenter', () => {
                squareElement.classList.add('hovered');
            });
        }
    } else {
        alert('Please enter a number less than 100.');
    }
}

buttonElement.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid();
})

