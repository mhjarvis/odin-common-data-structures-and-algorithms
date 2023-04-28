/*

Gameboard

1. Looking at using the Graph data structure.
2. Need to create the data structure.
    a. create function that tests wether a chess piece move will be outside the board.
    b. create function that will go through each board space and add a array of possible moves to the graph data sstructure. for-loop?

*/

// Create graph of the gameboard with all possible moves from a location

let graph = {};
let chessBoard = [];
let moves = [
    [1, 2], 
    [1, -2], 
    [-1, 2], 
    [-1, -2], 
    [2, 1], 
    [2, -1], 
    [-2, 1], 
    [-2, -1]
]

// Create chessboard array holding all board coordinates
function createChessBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            chessBoard.push([i, j])
        }
    }
}

// Create graph of all locations a knight can move to
function createGraph() {

    for (let cordinates of chessBoard) {
        //const index = chessBoard.indexOf(cordinates) + 1;       // index variable
        //graph[index] = [];                                      // create key with empty arr in graph
        console.log(chessBoard[chessBoard.indexOf(cordinates)])

        let index = `[${chessBoard[chessBoard.indexOf(cordinates)]}]`;
        graph[index] = []
        for (let move of moves) {

            let testX = move[0] + cordinates[0];
            let testY = move[1] + cordinates[1];

            if (testX >= 0 && testX <= 7 && testY >= 0 && testY <= 7) {
                graph[index].push([testX, testY]);
            };
        }
    }
}


createChessBoard();
createGraph()
console.log('test')
console.log(graph)


/*

let gameBoard = []

for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        const squareObj = {
            x: 1,
            y: j,
        }
        gameBoard.push(squareObj);
    }

}

// create gameboard and display
(function () {
    
    const getBoardElement = document.querySelector('.gameboard');

    for(let i = 0; i < gameBoard.length; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.id = 's' + i;
        div.innerHTML = gameBoard[i].x + ", " + gameBoard[i].y;
        getBoardElement.appendChild(div);
    }

}())

let knight = {
    name: 'Knight',
    moves: [
        [1, 2], 
        [1, -2], 
        [-1, 2], 
        [-1, -2], 
        [2, 1], 
        [2, -1], 
        [-2, 1], 
        [-2, -1]
    ]
}

function knightMoves(start, end) {

    if(start[0] == end[0] && start[1] == end[1]) 
        return 'No moves neccessary'

    let x = start[0];
    let y = start[1];

    let arr = [];

    for(let i = 0; i < knight.moves.length; i++) {
        let newArr = [];
        newArr.push(x + knight.moves[i][0]);
        newArr.push(y + knight.moves[i][1]);
        arr.push(newArr);
    }

    console.log(arr[0])
    return arr;

}





console.log(knightMoves([3, 3], [3, 4]))
*/