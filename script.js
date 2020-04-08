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
        width: 75vmin;
        height: 75vmin;`

    gridContainer.style = gridContainerStyles;

    return gridContainer;
}

function generateGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    let gridItemInitialStyles = `
        border: lightGray 1px solid;
        height:'100%';
        width: 100%;
        background-color: hsl(0, 0%, 100%);
        filter: brightness(1);`

    gridItem.style = gridItemInitialStyles;

    // To black out the squares I used the filter attribute
    // to diminish the brightness value.
    gridItem.addEventListener('mouseover', () => {
        let brightness = getComputedStyle(gridItem).filter;
        var regExp = /^brightness\(([^)]+)\)/;
        value = regExp.exec(brightness)[1]
        if (value==0) return;
        else gridItem.style.filter = brightness.replace(value, (value-0.1));
    });

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