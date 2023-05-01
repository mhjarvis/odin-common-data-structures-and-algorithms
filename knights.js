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
        //console.log(chessBoard[chessBoard.indexOf(cordinates)])

        let index = cordinates;//`[${chessBoard[chessBoard.indexOf(cordinates)]}]`;
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

function knightsTravails(start, end) {

    if (start.toString() === end.toString()) {
        return end;
    }

    let queue = [start];
    count = 0;

    while (queue.length > 0) {

        
        const current = queue.shift();
        console.log(current)

        if (current.toString() === end.toString()) {
            return count;
        }

        count++;

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }

    }
    return false;
}

function knightsShortestPath(start, end) {

    let visited = [];
    //let path = [];
    let queue = [[start, []]];

    while (queue.length > 0) {

        let current = queue.shift();            // [4, 4]
        console.log('\nCurrent = ', current)

        // console.log(graph[current[0]])

        for (let neighbor of graph[current[0]]) {

            console.log('\nNeighbors: ')
            console.log(neighbor, (neighbor.toString()) === end.toString())



            if (neighbor.toString() === end.toString()) {
                console.log("found it", current)
                return current[1];
            }

            let updatePath = current[1].push(current[0]);
            queue.push([neighbor, updatePath]);
        }
        console.log("\npoop")
        return;

    }








    return;
}


createChessBoard();
createGraph()


//console.log(graph)


knightsShortestPath([4, 4], [6, 5])


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