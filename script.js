"use strict";

const gameboard = (() => {
  let gameBoard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],
  };

  return { gameBoard };
})();

const displayController = (() => {
  let ticTacToeGrid = document.getElementById("ticTacToeGrid");

  for (let i = 0; i < gameboard.gameBoard.gameboard.length; i++) {
    ticTacToeGrid.children[i].textContent = gameboard.gameBoard.gameboard[i];
  }

  const ticTacToeBoxes = document.querySelectorAll(".ticTacToeBox");

  let playerTurn = "X";

  ticTacToeBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      if (box.textContent != "") {
        return;
      }
      if (playerTurn === "X") {
        box.textContent = playerTurn;
        playerTurn = "O";
      } else if (playerTurn === "O") {
        box.textContent = playerTurn;
        playerTurn = "X";
      }
    });
  });

  return { ticTacToeGrid };
})();

const Player = (playerName, playerMarker) => {
  return { playerName, playerMarker };
};
