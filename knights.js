
let gameBoard = []
index = 0;


for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        gameBoard.push([i, j])
    }

}

// create gameboard and display
(function () {
    
    const getBoardElement = document.querySelector('.gameboard');

    for(let i = 0; i < gameBoard.length; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.id = 's' + i;
        getBoardElement.appendChild(div);
    }



}())