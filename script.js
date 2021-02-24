"use strict";

const Player = (playerName, playerMarker) => {
  return { playerName, playerMarker };
};

let playerOne = Player("P1", "X");
let playerTwo = Player("P2", "O");

const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  let playerTurn = "X";

  let gameWon = false;

  const placeMarker = function (playerMarker, box, index) {
    box.textContent = playerMarker;
    board[index] = playerMarker;
  };

  const resetBoard = function () {
    board.fill("");
  };

  const switchPlayer = function () {
    if (this.playerTurn === "X") {
      this.playerTurn = "O";
    } else if (this.playerTurn === "O") {
      this.playerTurn = "X";
    }
  };

  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = function () {
    if (board.every(checkTie)) {
      gameText.textContent = `Match tie.`;
      return;
    }
    winningCombos.forEach((combo) => {
      if (
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]] &&
        board[combo[0]]
      ) {
        gameboard.gameWon = true;
        if (board[combo[0]] === "X") {
          gameText.textContent = `${playerOne.playerName} wins!`;
        } else if (board[combo[0]] === "O") {
          gameText.textContent = `${playerTwo.playerName} wins!`;
        }
      }
    });
  };

  const checkTie = (cv) => cv != "";

  return {
    board,
    playerTurn,
    placeMarker,
    switchPlayer,
    checkWinner,
    resetBoard,
    gameWon,
    winningCombos,
  };
})();

const displayController = (() => {
  const ticTacToeBoxes = document.querySelectorAll(".ticTacToeBox");
  const resetButton = document.getElementById("resetGame");

  const resetGame = function () {
    ticTacToeBoxes.forEach((box) => {
      box.textContent = "";
      box.style.pointerEvents = "auto";
    });
    gameboard.gameWon = false;
    gameboard.resetBoard();
    if (playerTurn === "X") {
      gameboard.playerTurn = "O";
      gameText.textContent = `${playerTwo.playerName}'s turn with ${gameboard.playerTurn}`;
    } else if (playerTurn === "O") {
      gameboard.playerTurn = "X";
      gameText.textContent = `${playerOne.playerName}'s turn with ${gameboard.playerTurn}`;
    }
  };

  resetButton.addEventListener("click", resetGame);

  let pOneName = document.getElementById("pOneName");
  pOneName.textContent = playerOne.playerName;
  let pTwoName = document.getElementById("pTwoName");
  pTwoName.textContent = playerTwo.playerName;

  const gameText = document.getElementById("gameText");

  let playerTurn = playerOne.playerMarker;

  const gameTextChanger = function () {
    if (playerTurn === "X") {
      gameText.textContent = `${playerOne.playerName}'s turn with ${playerTurn}`;
      playerTurn = "O";
    } else if (playerTurn === "O") {
      gameText.textContent = `${playerTwo.playerName}'s turn with ${playerTurn}`;
      playerTurn = "X";
    }
  };

  gameTextChanger();

  ticTacToeBoxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      if (box.textContent != "") {
        return;
      }

      if (playerTurn === "X") {
        gameboard.placeMarker(gameboard.playerTurn, box, index);
        gameTextChanger();
        gameboard.switchPlayer();
      } else if (playerTurn === "O") {
        gameboard.placeMarker(gameboard.playerTurn, box, index);
        gameTextChanger();
        gameboard.switchPlayer();
      }
      gameboard.checkWinner(gameText);
      if (gameboard.gameWon === true) {
        ticTacToeBoxes.forEach((box) => {
          box.style.pointerEvents = "none";
        });
      }
    });
  });
})();
