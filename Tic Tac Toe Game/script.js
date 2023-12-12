const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function swapTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current player - ${currentPlayer}`;
}

function checkGameOver(){
    for(let i = 0;i<winPatterns.length;i++){

        // if(gameBoard[winPatterns[i][0]] !== "" && gameBoard[winPatterns[i][0]] === gameBoard[winPatterns[i][1]] && gameBoard[winPatterns[i][1]] === gameBoard[winPatterns[i][2]]){

        //or

        const [a, b, c] = winPatterns[i];
        if(gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]){

            if(gameBoard[a] === 'X'){
                gameInfo.innerText = `Winner player - X`;
            }
            else{
                gameInfo.innerText = `Winner player - X`;
            }

            console.log(currentPlayer);

            newGameBtn.classList.add("active");
            boxes[winPatterns[i][0]].classList.add("win");
            boxes[winPatterns[i][1]].classList.add("win");
            boxes[winPatterns[i][2]].classList.add("win");

            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })
        }
    }

    // let fillCount = 0;
    // gameBoard.forEach((box)=>{
    //     if(box !== ""){
    //         fillCount++;
    //     }
    // });

    // if(fillCount === 9){
    //     gameInfo.innerText ="Game Tied !";
    //     newGameBtn.classList.add("active");
    // }

    //or
    
    if(gameBoard.every(box => box !== "")){
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
    }
}

const flag = true;
function handleClick(index){
    if(gameBoard[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameBoard[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swaping turns
        swapTurn();
        checkGameOver();

    }
}


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {

        handleClick(index);

    })
});

function initGame(){
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //remove color
        boxes[index].classList.remove("win");

    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current player - ${currentPlayer}`;
}

initGame();

newGameBtn.addEventListener("click",initGame);








// let currentPlayer = 'X';
// let gameBoard = ['', '', '', '', '', '', '', '', ''];
// let gameActive = true;

// function handleCellClick(index) {
//   if (gameBoard[index] === '' && gameActive) {
//     gameBoard[index] = currentPlayer;
//     document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
//     if (checkWinner()) {
//       document.getElementById('status').innerText = `${currentPlayer} wins!`;
//       gameActive = false;
//     } else if (gameBoard.every(cell => cell !== '')) {
//       document.getElementById('status').innerText = 'It\'s a tie!';
//       gameActive = false;
//     } else {
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//       document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
//     }
//   }
// }

// function checkWinner() {
//   const winPatterns = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//     [0, 4, 8], [2, 4, 6]              // Diagonals
//   ];

//   return winPatterns.some(pattern => {
//     const [a, b, c] = pattern;
//     return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
//   });
// }

// function resetGame() {
//   currentPlayer = 'X';
//   gameBoard = ['', '', '', '', '', '', '', '', ''];
//   gameActive = true;

//   const cells = document.getElementsByClassName('cell');
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innerText = '';
//   }

//   document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
// }
