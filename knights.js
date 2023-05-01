/* KNIGHTS TRAVAILS


*/

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
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
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

            if (testX >= 1 && testX <= 8 && testY >= 1 && testY <= 8) {
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

function knightMoves(start, end) {

    let visited = [];
    let queue = [[start]];

    while (queue.length > 0) {

        const path = queue.shift();
        const current = path[path.length - 1];
        console.log(path, '\n')

        if (current.toString() === end.toString()) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            for (let i = 1; i < path.length; i++) {
                console.log('   ', path[i]);
            }
            return;
        }

        for (let neighbor of graph[current]) {
            const newPath = [...path];     //this is not reseting
            newPath.push(neighbor);
            queue.push(newPath);
           // console.log(newPath)
            
        }



        

    }
}


createChessBoard();
createGraph()


console.log(graph)


knightMoves([4, 4], [6,8])


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