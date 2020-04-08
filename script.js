function drawGrid(rows, cols) {

    const wrapper = document.querySelector('.grid-wrapper');
    const gridContainer = generateGridContainer(rows, cols);

    for(let i=0; i<rows; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.style.display = 'flex';
        gridRow.style.height = '100%';
        for (let j=0; j<cols; j++) {
            const gridItem = generateGridItem(i,j);
            gridRow.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRow);
    }
    wrapper.appendChild(gridContainer);
}

function generateGridContainer(rows, cols) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    let gridContainerStyles = `
        display: flex;
        flex-direction: column;
        border: 5px solid black;
        margin: auto;
        width: 60vw;
        height: 60vw;`

    gridContainer.style = gridContainerStyles;

    return gridContainer;
}

function generateGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    let gridItemInitialStyles = `
        border: lightGray;
        height:'100%';
        width: 100%`

    gridItem.style = gridItemInitialStyles;

    gridItem.addEventListener('mouseover', () => gridItem.style.backgroundColor = 'black' );

    return gridItem;
}

function clearGrid() {
    const wrapper = document.querySelector('.grid-wrapper');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
}

function resetGrid() {
    const rows = prompt('How many rows?');
    const cols = prompt('How many columns?');
    clearGrid();
    drawGrid(rows, cols);
}

drawGrid(16,16);

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetGrid);