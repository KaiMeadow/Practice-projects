function Gameboard() {
  const board = Array(9).fill("");

  const getBoard = () => board;

  const placeMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
    }
  }

  const reset = () => {
    for (let i=0; i < board.length; i++) {
      board[i] = "";
    }
  }

  return {
    getBoard,
    placeMark,
    reset,
  };
}

function Player(name, mark) {
  let score = 0
  const getName = () => name;
  const getMark = () => mark;
  const getScore = () => score;

  const increaseScore = () => score++;
  
  return {
    getName,
    getMark,
    getScore,
    increaseScore,
  };

}

function Game(player1Name, player2Name) {
  let winner = null;
  let gameOver = false;

  const player1 = Player(player1Name, "X");
  const player2 = Player(player2Name, "O");
  
  let currentPlayer = player1;
  const switchTurn = () => {
  if(currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

  const gameboard = Gameboard();
  const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
  ]

  const checkWin = () => {
      const currentBoard = gameboard.getBoard();

      for (let i = 0; i < winningConditions.length; i++) {
        const combo = winningConditions[i];
        const a = combo[0];
        const b = combo[1];
        const c = combo[2];

        if (currentBoard[a] != "" && currentBoard[a] == currentBoard[b] && currentBoard[a] == currentBoard[c]) {
          return true;
        }
      }
      return false;
    }

  const playRound = (index) => {
    if (gameOver) {
      return;
    }
    const boardState = gameboard.getBoard();

    if(boardState[index] !== "") {
      return;
    }

    gameboard.placeMark(index, currentPlayer.getMark());

    if (checkWin()) {
      winner = currentPlayer;
      gameOver = true;
      return;
    }

    if (!boardState.includes("")) {
      gameOver = true;
      return;
    }

    switchTurn();
    
  }
  
  const getWinner = () => winner;
  const getGameOver = () => gameOver;
  const getCurrentPlayer = () => currentPlayer;
  const getBoard = () => gameboard.getBoard();

  return {
    playRound,
    getBoard,
    getWinner,
    getGameOver,
    getCurrentPlayer,
  }

}

function displayController() {
  const game = Game("player1", "player2");
  const cells = document.querySelectorAll(".cell");
  const board = game.getBoard();

  const render = () => {
    game.playRound(index);
    
    for (let i = 0; i < board.length; i++) {
      cells[i].textContent = board[i];
    }
  }

  cells.addEventListener("click", (event) => {
    
  })
}