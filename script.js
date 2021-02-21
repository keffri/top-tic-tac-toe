"use strict";

const Player = (playerName, playerMarker) => {
  return { playerName, playerMarker };
};

let playerOne = Player("Keffri", "X");
let playerTwo = Player("Gina", "O");

const gameboard = (() => {
  let gameBoard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],

    playerTurn: "X",

    placeMarker: function (playerMarker, box, index) {
      box.textContent = playerMarker;
      gameBoard.gameboard[index] = playerMarker;
    },

    switchPlayer: function () {
      if (this.playerTurn === "X") {
        this.playerTurn = "O";
      } else if (this.playerTurn === "O") {
        this.playerTurn = "X";
      }
    },
  };

  return { gameBoard };
})();

const displayController = (() => {
  const ticTacToeBoxes = document.querySelectorAll(".ticTacToeBox");

  let playerTurn = playerOne.playerMarker;

  ticTacToeBoxes.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      if (box.textContent != "") {
        return;
      }
      if (playerTurn === "X") {
        gameboard.gameBoard.placeMarker(
          gameboard.gameBoard.playerTurn,
          box,
          index
        );
        gameboard.gameBoard.switchPlayer();
      } else if (playerTurn === "O") {
        gameboard.gameBoard.placeMarker(
          gameboard.gameBoard.playerTurn,
          box,
          index
        );
        gameboard.gameBoard.switchPlayer();
      }
    });
  });
})();
