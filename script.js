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

  let placeMarker = function (playerMarker, box, index) {
    box.textContent = playerMarker;
    board[index] = playerMarker;
  };

  let switchPlayer = function () {
    if (this.playerTurn === "X") {
      this.playerTurn = "O";
    } else if (this.playerTurn === "O") {
      this.playerTurn = "X";
    }
  };

  let checkWinner = function (gameText) {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != "") {
      gameboard.gameWon = true;
      if (board[0] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[0] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[3] === board[4] &&
      board[3] === board[5] &&
      board[3] != ""
    ) {
      gameboard.gameWon = true;
      if (board[3] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[3] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[6] === board[7] &&
      board[6] === board[8] &&
      board[6] != ""
    ) {
      gameboard.gameWon = true;
      if (board[6] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[6] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[0] === board[3] &&
      board[0] === board[6] &&
      board[0] != ""
    ) {
      gameboard.gameWon = true;
      if (board[0] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[0] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[1] === board[4] &&
      board[1] === board[7] &&
      board[1] != ""
    ) {
      gameboard.gameWon = true;
      if (board[1] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[1] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[2] === board[5] &&
      board[2] === board[8] &&
      board[2] != ""
    ) {
      gameboard.gameWon = true;
      if (board[2] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[2] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[0] === board[4] &&
      board[0] === board[8] &&
      board[0] != ""
    ) {
      gameboard.gameWon = true;
      if (board[0] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[0] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (
      board[2] === board[4] &&
      board[2] === board[6] &&
      board[2] != ""
    ) {
      gameboard.gameWon = true;
      if (board[2] === "X") {
        gameText.textContent = `${playerOne.playerName} wins!`;
      } else if (board[2] === "O") {
        gameText.textContent = `${playerTwo.playerName} wins!`;
      }
    } else if (board.every(checkTie)) {
      gameText.textContent = `Match tie.`;
    }
  };

  let checkTie = (cv) => cv != "";

  return {
    board,
    playerTurn,
    placeMarker,
    switchPlayer,
    checkWinner,
    gameWon,
  };
})();

const displayController = (() => {
  const ticTacToeBoxes = document.querySelectorAll(".ticTacToeBox");

  let pOneName = document.getElementById("pOneName");
  pOneName.textContent = playerOne.playerName;
  let pTwoName = document.getElementById("pTwoName");
  pTwoName.textContent = playerTwo.playerName;

  const gameText = document.getElementById("gameText");

  let playerTurn = playerOne.playerMarker;

  let gameTextChanger = function () {
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
