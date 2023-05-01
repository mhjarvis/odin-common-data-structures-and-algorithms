/* KNIGHTS TRAVAILS

1. Create variables:
    a. Variable to hold the graph data structure (this will hold where a knight can move to from each space).
    b. Variable for the chessboard (this will be an array with coordinates).
    c. Variable for the moves a knight can make.
2. Create function to populate the chess board array.
3. Create function to populate the graph.
    a. Take each space and create new array that tracks all valid moves a knight can make. 
    b. Test to make sure only valid moves will be saved.
    c. Moves outside the borad are invalid. 
    d. Add these arrays to the graph data structure in the form of an adjacency list.
4. 

*/

let graph = {};                     // hold all possible moves per chess board space
let chessBoard = [];                // coordinates of each space
let moves = [                       // all possible moves a knight can make
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
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            chessBoard.push([i, j])
        }
    }
}

// Create graph of all locations a knight can move to
function createGraph() {

    for (let coordinate of chessBoard) {            // cycle through each board space

        graph[coordinate] = []                      // add key to graph as coordinate

        for (let move of moves) {                   // cycle through each move
            let testX = move[0] + coordinate[0];    // get new x coordinate
            let testY = move[1] + coordinate[1];    // get new y coordinate

            if (testX >= 1 && testX <= 8 && testY >= 1 && testY <= 8) {     // test that coordinates are valid
                graph[coordinate].push([testX, testY]);                     // push coordinate to graph
            };
        }
    }
}

// Function that does breadth-first search keeping track of moves
function knightMoves(start, end) {

    let queue = [[start]];                  // set queue to include starting coordinate

    while (queue.length > 0) {              // activte queue

        const path = queue.shift();                     // assign first array to 'path'
        const current = path[path.length - 1];          // get last element in array

        if (current.toString() === end.toString()) {    // test for match

            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            for (let i = 1; i < path.length; i++) {
                console.log('   ', path[i]);
            }
            return;
        }

        for (let neighbor of graph[current]) {          // for each element that matches the graph key
            const updatePath = [...path];               // create copy of 'path' variable
            updatePath.push(neighbor);                  // push neighbor coordinate onto the path
            queue.push(updatePath);                        // push new path onto the queue            
        }
    }
}


createChessBoard();         // initialize chess board
createGraph()               // initialize graph

knightMoves([4, 4], [6, 8])     // test
knightMoves([5, 5], [5, 5])     // test
knightMoves([1, 1], [8, 8])     // test


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